import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const directory = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(directory, "shalgalt.md");
const outputPath = path.join(directory, "quiz-data.js");

const questionStartLines = [
  1, 10, 15, 25, 30, 39, 44, 53, 63, 73, 79, 88, 97, 107, 117, 125,
  134, 144, 153, 165, 178, 187, 192, 201, 210, 220, 229, 234, 243, 253,
  262, 271, 280, 289, 294, 304, 315, 325, 334, 343, 352, 361, 370, 379,
  388, 398, 407, 412, 421, 426, 435, 444, 454, 463, 468, 477, 486, 495,
  504, 513, 518, 527, 537, 546, 551, 560, 569, 578, 588, 600, 609, 618,
  628, 633, 642, 651, 660, 669, 678, 687, 697, 706, 715, 720, 729, 738,
  743, 748, 757, 766, 775, 780, 790, 799, 808, 817, 826, 831, 836, 845,
  850, 859, 865, 874, 879, 884, 893, 902, 911, 920, 925, 934, 939, 954,
  963, 973, 982, 987, 996, 1005, 1010, 1015, 1026, 1036, 1043, 1044,
  1054, 1063, 1073, 1083, 1092, 1097, 1106, 1116, 1125, 1130, 1139,
  1148, 1157, 1166, 1176, 1181, 1190, 1196, 1206, 1211, 1220, 1229,
  1234, 1244, 1249, 1258, 1267, 1273, 1282, 1291, 1300, 1309, 1319,
  1326, 1327, 1337, 1342, 1352, 1362, 1367, 1376, 1381, 1390, 1399, 1409,
  1419, 1424, 1433, 1442, 1452, 1457, 1466,
];

const answerKeys = {
  1: [2], 2: [1], 3: [0, 2, 3], 4: [0], 5: [1], 6: [0], 7: [2],
  8: [0, 1, 3], 9: [0, 2, 3], 10: [0], 11: [2], 12: [1],
  13: [0, 1], 14: [2, 3], 15: [3], 16: [0], 17: [0, 1, 2], 18: [2],
  19: [1, 2, 4], 20: [4], 21: [3], 22: [0], 23: [2], 24: [3],
  25: [2], 26: [0], 27: [0], 28: [2], 29: [0, 1, 3], 30: [1],
  31: [2], 32: [1], 33: [3], 34: [0], 35: [2], 36: [1],
  37: [0, 1, 2], 38: [1], 39: [2], 40: [1], 41: [2], 42: [1],
  43: [3], 44: [0], 45: [1], 46: [2], 47: [0], 48: [0], 49: [0],
  50: [3], 51: [2], 52: [1], 53: [0], 54: [0], 55: [1], 56: [0],
  57: [1], 58: [1], 59: [1], 60: [0], 61: [1], 62: [2], 63: [0],
  64: [0], 65: [3], 66: [0], 67: [3], 68: [0, 2, 3], 69: [0, 1],
  70: [1], 71: [0], 72: [3], 73: [0], 74: [2], 75: [3], 76: [1],
  77: [0], 78: [2], 79: [3], 80: [0], 81: [3], 82: [1], 83: [0],
  84: [0], 85: [2], 86: [1], 87: [0], 88: [0], 89: [0], 90: [3],
  91: [1], 92: [2], 93: [0], 94: [3], 95: [1], 96: [1], 97: [0],
  98: [0], 99: [1], 100: [0], 101: [1], 102: [1], 103: [2],
  104: [0], 105: [0], 106: [2], 107: [1], 108: [3], 109: [1],
  110: [1], 111: [1], 112: [0], 113: [0, 5], 114: [1],
  115: [0, 2, 3], 116: [3], 117: [0], 118: [3], 119: [2], 120: [1],
  121: [0], 122: [0], 123: [3], 124: [0], 125: [0], 126: [1, 2, 3],
  127: [0], 128: [0, 3], 129: [0, 1, 3], 130: [2], 131: [0],
  132: [2], 133: [3], 134: [3], 135: [0], 136: [2], 137: [3],
  138: [1], 139: [0, 2], 140: [0, 1, 2], 141: [1], 142: [3],
  143: [0], 144: [0, 3], 145: [0], 146: [0], 147: [2], 148: [1],
  149: [1, 3], 150: [1], 151: [2], 152: [1], 153: [0], 154: [3],
  155: [3], 156: [0], 157: [1], 158: [1, 2, 3], 159: [0], 160: [0],
  161: [0, 1, 2, 3], 162: [0], 163: [2], 164: [0, 1], 165: [1],
  166: [2], 167: [0], 168: [1], 169: [1], 170: [0, 2, 3],
  171: [0, 3], 172: [1], 173: [2], 174: [1], 175: [0, 1, 2],
  176: [0], 177: [3], 178: [0],
};

