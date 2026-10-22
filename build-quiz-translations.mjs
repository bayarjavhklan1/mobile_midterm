import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const directory = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(directory, "quiz-data.js");
const outputPath = path.join(directory, "quiz-translations.js");
const cachePath = path.join(directory, ".quiz-translation-cache.json");
const separator = "ZXQSEPARATORZXQ";
const execFileAsync = promisify(execFile);
const cacheVersion = 3;

const context = { window: {} };
vm.runInNewContext(fs.readFileSync(sourcePath, "utf8"), context);
const questions = context.window.QUIZ_QUESTIONS;
const savedCache = fs.existsSync(cachePath)
  ? JSON.parse(fs.readFileSync(cachePath, "utf8"))
  : {};
const cache = savedCache.__version === cacheVersion ? savedCache.entries : {};

const protectedTerms = [
  "Android Studio",
  "Background Task Inspector",
  "Database Inspector",
  "Layout Inspector",
  "Device Manager",
  "Android",
  "Kotlin",
  "Jetpack Compose",
  "Compose",
  "Material Design",
  "Material Theme Builder",
  "WorkManager",
  "CoroutineWorker",
  "ListenableWorker",
  "Room",
  "DataStore",
  "Preferences DataStore",
  "Proto DataStore",
  "Retrofit",
  "Coil",
  "ViewModel",
  "StateFlow",
  "SharedFlow",
  "Flow",
  "LiveData",
  "NavHost",
  "NavController",
  "BackHandler",
  "TalkBack",
  "Switch Access",
  "Gradle",
  "SQLite",
  "SQL",
  "JSON",
  "HTTP",
  "REST",
  "URI",
  "URL",
  "API",
  "IDE",
  "JVM",
  "IATA",
  "String",
  "Int",
  "Double",
  "Float",
  "Boolean",
  "Unit",
  "Decimal",
  "List",
  "Set",
  "Map",
  "MutableList",
  "MutableSet",
  "MutableMap",
  "Column",
  "Row",
  "Box",
  "Surface",
  "Modifier",
  "Composable",
  "Activity",
  "Application",
  "Repository",
  "DAO",
  "Worker",
  "OneTimeWorkRequest",
  "PeriodicWorkRequest",
  "WorkRequest",
  "WorkInfo",
  "SUCCEEDED",
  "FAILED",
  "CANCELLED",
  "BLOCKED",
  "RUNNING",
  "ENQUEUED",
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "INSERT",
  "UPDATE",
  "SELECT",
  "WHERE",
  "ORDER BY",
  "GROUP BY",
  "foreign key",
  "primary key",
  "val",
  "var",
  "null",
  "final",
  "open",
  "sealed",
  "suspend",
  "data class",
  "mutableStateOf",
  "rememberSaveable",
  "remember",
  "map",
  "filter",
  "forEach",
  "composable function",
  "composable functions",
  "composable",
  "composables",
  "recomposition",
  "observable",
  "state",
  "UI",
  "main thread",
  "thread",
  "dispatcher",
  "coroutine",
  "coroutines",
  "scope",
  "Job",
  "async",
  "launch",
  "withContext",
  "endpoint",
  "serialization",
  "deserialization",
  "repository",
  "Dependency Injection",
  "entity",
  "database",
  "schema",
  "query",
  "cold flow",
  "hot flow",
  "worker",
  "workers",
  "work request",
  "constraints",
  "input Data",
  "output Data",
  "Data",
  "tag",
  "id",
  "unique work",
  "work chaining",
  "terminal state",
  "retry",
  "backoff",
  "Profiler",
  "Logcat",
  "Main",
  "Default",
  "spring",
  "damping ratio",
  "stiffness",
  "theme",
  "themes",
  "dark theme",
  "light theme",
  "breakpoint",
  "window size class",
  "compact",
  "medium",
  "expanded",
  "navigation rail",
  "list-detail",
  "Back",
  "Up",
  "back stack",
  "route",
  "destination",
  "NavGraph",
  "instrumented test",
  "local test",
  "unit test",
  "UI test",
  "emulator",
];

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const protectedTermPattern = new RegExp(
  `\\b(${protectedTerms.sort((a, b) => b.length - a.length).map(escapeRegExp).join("|")})\\b`,
  "g",
);