const customExplanations = {
  2: "Өөрчлөгдөхгүй утгыг val-аар зарлавал дахин утга оноохоос хамгаалдаг. var нь өөрчлөгдөх утгад хэрэглэгдэнэ.",
  3: "++ болон -- нь утгыг нэгээр өөрчилнө. total - 1 нь зөвхөн тооцоолол бөгөөд үр дүнг total-д буцаан оноохгүй.",
  8: "Буцаах төрөл бичээгүй функц Unit буцаана. Буцаасан утгыг хувьсагчид хадгалж болох ба төрөл нь зарласан return type-тэй таарах ёстой.",
  11: "Kotlin class анхнаасаа final байдаг. Удамшуулах шаардлагатай бол open гэж тэмдэглэнэ.",
  13: "Extension function нь эх классыг өөрчлөхгүйгээр шинэ функцийг тухайн төрлийн объект дээр цэгэн тэмдэглэгээгээр дууддаг болгоно.",
  14: "Data class нь өгөгдөл хадгалахад зориулагдсан бөгөөд property access болон toString, equals, copy зэрэг хэрэгтэй функцуудыг үүсгэнэ.",
  15: "Kotlin-д class-ийг удамшуулах боломжтой болгохын тулд open түлхүүр үг хэрэглэнэ.",
  18: "Emulator нь бодит төхөөрөмжгүй үед Android төхөөрөмжийн орчныг дуурайлган аппыг ажиллуулж шалгана.",
  19: "Project template нь эхлэх бүтэц, нийтлэг код болон зөв практикийг бэлдэж өгдөг учраас хурдан бөгөөд алдаа багатай эхлүүлнэ.",
  25: "Surface заавал бүх UI-г агуулах албагүй. Compose UI нь олон төрлийн composable-оос бүрдэж болно.",
  29: "Column, Row, Box нь хүүхэд элементүүдийг босоо, хэвтээ болон давхарласан байдлаар байрлуулах үндсэн layout-ууд юм.",
  36: "25 нь 10-д үлдэгдэлгүй хуваагдахгүй, дараагийн нөхцөлд number == 5 мөн биш. Тиймээс уг текст хэвлэгдэхгүй.",
  37: "x нь 5 тул тэнцүүгийн шалгалт, 1..5 муж болон Int төрлийн шалгалт бүгд үнэн. x % 5 нь Boolean нөхцөл биш.",
  43: "?. нь safe-call оператор. Объект null бол функцийг дуудахгүй, үр дүн нь null болно.",
  50: "mutableStateOf утга өөрчлөгдөхөд Compose-д ажиглагдах state үүсгэж, хамааралтай UI-г дахин зурна.",
  54: "Composition-д харагдах өөрчлөлт оруулах үндсэн зам нь state өөрчлөгдөхөд явагдах recomposition юм.",
  57: "State hoisting гэдэг нь state болон түүнийг өөрчлөх callback-ийг дээд түвшинд гаргаж, доод composable-ийг stateless болгох загвар.",
  64: "Sealed төрлийн шууд дэд классууд нэг package, нэг module дотор байх хязгаарлалттай тул боломжит төрлүүдийг compiler мэдэж чадна.",
  68: "map, filter, forEach нь lambda буюу функц параметрээр авдаг учраас higher-order function юм.",
  69: "List-ийн индекс 0-оос эхэлдэг. Иймээс гурав дахь Blue элемент [2] болон get(2)-оор хоёул олдоно.",
  71: "Set давхардсан элемент хадгалахгүй, Map-ийн key бүр давтагдашгүй байна. Харин Map-ийн value давхцаж болно.",
  77: "Column бүх child-ээ нэг дор байгуулдаг. Тодорхойгүй эсвэл том жагсаалтад LazyColumn зөвхөн харагдах элементүүдийг үүсгэдэг.",
  82: "Spring animation-ий хөдөлгөөнийг хугацаа бус damping ratio болон stiffness гэсэн физикийн параметрүүд тодорхойлно.",
  90: "Dark theme нь зарим дэлгэцийн цэнэг зарцуулалтыг бууруулж, бага гэрэл болон гэрэлд мэдрэмтгий хэрэглэгчдэд харагдацыг сайжруулна.",
  91: "TalkBack нь screen reader. Switch-ээр удирдах боломжийг Android-ийн Switch Access үйлчилгээ хариуцдаг.",
  96: "rememberSaveable нь утгыг Bundle-д хадгалж, rotation зэрэг configuration change-ийн дараа сэргээнэ.",
  99: "Android-ийн санал болгодог үндсэн архитектур нь UI layer болон data layer-аас бүрдэнэ. Domain layer нь шаардлагатай үед нэмэгддэг.",
  102: "Local unit test JVM дээр ажиллана. Төхөөрөмж эсвэл emulator шаарддаг нь instrumented test юм.",
  105: "NavController-ийг screen бүрт өгөхийн оронд navigation callback дамжуулах нь composable-ийг салангид, тестлэхэд хялбар болгоно.",
  110: "Шинэ destination back stack-ийн дээд талд нэмэгдэнэ. Bottom хэсэгт start destination байрладаг.",
  113: "Back нь системийн navigation үйлдэл. Up нь app bar-д байрлах бөгөөд одоогийн дэлгэцээс шалтгаалан харуулах эсэхийг апп шийднэ.",
  115: "Том дэлгэц дээр товчийн хүрэх зай чухал бөгөөд list-detail зэрэг зэрэгцээ pane нь дэлгэц хооронд шилжих шаардлагыг багасгана.",
  121: "Compact үед list ба detail тусдаа дэлгэц тул Back хэрэгтэй. Хоёул зэрэг харагдах өргөн layout-д detail-ээс list рүү буцах navigation шаардлагагүй.",
  126: "Main dispatcher UI-д, IO нь сүлжээ/файлд зориулагдана. Job нь coroutine-ийн lifecycle-ийг удирдана.",
  128: "Structured concurrency-д coroutine scope дотор эхэлж, parent цуцлагдвал child-ууд мөн цуцлагдана; parent нь child-уудаа дуусахыг хүлээнэ.",
  129: "HTTP-д GET, POST, DELETE зэрэг operation байна. URL нь URI-ийн нэг төрөл, Retrofit нь REST/JSON ажилд хэрэглэгддэг client library.",
  136: "Retrofit өөрөө Kotlin объектыг JSON болгодоггүй; converter library serialization/deserialization-ийг гүйцэтгэдэг.",
  138: "JSON object дотор key-value хосууд хоорондоо таслалаар тусгаарлагдана. Нэг key ба value-ийн хооронд colon орно.",
  139: "Санал болгодог архитектурт UI layer болон data layer үндсэндээ байна. Domain layer нь optional.",
  140: "Dependency Injection нь dependency-г гаднаас өгснөөр код дахин ашиглах, солих, refactor хийх болон fake dependency-ээр тестлэхэд хялбар болгоно.",
  144: "Foreign key ашиглан хүснэгтүүдийг холбоно. Row бүр нэг бичлэгийг илэрхийлдэг; хүснэгт бүр заавал foreign key-тэй байх албагүй.",
  148: "%Milton загварын эхний % нь өмнө нь дурын тэмдэгт байж болохыг илэрхийлдэг тул Milton-оор төгссөн утгууд таарна.",
  149: "ORDER BY-ийн default нь ascending. GROUP BY болон ORDER BY хоёул олон column авч чадна, SQL дараалалд GROUP BY түрүүлж бичигдэнэ.",
  150: "NOT (read = false) нь read үнэн байх нөхцөл, харин read != true нь read худал байх нөхцөл тул эквивалент биш.",
  154: "@Query функц suspend байх албагүй; Flow зэрэг observable төрөл буцааж болно.",
  158: "synchronized блокт нэг агшинд зөвхөн нэг thread орсноор зэрэг database instance үүсэх race condition-оос хамгаална.",
  161: "Database Inspector нь ажиллаж буй аппын Room болон SQLite database-ийг харах, query хийх, өөрчлөх, debug хийх боломжтой.",
  163: "Room primary key-г зөвхөн autoGenerate = true гэж тохируулсан үед автоматаар өсгөнө; энэ нь default үйлдэл биш.",
  164: "DataStore-ийн хоёр implementation нь Preferences DataStore болон Proto DataStore юм. Room, SQLite нь relational database технологи.",
  165: "Preferences DataStore нь schema-гүй key-value хадгалалт. Урьдчилан тодорхойлсон schema хэрэглэдэг нь Proto DataStore.",
  169: "Android Studio-ийн Background Task Inspector нь WorkManager worker-уудыг харах, төлөвийг хянах болон алдааг шинжлэх зориулалттай.",
  170: "SUCCEEDED, FAILED, CANCELLED төлөвт орсон work цааш дахин ажиллахгүй тул terminal state гэж үзнэ. DELETED гэсэн WorkInfo.State байдаггүй.",
  171: "WorkManager нэг удаагийн ажилд OneTimeWorkRequest, давтагдах ажилд PeriodicWorkRequest ашигладаг.",
  172: "Хамааралтай ажлуудын гүйцэтгэх дарааллыг үүсгэхийг work chaining гэдэг; linking гэж нэрлэдэггүй.",
  173: "WorkManager constraint нь network type зэрэг төхөөрөмжийн бодит нөхцөлийг шалгана. Том өгөгдөл татахын өмнө Wi-Fi шаардах нь тохиромжтой жишээ.",
  174: "Worker-ийн input нь Data объект дахь хэмжээ хязгаартай key-value хосуудаар WorkRequest-д өгөгдөнө.",
  175: "Enqueue хийсэн work-ийн WorkInfo төлөвийг id, tag эсвэл unique work-ийн name-аар WorkManager-аас ажиглаж болно.",
  176: "Background Task Inspector-оос ажиллаж буй worker-ийг сонгон stop хийх боломжтой.",
  177: "CoroutineWorker нь ListenableWorker-ийн дэд төрөл тул TestListenableWorkerBuilder ашиглан тестийн instance байгуулна.",
  178: "Worker implementation-ийн unit test-д worker-ийг тестийн builder-ээр үүсгээд doWork()-ийг шууд дуудаж Result-ийг шалгаж болно.",
};

const topicFor = (id) => {
  if (id <= 15) return "Kotlin үндэс";
  if (id <= 35) return "Compose үндэс";
  if (id <= 45) return "Kotlin OOP ба функц";
  if (id <= 62) return "Compose state ба тест";
  if (id <= 72) return "Collection ба data class";
  if (id <= 92) return "UI, theme ба accessibility";
  if (id <= 102) return "Lifecycle ба архитектур";
  if (id <= 123) return "Navigation ба adaptive UI";
  if (id <= 143) return "Coroutine, network ба DI";
  if (id <= 168) return "SQL, Room ба DataStore";
  return "WorkManager ба background task";
};

const clean = (value) => value
  .replaceAll("\\_", "_")
  .replaceAll("\\*", "*")
  .replace(/\s+/g, " ")
  .trim();

const lines = fs.readFileSync(sourcePath, "utf8").split(/\r?\n/);
const questions = questionStartLines.map((lineNumber, index) => {
  const id = index + 1;
  const nextLine = questionStartLines[index + 1] ?? lines.length + 1;
  const segment = lines
    .slice(lineNumber - 1, nextLine - 1)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("Choose as many"))
    .filter((line) => !line.startsWith("Enter one or more"))
    .filter((line) => line !== "Fill-in-the-blanks");

  let prompt = segment.shift();

  if (id === 36) {
    prompt = `${prompt}\n\n${segment.splice(0, 5).join("\n")}`;
  }

  if (id === 69) {
    prompt = `${prompt}\n\n${segment.shift()}`;
  }

  if (id === 15) segment.push("open");
  if (id === 125) segment.splice(0, segment.length, "Main", "Worker", "IO", "Default");
  if (id === 160) segment.splice(0, segment.length, "onConflict", "strategy", "conflictAction", "resolution");

  const answers = answerKeys[id];
  if (!answers) throw new Error(`Missing answer key for question ${id}`);
  if (answers.some((answer) => answer >= segment.length)) {
    throw new Error(`Answer index is out of range for question ${id}`);
  }

  const options = segment.map(clean);
  const correctText = answers.map((answer) => options[answer]).join(", ");
  const explanation = customExplanations[id]
    ?? `Зөв ойлголт нь “${correctText}”. Энэ нь ${topicFor(id).toLowerCase()} сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм.`;

  return {
    id,
    topic: topicFor(id),
    prompt: clean(prompt),
    options,
    answers,
    multiple: answers.length > 1,
    explanation,
  };
});

if (questions.length !== 178) {
  throw new Error(`Expected 178 questions, found ${questions.length}`);
}

const output = `// Generated from shalgalt.md by build-quiz-data.mjs.\nwindow.QUIZ_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(outputPath, output, "utf8");
console.log(`Generated ${questions.length} questions at ${outputPath}`);