const isCodeOnly = (value) => {
  const text = value.trim();
  if (/^(True|False)$/i.test(text)) return false;
  if (/^(GET|POST|PUT|PATCH|DELETE)$/i.test(text)) return true;
  if (/^`[^`]+`$/.test(text)) return true;
  if (/[{}=]|\+\+|--|->|::/.test(text) && !/[.!?]\s*$/.test(text)) return true;
  if (/^[A-Za-z_]\w*(\s*[+\-*/%]\s*[A-Za-z_0-9]+)+$/.test(text)) return true;
  if (/^(val|var|fun|class|interface|data class|@\w+)/.test(text)) return true;
  return false;
};

const protectText = (value) => {
  const placeholders = [];
  const addPlaceholder = (match) => {
    const token = `ZXQPH${placeholders.length}ZXQ`;
    placeholders.push(match);
    return token;
  };

  let text = value.replace(/`[^`]+`/g, addPlaceholder);
  text = text.replace(
    /\b(?:NOT\s+)?[A-Za-z_]\w*\s*(?:=|!=|==)\s*(?:true|false|\d+|[A-Za-z_]\w*)/g,
    addPlaceholder,
  );
  text = text.replace(/[@A-Za-z_][\w.<>?]*\([^\n)]{0,80}\)/g, addPlaceholder);
  text = text.replace(protectedTermPattern, addPlaceholder);
  text = text.replace(/_{3,}/g, addPlaceholder);
  return { text, placeholders };
};

const restoreText = (value, placeholders) => {
  let result = value;
  placeholders.forEach((original, index) => {
    result = result.replaceAll(`ZXQPH${index}ZXQ`, original);
  });
  return result.trim();
};

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const translateRequest = async (values, attempt = 0) => {
  const protectedValues = values.map(protectText);
  const query = protectedValues.map((item) => item.text).join(`\n${separator}\n`);
  await wait(350);

  let stdout;
  try {
    ({ stdout } = await execFileAsync("curl", [
      "-fsSL",
      "--get",
      "https://translate.googleapis.com/translate_a/single",
      "--data-urlencode", "client=gtx",
      "--data-urlencode", "sl=en",
      "--data-urlencode", "tl=mn",
      "--data-urlencode", "dt=t",
      "--data-urlencode", `q=${query}`,
    ], { maxBuffer: 4 * 1024 * 1024 }));
  } catch (error) {
    if (values.length > 1) {
      const middle = Math.ceil(values.length / 2);
      return [
        ...await translateRequest(values.slice(0, middle), attempt),
        ...await translateRequest(values.slice(middle), attempt),
      ];
    }
    if (attempt < 8) {
      await wait(1_500 * (attempt + 1));
      return translateRequest(values, attempt + 1);
    }
    throw new Error(`Translation request failed: ${error.message}`);
  }
  const data = JSON.parse(stdout);
  const translatedText = data[0].map((part) => part[0]).join("");
  const translatedValues = translatedText.split(separator).map((value) => value.trim());

  if (translatedValues.length !== values.length) {
    if (values.length === 1) return [restoreText(translatedText, protectedValues[0].placeholders)];
    const fallback = [];
    for (const value of values) fallback.push(...await translateRequest([value]));
    return fallback;
  }

  return translatedValues.map((value, index) => (
    restoreText(value, protectedValues[index].placeholders)
  ));
};

const translatable = [];
for (const question of questions) {
  translatable.push({ id: question.id, type: "prompt", index: null, value: question.prompt });
  question.options.forEach((option, index) => {
    translatable.push({ id: question.id, type: "option", index, value: option });
  });
}

const results = new Map();
let batch = [];
let batchLength = 0;

const manualTranslations = {
  True: "Үнэн",
  False: "Худал",
  true: "Үнэн",
  false: "Худал",
};

const manualQuestionOverrides = {
  1: {
    prompt: "Дараах хувьсагчийн зарлалтуудаас аль нь зөв бэ?",
  },
  36: {
    prompt: "number нь 25-тай тэнцүү үед дараах код \"Divisible by 5\" гэж хэвлэнэ. if (number % 10 == 0) { println(\"Divisible by 10\") } else if (number == 5) { println(\"Divisible by 5\") }",
  },
  50: {
    prompt: "Composable function дотор ___ утгыг ашигласнаар хувьсагч observable болж, утга нь өөрчлөгдөхөд recomposition явагдана.",
  },
  57: {
    prompt: "___ гэдэг нь component-ийг stateless болгохын тулд state-ийг дээш шилжүүлэх загвар юм.",
    options: ["State change", "State hoisting", "Hoist composition", "Recomposition"],
  },
  71: {
    prompt: "Set болон Map-ийн талаар дараах өгүүлбэрүүдээс аль нь зөв бэ?",
    options: [
      "Set нь давхардалгүй утгууд агуулна, Map-ийн key-үүд мөн давхардалгүй байна.",
      "Set нь давхардалгүй утгууд агуулна, харин Map-ийн key давхардаж болно.",
      "Set давхардсан утга агуулж болно, Map-ийн value мөн давхардаж болно.",
      "Set давхардсан утга агуулж болно, харин Map-ийн key давхардалгүй байна.",
    ],
  },
  72: {
    prompt: "Collection төрөлтэй records хувьсагчийн элементийн тоог мэдэхийн тулд ___-ийг дуудна.",
  },
  82: {
    prompt: "Spring animation юунд үндэслэдэг вэ?",
    options: [
      "Тодорхой хугацаан дахь эхлэх ба төгсөх утга.",
      "Damping ratio болон stiffness.",
      "Өөр өөр timestamp дээр заасан snapshot утгууд.",
      "Хоёр keyframe утгын хоорондох interpolation.",
    ],
  },
  83: {
    prompt: "Spring animation нь spring force-оор хөдөлдөг физикт суурилсан animation юм.",
  },
  96: {
    options: ["MutableState{}", "rememberSaveable{}", "remember{}", "State hoisting"],
  },
  105: {
    prompt: "NavHostController-ийг composable бүрт шууд дамжуулахгүй байх нь зөв практик юм.",
  },
  110: {
    prompt: "Олон дэлгэцтэй апп-д шинэ дэлгэц рүү navigate хийхэд тухайн дэлгэц back stack-ийн доод хэсэгт нэмэгдэнэ.",
  },
  128: {
    prompt: "Structured concurrency болон түүний зөв практикийн талаар аль өгүүлбэрүүд зөв бэ?",
    options: [
      "Parent coroutine цуцлагдвал child coroutine-ууд мөн цуцлагдана.",
      "Parent scope нь child-үүд дуусахаас өмнө дуусаж болно.",
      "Алдаа parent coroutine-ийг цуцлахгүйгээр зөвхөн доош тархана.",
      "Coroutine-ийг coroutine scope дотроос эхлүүлэх ёстой.",
    ],
  },
  144: {
    options: [
      "Нэг хүснэгтийн primary key-г өөр хүснэгтээс зааснаар хүснэгтүүдийн холбоог загварчилж болно.",
      "SQLite database нь хүснэгт ба мөрөөс тогтсон багануудаас бүрдэнэ.",
      "Өгөгдлийн хүснэгт бүр дор хаяж нэг foreign key-тэй байх ёстой.",
      "Row бүр database дахь нэг бичлэгийг агуулна.",
    ],
  },
  154: {
    prompt: "@Query annotation-ий талаар дараах өгүүлбэрүүдээс аль нь буруу вэ?",
    options: [
      "@Query annotation-ийг DAO дахь method-той ашигладаг.",
      "@Query annotation нь SELECT query-г тодорхойлж чадна.",
      "@Query annotation нь нэрийн өмнө colon тавьж argument-ийг SQL statement-д дамжуулж чадна.",
      "@Query annotation-ийг зөвхөн suspend function-тэй ашиглаж болно.",
    ],
  },
  157: {
    prompt: "DAO-ийн зорилго юу вэ?",
    options: [
      "ViewModel болон database-ийн reference-ийг хадгалах.",
      "SELECT, INSERT зэрэг SQL statement-д харгалзах function-уудыг тодорхойлох.",
      "Database instance үүсгэх factory method өгөх.",
      "Шинэ database instance үүсгэх.",
    ],
  },
  158: {
    prompt: "Database үүсгэхдээ яагаад synchronized() function ашигладаг вэ?",
    options: [
      "Database-ийн олон хуулбар үүсгэхийн тулд.",
      "Олон thread кодод нэгэн зэрэг аюулгүй хандахын тулд.",
      "Race condition-оос сэргийлэхийн тулд.",
      "Нэг агшинд зөвхөн нэг thread тухайн code block-д орохыг баталгаажуулахын тулд.",
    ],
  },
  164: {
    prompt: "DataStore-ийн implementation-ууд аль нь вэ?",
    options: ["Proto", "Preferences", "Room", "SQLite"],
  },
  170: {
    options: ["CANCELLED", "DELETED", "FAILED", "SUCCEEDED"],
  },
  171: {
    options: ["OneTimeWorkRequest", "SingleWorkRequest", "RepeatingWorkRequest", "PeriodicWorkRequest"],
  },
  173: {
    prompt: "Work constraint-ийг дараах нөхцөлүүдийн алинд ашиглах нь тохиромжтой вэ?",
  },
  177: {
    prompt: "CoroutineWorker-ийг тестлэхэд аль worker builder-ийг ашиглахыг зөвлөдөг вэ?",
    options: [
      "OneTimeWorkRequestBuilder",
      "PeriodicWorkRequestBuilder",
      "TestWorkerBuilder",
      "TestListenableWorkerBuilder",
    ],
  },
  178: {
    prompt: "Worker implementation-ийг тестлэхдээ worker-ийг enqueue хийхийн оронд doWork()-ийг шууд дуудаж болно.",
  },
};

const flush = async () => {
  if (batch.length === 0) return;
  const translated = await translateRequest(batch.map((item) => item.value));
  batch.forEach((item, index) => {
    const value = isCodeOnly(item.value) ? item.value : translated[index];
    results.set(`${item.id}:${item.type}:${item.index ?? ""}`, value);
    cache[item.value] = value;
  });
  fs.writeFileSync(
    cachePath,
    JSON.stringify({ __version: cacheVersion, entries: cache }, null, 2),
    "utf8",
  );
  process.stdout.write(`Translated ${results.size}/${translatable.length}\r`);
  batch = [];
  batchLength = 0;
};

for (const item of translatable) {
  const resultKey = `${item.id}:${item.type}:${item.index ?? ""}`;
  if (manualTranslations[item.value]) {
    results.set(resultKey, manualTranslations[item.value]);
    continue;
  }
  if (isCodeOnly(item.value)) {
    results.set(resultKey, item.value);
    continue;
  }
  if (cache[item.value]) {
    results.set(resultKey, cache[item.value]);
    continue;
  }

  const nextLength = batchLength + item.value.length + separator.length;
  if (batch.length >= 5 || nextLength > 900) await flush();
  batch.push(item);
  batchLength += item.value.length + separator.length;
}
await flush();

const translations = Object.fromEntries(questions.map((question) => [
  question.id,
  (() => {
    const override = manualQuestionOverrides[question.id] ?? {};
    return {
      prompt: override.prompt ?? results.get(`${question.id}:prompt:`),
      options: override.options ?? question.options.map((option, index) => (
        manualTranslations[option] ?? results.get(`${question.id}:option:${index}`)
      )),
    };
  })(),
]));

const output = `// Generated by build-quiz-translations.mjs.\nwindow.QUIZ_TRANSLATIONS_MN = ${JSON.stringify(translations, null, 2)};\n`;
fs.writeFileSync(outputPath, output, "utf8");
console.log(`\nGenerated Mongolian translations for ${questions.length} questions.`);
