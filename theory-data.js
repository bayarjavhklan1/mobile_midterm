window.THEORY_UNITS = [
  {
    number: 1,
    title: "Таны анхны Android апп",
    subtitle: "Kotlin-ийн суурь, Android Studio, Compose layout",
    description: "Програм хэрхэн эхэлж ажилладаг, өгөгдлийг хувьсагчаар хэрхэн хадгалдаг, функцийг яагаад ашигладаг болон Compose-оор анхны UI-г хэрхэн байгуулдгийг ойлгоно.",
    pathways: ["Introduction to Kotlin", "Setup Android Studio", "Build a basic layout"],
    source: "https://developer.android.com/courses/android-basics-compose/unit-1",
    sections: [
      {
        title: "Kotlin програмын бүтэц",
        paragraphs: [
          "Kotlin програмын эхлэх цэг нь main() функц. Програм ажиллахад runtime хамгийн түрүүнд энэ функцийг дуудна. println() нь утгыг console руу хэвлэдэг бөгөөд кодын урсгал, тооцооллын үр дүнг хурдан шалгахад ашиглагдана.",
          "Comment нь compiler-д ажиллах код биш. Нэг мөрийн comment //-оор, олон мөрийн comment /* ... */ хэлбэрээр бичигдэнэ. Comment нь кодын шалтгааныг тайлбарлахад хэрэгтэй боловч код өөрөө ойлгомжтой байвал илүүдэл comment бичих шаардлагагүй."
        ],
        bullets: [
          "Statement бүр тодорхой үйлдэл гүйцэтгэнэ.",
          "Expression нь тооцоологдоод утга үүсгэнэ.",
          "Compiler syntax болон type-ийн алдааг програм ажиллахаас өмнө илрүүлнэ."
        ],
        code: "fun main() {\n    // Програм эндээс эхэлнэ\n    println(\"Hello, Android!\")\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "val, var ба өгөгдлийн төрөл",
        paragraphs: [
          "Хувьсагч нь нэртэй санах ойн утга юм. val-аар зарласан reference-д дахин утга оноож болохгүй, харин var өөрчлөгдөж болно. Өөрчлөгдөх шаардлагагүй утгыг val болгох нь санамсаргүй өөрчлөлтөөс хамгаалж, кодыг ойлгоход хялбар болгодог.",
          "Kotlin type inference хийдэг тул баруун талын утгаас төрлийг автоматаар танина. String нь текст, Int нь бүхэл тоо, Double ба Float нь бутархай тоо, Boolean нь true/false утга хадгална. Төрөл нэгэнт тогтоогдсон бол өөр төрлийн утга оноож болохгүй."
        ],
        bullets: [
          "String утгыг давхар хашилтад бичнэ.",
          "Int тоонд хашилт хэрэглэхгүй.",
          "String template ашиглан утгыг текстэд оруулж болно.",
          "Float нь Double-оос бага нарийвчлалтай бөгөөд 2.5f гэж бичигдэнэ."
        ],
        code: "val course = \"Android Basics\"\nvar completedLessons = 2\ncompletedLessons = completedLessons + 1\nval progress: Double = 3.0 / 10.0",
        codeLanguage: "Kotlin",
        note: "total - 1 гэж бичих нь зөвхөн шинэ утга тооцно. total өөрөө өөрчлөгдөхийн тулд total-- эсвэл total = total - 1 гэж онооно."
      },
      {
        title: "Функц, параметр ба буцаах утга",
        paragraphs: [
          "Функц нь нэг үүрэгтэй кодыг нэрлэж багцалдаг. Ингэснээр давхардал багасч, өөрчлөх болон тестлэхэд хялбар болно. Функц зарлах үеийн оролтыг parameter, дуудах үед дамжуулсан бодит утгыг argument гэдэг.",
          "Буцаах төрөл : тэмдэгтийн дараа бичигдэнэ. Return type бичээгүй функц Unit буцаадаг. Unit нь утга буцаах шаардлагагүй үйлдлийг илэрхийлнэ. Named argument ашиглавал аргументын нэрийг бичиж, дарааллыг өөрчилж болно."
        ],
        bullets: [
          "Default argument нь argument өгөөгүй үед ашиглагдана.",
          "return-ийн утга зарласан төрөлтэй таарах ёстой.",
          "Нэг expression буцаах функцийг = тэмдэгтэй товчилж болно."
        ],
        code: "fun calculateTotal(price: Double, quantity: Int = 1): Double {\n    return price * quantity\n}\n\nval total = calculateTotal(quantity = 3, price = 4.5)",
        codeLanguage: "Kotlin"
      },
      {
        title: "Android Studio ба төслийн бүтэц",
        paragraphs: [
          "Android Studio бол код бичих, build хийх, emulator ажиллуулах, алдаа шинжлэх нэгдсэн хөгжүүлэлтийн орчин буюу IDE. Project template нь Gradle тохиргоо, package бүтэц, theme болон эхлэх Activity-г зөв загвараар урьдчилан үүсгэдэг.",
          "Emulator нь бодит утасгүй үед Android төхөөрөмжийг дуурайлган аппыг ажиллуулна. Device Manager-оор төрөл бүрийн дэлгэц, Android хувилбартай virtual device үүсгэж болно. Бодит төхөөрөмж дээр шалгах нь камер, sensor, performance зэрэг hardware-тэй холбоотой зан төлөвийг баталгаажуулна."
        ],
        bullets: [
          "app/src/main/java эсвэл kotlin дотор source code байрлана.",
          "app/src/main/res дотор зураг, текст, өнгө зэрэг resource байрлана.",
          "AndroidManifest.xml нь Activity болон permission зэрэг app мэдээллийг зарлана.",
          "Gradle нь dependency болон build тохиргоог удирдана."
        ]
      },
      {
        title: "Jetpack Compose-ийн үндэс",
        paragraphs: [
          "Jetpack Compose бол Android UI-г Kotlin функцээр declarative байдлаар байгуулах toolkit. Declarative UI-д дэлгэц ямар харагдахыг state-д тулгуурлан дүрсэлнэ; view-үүдийг алхам бүрээр гараар өөрчлөх шаардлагагүй.",
          "@Composable annotation-тай функц UI-ийн нэг хэсгийг дүрсэлнэ. Activity-ийн setContent блок Compose tree-ийн эхлэлийг үүсгэнэ. @Preview нь emulator ажиллуулахгүйгээр Android Studio-д composable-ийн харагдацыг урьдчилан харуулдаг."
        ],
        bullets: [
          "Text текст харуулна.",
          "Image зураг харуулна.",
          "Surface өнгө, shape, elevation бүхий суурь үүсгэж чадна.",
          "Modifier нь size, padding, background, click зэрэг нэмэлт зан төлөв өгнө."
        ],
        code: "@Composable\nfun Greeting(name: String) {\n    Text(\n        text = \"Hello, \" + name,\n        modifier = Modifier.padding(16.dp)\n    )\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Layout, resource ба accessibility",
        paragraphs: [
          "Column хүүхдүүдээ босоо, Row хэвтээ, Box нэг нэгний дээр давхарлан байрлуулна. Alignment нь parent доторх байрлалыг, Arrangement нь үндсэн тэнхлэгийн зай хуваарилалтыг удирдана. Modifier-ийн дараалал үр дүнд нөлөөлдөг: padding().background() болон background().padding() ижил биш.",
          "Resource ашигласнаар зураг, текст, өнгийг кодоос салгана. painterResource() drawable ачаалж, stringResource() орчуулж болох текст авна. Image-ийн contentDescription нь TalkBack-д тухайн зураг ямар утгатайг хэлнэ; зөвхөн чимэглэлийн зураг бол null байж болно."
        ],
        bullets: [
          "Resource Manager нь resource импортлох, үүсгэх, удирдах хэрэгсэл.",
          "R class нь бүх resource-ийн generated ID-г агуулна.",
          "Padding нь composable биш, Modifier-ийн үйлдэл.",
          "contentDescription нь харагдахгүй ч accessibility-д чухал."
        ],
        code: "Row(verticalAlignment = Alignment.CenterVertically) {\n    Image(\n        painter = painterResource(R.drawable.profile),\n        contentDescription = stringResource(R.string.profile_photo)\n    )\n    Text(text = stringResource(R.string.user_name))\n}",
        codeLanguage: "Kotlin"
      }
    ]
  },
  {
    number: 2,
    title: "Интерактив UI байгуулах",
    subtitle: "Kotlin fundamentals, click, state, automated test",
    description: "Нөхцөл, class, null safety, lambda болон Compose state-ийг ашиглан хэрэглэгчийн үйлдэлд хариу үзүүлдэг UI байгуулна.",
    pathways: ["Kotlin fundamentals", "Add a button to an app", "Interacting with UI and state"],
    source: "https://developer.android.com/courses/android-basics-compose/unit-2",
    sections: [
      {
        title: "Нөхцөл ба давталт",
        paragraphs: [
          "if/else нь Boolean нөхцөлд тулгуурлан салаалдаг бөгөөд Kotlin-д өөрөө expression тул утга буцааж чадна. when нь олон нөхцөлийг дарааллаар шалгаж, enum, range, type зэрэгтэй цэвэрхэн ажилладаг.",
          "Range-ийг 1..5, 1 until 5, 5 downTo 1 хэлбэрээр үүсгэнэ. for давталт collection эсвэл range-ийн элемент бүрийг боловсруулна. while нь нөхцөл үнэн байх хугацаанд давтагдана."
        ],
        bullets: [
          "== нь утгын тэнцүүг шалгана.",
          "&& хоёр нөхцөл хоёулаа үнэн байхыг шаардана.",
          "|| аль нэг нөхцөл үнэн байхад хангалттай.",
          "% нь хуваалтын үлдэгдлийг өгнө."
        ],
        code: "val label = when (score) {\n    in 90..100 -> \"Excellent\"\n    in 60..89 -> \"Passed\"\n    else -> \"Try again\"\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Class, object, inheritance ба interface",
        paragraphs: [
          "Class нь object үүсгэх загвар. Constructor parameter-ийг val эсвэл var гэж зарлавал property болно. Method нь class доторх функц. Encapsulation нь дотоод хэрэгжилтийг нууж, public API-аар аюулгүй ашиглах боломж өгдөг.",
          "Kotlin class default-аар final тул удамшуулах бол open хэрэглэнэ. Дэд class : Parent() хэлбэрээр parent constructor-ийг дуудна. Interface нь class хэрэгжүүлэх ёстой property болон function-ийн гэрээг тодорхойлж, олон өөр implementation-ийг нэг төрлөөр ашиглах боломж өгнө."
        ],
        bullets: [
          "public нь default visibility.",
          "private зөвхөн зарласан хүрээнд харагдана.",
          "protected class болон subclass-д харагдана.",
          "internal нэг module дотор харагдана."
        ],
        code: "interface Drawable {\n    fun draw()\n}\n\nopen class Shape\nclass Circle : Shape(), Drawable {\n    override fun draw() { println(\"Circle\") }\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Null safety",
        paragraphs: [
          "Kotlin nullable болон non-null төрлийг ялгадаг. String нь null байж болохгүй, String? нь null байж болно. Compiler nullable утгыг шууд ашиглуулахгүй тул NullPointerException гарах эрсдэлийг код бичих үед багасгадаг.",
          "Safe-call ?. нь утга null биш үед л property эсвэл function дуудна. Elvis ?: нь зүүн тал null бол default утга сонгоно. !! нь null биш гэж хүчээр мэдэгдэх боловч буруу таамаглавал exception үүсгэдэг тул аль болох зайлсхий."
        ],
        bullets: [
          "Optional зураг, тайлбар зэрэг байхгүй байж болох өгөгдөл nullable байна.",
          "let блок nullable утга null биш үед ажиллаж чадна.",
          "Smart cast нь null шалгасны дараа төрлийг автоматаар нарийсгана."
        ],
        code: "val nickname: String? = null\nval displayName = nickname?.uppercase() ?: \"Guest\"\n\nif (nickname != null) {\n    println(nickname.length)\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Lambda ба higher-order function",
        paragraphs: [
          "Function өөрөө төрөлтэй утга байж болно. (Int) -> Unit гэдэг нь Int авч, утга буцаахгүй function type. Lambda нь нэргүй function literal бөгөөд { parameter -> body } хэлбэртэй.",
          "Function-ийг parameter-аар авах эсвэл function буцаадаг функцийг higher-order function гэдэг. UI event callback, collection operation болон dependency солиход энэ ойлголт маш их ашиглагдана."
        ],
        bullets: [
          "Trailing lambda нь сүүлийн argument болсон lambda-г хаалтын гадна бичих syntax.",
          "Нэг parameter-тэй lambda-д it нэрийг автоматаар ашиглаж болно.",
          "::functionName нь function reference."
        ],
        code: "fun operate(value: Int, action: (Int) -> Int): Int {\n    return action(value)\n}\n\nval doubled = operate(5) { it * 2 }",
        codeLanguage: "Kotlin"
      },
      {
        title: "Compose state ба recomposition",
        paragraphs: [
          "State гэдэг нь хугацааны явцад өөрчлөгдөж UI-д нөлөөлөх утга. Compose state-ийг уншсан composable-уудыг бүртгэж, утга өөрчлөгдөхөд шаардлагатай хэсгийг дахин ажиллуулна. Үүнийг recomposition гэдэг.",
          "remember нь recomposition хооронд object хадгална, mutableStateOf нь observable state үүсгэнэ. Гэхдээ Activity дахин үүсэх configuration change-д remember-ийн утга алга болно. rememberSaveable нь Bundle-д хадгалж сэргээдэг энгийн утгад тохиромжтой."
        ],
        bullets: [
          "Initial composition нь UI анх үүсэх үе.",
          "Recomposition нь state өөрчлөгдсөн хэсгийг шинэчлэх үе.",
          "State өөрчлөгдөөгүй бол UI-г гараар redraw хийх шаардлагагүй.",
          "Composable side effect-гүй, аль болох idempotent байх хэрэгтэй."
        ],
        code: "var count by rememberSaveable { mutableStateOf(0) }\n\nButton(onClick = { count++ }) {\n    Text(text = \"Count: \" + count)\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "State hoisting, input ба test",
        paragraphs: [
          "State hoisting нь state-ийг child composable-оос parent руу гаргаж, child-д value болон onValueChange callback өгөх загвар. Ингэснээр child stateless болж, дахин ашиглах болон Preview/UI test хийхэд хялбар болдог. UI event дээшээ, шинэ state доошоо урсахыг unidirectional data flow гэдэг.",
          "TextField-ийн keyboardOptions нь keyboard төрөл, keyboardActions нь Done/Next зэрэг IME үйлдлийг удирдана. Бизнес тооцооллыг UI-с салгавал local unit test-ээр хурдан шалгаж болно. Compose UI test нь semantics ашиглан element олж click, text input, assertion гүйцэтгэнэ."
        ],
        bullets: [
          "Local test app/src/test дотор JVM дээр ажиллана.",
          "Instrumented/UI test app/src/androidTest дотор device дээр ажиллана.",
          "@Test annotation тест функцийг тэмдэглэнэ.",
          "Debugger breakpoint дээр execution-ийг зогсоож variable шалгана."
        ],
        code: "@Composable\nfun AmountInput(value: String, onValueChange: (String) -> Unit) {\n    TextField(\n        value = value,\n        onValueChange = onValueChange,\n        keyboardActions = KeyboardActions(onNext = { /* move focus */ })\n    )\n}",
        codeLanguage: "Kotlin"
      }
    ]
  },
  {
    number: 3,
    title: "Жагсаалт ба Material Design",
    subtitle: "Collections, lazy layouts, theme, animation, accessibility",
    description: "Олон өгөгдлийг model болгон зохион байгуулж, үр ашигтай жагсаалт болон grid-д харуулан Material theme, animation, accessibility-гаар сайжруулна.",
    pathways: ["More Kotlin fundamentals", "Build a scrollable list", "Build beautiful apps"],
    source: "https://developer.android.com/courses/android-basics-compose/unit-3",
    sections: [
      {
        title: "Data class, enum, sealed class ба object",
        paragraphs: [
          "Data class нь өгөгдөл хадгалах model-д зориулагдсан. Primary constructor-т дор хаяж нэг val/var property байна. Compiler equals(), hashCode(), toString(), componentN() болон copy() функцийг автоматаар үүсгэнэ.",
          "enum class тогтмол утгуудын хаалттай жагсаалт, sealed class хязгаарлагдсан төрлийн hierarchy илэрхийлнэ. object declaration нь програмд ганц instance-тэй singleton үүсгэдэг. Эдгээр нь UI state болон тогтсон сонголтыг type-safe загварчлахад тустай."
        ],
        bullets: [
          "copy() нь зарим property-г өөрчилсөн шинэ data object өгнө.",
          "when sealed төрөлтэй ажиллахад бүх хувилбарыг compiler шалгаж чадна.",
          "Singleton нь нэг instance, нэг global access point-той."
        ],
        code: "data class Hero(val name: String, val power: Int)\n\nsealed class UiState {\n    data object Loading : UiState()\n    data class Success(val heroes: List<Hero>) : UiState()\n    data class Error(val message: String) : UiState()\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Generics ба extension function",
        paragraphs: [
          "Generic нь нэг алгоритм эсвэл container-ийг олон төрөлтэй type-safe ашиглах боломж өгнө. List<String> болон List<Hero> нь ижил List бүтэцтэй ч element-ийн төрөл compiler-д тодорхой байна.",
          "Extension function нь өөрчилж чадахгүй class-д шинэ function мэт API нэмнэ. fun String.initials() гэж зарлавал String object дээр value.initials() гэж цэгээр дуудна. Энэ нь class-ийн private гишүүнд тусгай эрхээр нэвтрэхгүй, зөвхөн public API-г ашиглана."
        ],
        bullets: [
          "Generic type өнцөгт хаалт <> дотор бичигдэнэ.",
          "Extension нь extend keyword ашигладаггүй.",
          "Original class-тай нэг файлд байх албагүй."
        ],
        code: "fun <T> firstOrNull(items: List<T>): T? = items.firstOrNull()\n\nfun String.initials(): String =\n    split(\" \").mapNotNull { it.firstOrNull()?.toString() }.joinToString(\"\")",
        codeLanguage: "Kotlin"
      },
      {
        title: "Collection ба higher-order operation",
        paragraphs: [
          "List дараалалтай, duplicate зөвшөөрдөг; Set давхардалгүй; Map key-value хос хадгалж key нь давтагдашгүй. listOf/setOf/mapOf нь read-only interface, mutableListOf зэрэг нь нэмэх, хасах боломжтой mutable collection үүсгэнэ.",
          "map element бүрийг шинэ утга болгон хувиргана, filter нөхцөл хангасан element-үүдийг үлдээнэ, forEach side effect үйлдэл хийнэ. Эдгээр нь lambda авдаг higher-order function. Collection-ийн item тоог size property өгнө."
        ],
        bullets: [
          "List index 0-оос эхэлнэ.",
          "getOrNull(index) хүрээнээс гарвал exception бус null өгнө.",
          "sortedBy, groupBy, associate зэрэг function өгөгдлийг UI-д бэлтгэнэ.",
          "Өгөгдлийг хувиргахдаа эх collection-ийг өөрчлөхгүй шинэ collection авах нь найдвартай."
        ],
        code: "val names = listOf(\"Ari\", \"Bold\", \"Anu\")\nval result = names\n    .filter { it.startsWith(\"A\") }\n    .map { it.uppercase() }",
        codeLanguage: "Kotlin"
      },
      {
        title: "LazyColumn ба LazyVerticalGrid",
        paragraphs: [
          "Column бүх item-ийг нэг дор composition-д оруулдаг тул тоо нь их эсвэл тодорхойгүй жагсаалтад үр ашиггүй. LazyColumn зөвхөн харагдаж буй болон ойролцоох item-үүдийг composition-д оруулж, scroll-ийг өөрөө зохицуулна.",
          "LazyVerticalGrid нь GridCells.Fixed эсвэл Adaptive ашиглан олон баганатай scrollable grid үүсгэнэ. items() нь collection-оос content нэмнэ. Stable key өгвөл item байрлал өөрчлөгдөхөд Compose state-ийг зөв item-тэй холбоно."
        ],
        bullets: [
          "item { } нэг тусгай element нэмнэ.",
          "items(list, key = { it.id }) олон element нэмнэ.",
          "contentPadding жагсаалтын гадна талын зайг өгнө.",
          "Arrangement.spacedBy item хоорондын тогтмол зайг өгнө."
        ],
        code: "LazyColumn(verticalArrangement = Arrangement.spacedBy(8.dp)) {\n    items(heroes, key = { it.name }) { hero ->\n        HeroRow(hero = hero)\n    }\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Material theme ба component",
        paragraphs: [
          "Material Design нь color, typography, shape, component болон interaction-ийн нэгдсэн систем. MaterialTheme.colorScheme, typography, shapes-аас утга авснаар app бүхэлдээ ижил хэлтэй болж dark theme болон dynamic color-д зохицно.",
          "Primary color гол action болон brand-д, surface component-ийн сууринд хэрэглэгдэнэ. Card-ийн elevation нь shadow үүсгэж background-оос ялгана. Theme.kt theme-ийг нэгтгэж, Color.kt өнгө, Type.kt typography, Shape.kt shape утгуудыг зохион байгуулдаг."
        ],
        bullets: [
          "Өнгийг зөвхөн гоёл биш semantic үүргээр сонго.",
          "Contrast хангалттай байх ёстой.",
          "Dark theme нь бага гэрэлд харагдац болон зарим OLED дэлгэцийн цэнэгт ашигтай.",
          "Adaptive launcher icon foreground ба background layer-тэй XML resource байна."
        ]
      },
      {
        title: "Animation ба accessibility",
        paragraphs: [
          "Animation нь ямар зүйл өөрчлөгдсөнийг хэрэглэгчид ойлгуулж, interaction-д continuity өгнө. animateContentSize layout хэмжээний өөрчлөлтийг зөөлрүүлнэ. Spring animation нь duration-аас илүү stiffness ба damping ratio гэсэн физикийн параметрээр хөдөлгөөнийг тодорхойлдог.",
          "Accessibility нь нэмэлт биш, UI-ийн үндсэн чанар. TalkBack дэлгэцийн агуулгыг дуугаар уншдаг; Switch Access нь switch төхөөрөмжөөр navigation хийхэд зориулагдана. Meaningful зураг, icon-д contentDescription өгч, touch target-ийг хангалттай том байлгана."
        ],
        bullets: [
          "Motion хэт их байвал prefers/reduce motion хэрэгцээг бодолц.",
          "Text-ийг зурагт шатааж оруулахгүй.",
          "Color ганцаараа мэдээлэл дамжуулах ёсгүй.",
          "Accessibility Scanner болон TalkBack-аар бодитоор шалга."
        ],
        code: "Card(\n    modifier = Modifier.animateContentSize(),\n    elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)\n) {\n    // Content\n}",
        codeLanguage: "Kotlin"
      }
    ]
  },
  {
    number: 4,
    title: "Navigation ба app architecture",
    subtitle: "Lifecycle, ViewModel, StateFlow, navigation, adaptive UI",
    description: "UI-г data болон state management-ээс салгаж, олон дэлгэцийн navigation, lifecycle болон өөр хэмжээтэй дэлгэцэд зөв ажиллах архитектур байгуулна.",
    pathways: ["Architecture components", "Navigation in Compose", "Adaptive layouts"],
    source: "https://developer.android.com/courses/android-basics-compose/unit-4",
    sections: [
      {
        title: "Activity lifecycle ба configuration change",
        paragraphs: [
          "Activity үүсэхээс устах хүртлээ lifecycle state-уудаар дамжина. onCreate анхны setup, onStart дэлгэц харагдах, onResume хэрэглэгчтэй идэвхтэй харилцах, onPause focus алдах, onStop харагдахаа болих, onDestroy instance устах үед дуудагдана.",
          "Rotation зэрэг configuration change-д Activity хуучин instance-ээ устгаад шинээр үүсгэж болно. UI-ийн түр зуурын энгийн утгыг rememberSaveable, screen-ийн бизнес state-ийг ViewModel-д хадгална. Process бүрэн устсан үед ViewModel ч алга болох тул урт хугацааны өгөгдөл database/DataStore-д хадгалагдана."
        ],
        bullets: [
          "Lifecycle callback-д хэт удаан ажил хийж main thread-ийг хааж болохгүй.",
          "Log.d(tag, message) lifecycle дарааллыг ажиглахад ашиглагдана.",
          "UI state нь UI яг одоо юу харуулахыг дүрсэлнэ."
        ]
      },
      {
        title: "Recommended app architecture",
        paragraphs: [
          "Separation of concerns зарчмаар class бүр тодорхой үүрэгтэй байна. UI layer дэлгэц болон user event, data layer өгөгдөл ба business rule, optional domain layer олон ViewModel-д ашиглагдах төвөгтэй use case-ийг хариуцна.",
          "Repository нь data source-уудын API-г нэгтгэж UI/ViewModel-д тогтвортой интерфейс өгнө. ViewModel repository-оос өгөгдөл авч UI state болгон хувиргана. Composable зөвхөн state render хийж event callback дуудна."
        ],
        bullets: [
          "UI database эсвэл network API-г шууд дуудахгүй.",
          "Single source of truth нэг өгөгдлийн authoritative эзнийг тодорхойлно.",
          "Unidirectional data flow: event дээш, state доош.",
          "Immutable UI state race болон санамсаргүй өөрчлөлтийг багасгана."
        ]
      },
      {
        title: "ViewModel, StateFlow ба UI state",
        paragraphs: [
          "ViewModel configuration change-ийг даван screen state болон бизнес үйлдлийг хадгална. StateFlow нь одоогийн утгатай hot flow бөгөөд шинэ collector эхлэхэд хамгийн сүүлийн state-ийг шууд өгнө. Data class-аар бүх screen state-ийг нэг объект болгох нь loading, data, error төлвийг ойлгомжтой болгоно.",
          "Cold Flow-г stateIn() ашиглан StateFlow болгохдоо viewModelScope, SharingStarted.WhileSubscribed(5_000), initialValue өгч болно. Compose талд collectAsStateWithLifecycle() ашиглавал lifecycle идэвхгүй үед collection зогсож resource хэмнэнэ."
        ],
        bullets: [
          "MutableStateFlow private, StateFlow public байлгах нь encapsulation.",
          "map, combine нь data flow-уудыг UI state болгоно.",
          "viewModelScope ViewModel цэвэрлэгдэхэд coroutine-уудыг цуцална."
        ],
        code: "data class HomeUiState(val items: List<Item> = emptyList())\n\nval uiState: StateFlow<HomeUiState> = repository.items\n    .map { HomeUiState(it) }\n    .stateIn(\n        scope = viewModelScope,\n        started = SharingStarted.WhileSubscribed(5_000),\n        initialValue = HomeUiState()\n    )",
        codeLanguage: "Kotlin"
      },
      {
        title: "Navigation Compose",
        paragraphs: [
          "NavHost route бүрийг composable destination-тэй холбоод одоогийн route-д тохирох дэлгэцийг харуулна. NavController navigate() ашиглан шинэ destination-ийг back stack-ийн дээд талд нэмнэ. popBackStack() дээд destination-ийг хасч өмнөх дэлгэц рүү буцна.",
          "NavController-ийг screen composable бүрт шууд дамжуулахын оронд onNext, onBack зэрэг callback дамжуулбал screen navigation framework-ээс хамааралгүй болж Preview болон test хялбар болно. Route argument жижиг identifier байж, бүтэн object-ийг repository-оос ID-аар дахин авна."
        ],
        bullets: [
          "NavHost заавал startDestination-тэй.",
          "Back нь system navigation, Up нь app bar-ын hierarchy navigation.",
          "BackHandler нь NavHost байгаа эсэхээс үл хамааран Back үйлдэлд хариулж чадна.",
          "Intent extras нь Activity хооронд нэмэлт өгөгдөл дамжуулна."
        ],
        code: "NavHost(navController, startDestination = \"home\") {\n    composable(\"home\") {\n        HomeScreen(onOpen = { id -> navController.navigate(\"detail/\" + id) })\n    }\n    composable(\"detail/{id}\") { backStackEntry ->\n        DetailScreen(id = backStackEntry.arguments?.getString(\"id\"))\n    }\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Adaptive layout",
        paragraphs: [
          "Responsive/adaptive UI нь зөвхөн component-ийг сунгах биш, available window size-д тохирсон navigation болон content arrangement сонгоно. Breakpoint нь layout өөрчлөгдөх width/height хэмжүүр. WindowSizeClass compact, medium, expanded ангиллаар шийдвэр гаргахад тусална.",
          "Compact утсанд list болон detail тусдаа screen байж Back шаардлагатай. Өргөн дэлгэцэд list-detail хоёр pane зэрэг харагдаж сонгосон item-ийн detail шууд шинэчлэгдэнэ. Navigation bar compact, navigation rail medium, drawer expanded layout-д түгээмэл."
        ],
        bullets: [
          "Том дэлгэцэд гол товчийг хүрэхэд хэцүү яг төвд тавихаас зайлсхий.",
          "Олон хэмжээний Preview үүсгэж шалга.",
          "Selection rotation-д санамсаргүй reset болох ёсгүй.",
          "Adaptive болгоход Navigation Component заавал шаардлагатай биш."
        ]
      },
      {
        title: "Architecture ба navigation test",
        paragraphs: [
          "Local unit test ViewModel болон state transformation-ийг fake repository-той JVM дээр хурдан шалгана. Instrumented test Android API, navigation, database эсвэл Compose UI шаардсан үед device/emulator дээр ажиллана.",
          "Test dependency-д testImplementation, instrumented dependency-д androidTestImplementation хэрэглэнэ. Custom annotation болон instrumentation arguments-аар тодорхой бүлгийн test-ийг сонгон ажиллуулж болно."
        ],
        bullets: [
          "Navigation callback-ийг fake lambda-аар шалгаж болно.",
          "StateFlow test-д turbine эсвэл runTest ашиглаж emission шалгана.",
          "UI test implementation detail бус хэрэглэгчийн харах behavior-ийг шалгах ёстой."
        ]
      }
    ]
  },
  {
    number: 5,
    title: "Интернэтээс өгөгдөл авах",
    subtitle: "Coroutines, HTTP/REST, Retrofit, repository, DI",
    description: "Main thread-ийг хаахгүй asynchronous ажил гүйцэтгэж, REST service-ээс JSON авч, repository болон dependency injection бүхий data layer байгуулна.",
    pathways: ["Get data from the internet", "Load and display images"],
    source: "https://developer.android.com/courses/android-basics-compose/unit-5",
    sections: [
      {
        title: "Concurrency ба coroutine",
        paragraphs: [
          "Concurrency гэдэг нь олон ажлын явцыг давхцуулан удирдах ойлголт. Код бичсэн дарааллаасаа өөр дарааллаар дуусч болно. Android main thread UI зурж user input хүлээдэг тул network, file, database зэрэг удаан ажлаар хаавал app гацаж ANR үүснэ.",
          "Coroutine нь thread-ээс хөнгөн asynchronous task. suspend function удаан ажлын үеэр thread-ийг блоклохгүй түр зогсож, үр дүн бэлэн болоход үргэлжилнэ. Coroutine заавал CoroutineScope дотор launch эсвэл async-аар эхэлнэ."
        ],
        bullets: [
          "launch үр дүнгүй Job буцаана.",
          "async Deferred буцааж await()-аар үр дүн авна.",
          "delay thread-ийг блоклохгүй suspend хийнэ.",
          "Coroutine synchronous код шиг уншигдах боловч asynchronous ажиллана."
        ],
        code: "viewModelScope.launch {\n    val result = repository.loadItems()\n    // UI state шинэчилнэ\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Coroutine context ба structured concurrency",
        paragraphs: [
          "CoroutineContext нь Job, CoroutineDispatcher зэрэг element агуулна. Dispatchers.Main UI update, Dispatchers.IO network/file/database I/O, Dispatchers.Default CPU ихтэй тооцоололд зориулагдана. withContext шаардлагатай хэсгийг өөр dispatcher дээр ажиллуулна.",
          "Structured concurrency-д child coroutine parent scope-той lifecycle холбоотой. Parent цуцлагдвал child-ууд цуцлагдаж, parent child-уудаа дуусахыг хүлээнэ. Энэ нь orphan task болон resource leak-ээс хамгаална."
        ],
        bullets: [
          "Job coroutine-ийн lifecycle-ийг удирдана.",
          "Cancellation cooperative тул suspend point эсвэл isActive шалгалт хэрэгтэй.",
          "Exception parent-child hierarchy дагуу тархана.",
          "viewModelScope ViewModel устахад автоматаар цуцлагдана."
        ]
      },
      {
        title: "HTTP, REST, URL ба JSON",
        paragraphs: [
          "HTTP нь client-server хүсэлт, хариуны протокол. GET resource авах, POST үүсгэх, PUT/PATCH шинэчлэх, DELETE устгах үйлдэлд түгээмэл хэрэглэгдэнэ. URL нь resource-ийн network байршлыг заасан URI-ийн нэг төрөл.",
          "REST service resource төвтэй endpoint ашиглаж JSON эсвэл XML зэрэг format-аар data дамжуулна. JSON object нь key:value хосуудаас бүрдэж, хосууд comma-аар тусгаарлагдана. Serialization object-ийг дамжуулах format болгох, deserialization/parsing format-аас object болгох үйл явц."
        ],
        bullets: [
          "2xx амжилт, 4xx client, 5xx server алдааны бүлэг.",
          "Query parameter нь URL дээр filter/pagination дамжуулна.",
          "HTTPS data-г encrypted сувгаар дамжуулна.",
          "AndroidManifest-д INTERNET permission зарлана."
        ]
      },
      {
        title: "Retrofit ба network UI state",
        paragraphs: [
          "Retrofit нь REST API-г Kotlin interface болгон дүрслэх client library. @GET, @POST зэрэг annotation endpoint-ийг, @Path болон @Query dynamic утгыг заана. Converter library JSON-ийг Kotlin data class руу, шаардлагатай үед буцаан JSON руу хувиргана.",
          "Network request амжилтгүй байж болох тул UI loading, success, error төлөвтэй байна. try/catch-аар IOException болон HTTP error-ийг handle хийж, хэрэглэгчид дахин оролдох action өгнө. Empty state болон offline state-ийг мөн тусдаа бодолцоно."
        ],
        bullets: [
          "Retrofit service function suspend байж болно.",
          "Response model JSON field-тэй тохирох ёстой.",
          "Main thread дээр synchronous network request хийж болохгүй.",
          "API key-г source code-д commit хийхгүй."
        ],
        code: "interface ApiService {\n    @GET(\"photos\")\n    suspend fun getPhotos(): List<PhotoDto>\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Repository ба dependency injection",
        paragraphs: [
          "Repository нь network, database, cache зэрэг data source-оос data авах дүрмийг төвлөрүүлнэ. ViewModel API implementation-ийг мэдэхгүй repository interface-тэй ажилласнаар data source солигдоход UI өөрчлөгдөхгүй.",
          "Dependency Injection нь class dependency-гээ өөрөө new хийхийн оронд гаднаас constructor-аар авах. AppContainer concrete repository болон service object-уудыг нэг газар үүсгэн холбоно. Application process эхлэхэд container-ийг нэг удаа үүсгэж app даяар ашиглаж болно."
        ],
        bullets: [
          "DI code reuse, refactor, test-ийг хялбар болгоно.",
          "Repository бүр өөрийн data domain-ийг хариуцах нь зохимжтой.",
          "Fake repository тестэд тогтмол data эсвэл алдаа буцааж чадна.",
          "Singleton хэрэгтэй object-ийг container нэг удаа үүсгэнэ."
        ],
        code: "class AppContainer {\n    private val api = Retrofit.Builder()\n        .baseUrl(BASE_URL)\n        .build()\n        .create(ApiService::class.java)\n\n    val repository: ItemsRepository = NetworkItemsRepository(api)\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Coil ба network test",
        paragraphs: [
          "Coil Compose-ийн AsyncImage нь URL-аас зураг татаж memory/disk cache ашиглан харуулна. Placeholder, error drawable, contentDescription, contentScale-ийг тодорхойлж loading болон алдааны харагдацыг бүрэн зохицуулна.",
          "Coroutine test-д runTest virtual time бүхий scope өгнө. Main dispatcher ашигладаг ViewModel test-д Dispatchers.setMain(TestDispatcher) хийж, эцэст нь resetMain() дуудна. Fake service/repository нь бодит network-гүй deterministic test боломж олгоно."
        ],
        bullets: [
          "Image loading state хэрэглэгчид хоосон дэлгэц бүү харуул.",
          "Зураг бүрийн aspect ratio болон crop behavior-ийг тогтвортой болго.",
          "Test exception path болон retry event-ийг мөн шалга."
        ]
      }
    ]
  },
  {
    number: 6,
    title: "Өгөгдөл хадгалах",
    subtitle: "SQL, Room, Flow, Preferences DataStore",
    description: "Relational өгөгдлийг SQLite/Room-д, жижиг хэрэглэгчийн тохиргоог DataStore-д хадгалж, Flow-оор UI-г хамгийн сүүлийн өөрчлөлттэй автоматаар шинэчилнэ.",
    pathways: ["Introduction to SQL", "Use Room for data persistence", "Preferences DataStore"],
    source: "https://developer.android.com/courses/android-basics-compose/unit-6",
    sections: [
      {
        title: "Relational database-ийн үндэс",
        paragraphs: [
          "Relational database өгөгдлийг table-д хадгална. Table-ийн column нь attribute/schema, row нь нэг record. Primary key row бүрийг давтагдашгүй танина. Нэг table-ийн primary key-г нөгөө table foreign key болгон хадгалбал relationship үүснэ.",
          "SQLite нь Android төхөөрөмж дээр ажилладаг хөнгөн relational database. Structured data, олон record, query/filter/sort болон transaction шаардсан үед тохиромжтой. Schema өөрчлөгдөхөд migration хэрэгтэй."
        ],
        bullets: [
          "Primary key unique бөгөөд null биш.",
          "Foreign key бүх table-д заавал байх албагүй.",
          "Index хайлтыг хурдлуулдаг ч write болон storage зардалтай.",
          "Normalization давхардсан өгөгдлийг багасгана."
        ]
      },
      {
        title: "SQL унших query",
        paragraphs: [
          "SELECT шаардлагатай column-уудыг уншина. WHERE row filter, DISTINCT duplicate арилгах, ORDER BY эрэмбэлэх, LIMIT үр дүнгийн тоог хязгаарлана. LIKE pattern-д % дурын тооны тэмдэгт, _ нэг тэмдэгт илэрхийлнэ.",
          "COUNT, SUM, AVG, MIN, MAX нь aggregate function. GROUP BY ижил утгатай row-уудыг бүлэглэж aggregate тооцоолно. SQL бичигдэх логик дараалал SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT байна."
        ],
        bullets: [
          "ORDER BY default ascending буюу ASC.",
          "COUNT(DISTINCT column) unique утгын тоо өгнө.",
          "LIKE '%Milton' нь Milton-оор төгссөн утгыг олно.",
          "Parameter binding ашиглаж SQL injection-оос хамгаална."
        ],
        code: "SELECT COUNT(DISTINCT sender)\nFROM email\nWHERE folder = 'spam';\n\nSELECT category, SUM(price)\nFROM item\nGROUP BY category\nORDER BY SUM(price) DESC;",
        codeLanguage: "SQL"
      },
      {
        title: "SQL өөрчлөх үйлдэл ба transaction",
        paragraphs: [
          "INSERT шинэ row, UPDATE existing row-ийн column, DELETE row устгана. UPDATE SET clause-аар шинэ утга өгнө. UPDATE болон DELETE-д WHERE орхивол бүх row-д үйлчилж болох тул маш болгоомжтой байна.",
          "Transaction нь олон үйлдлийг нэг атомик багц болгоно: бүгд амжилттай commit эсвэл аль нэг нь бүтэлгүйтвэл rollback. Inventory sell хийхдээ quantity шалгах ба бууруулах зэрэг холбоотой үйлдэл transaction шаарддаг тохиолдол байж болно."
        ],
        bullets: [
          "SQL statement-ийн төгсгөлийн semicolon нэг statement гүйцэтгэх орчноос хамааран optional байж болно.",
          "Conflict strategy IGNORE, REPLACE, ABORT зэрэг сонголттой.",
          "DELETE хийхийн өмнө хэрэглэгчийн confirmation авах нь UI хамгаалалт."
        ],
        code: "UPDATE item\nSET quantity = quantity - 1\nWHERE id = :id AND quantity > 0;",
        codeLanguage: "SQL"
      },
      {
        title: "Room: Entity, DAO, Database, Repository",
        paragraphs: [
          "Room нь SQLite дээр type-safe abstraction өгнө. @Entity data class нэг table, @PrimaryKey row identity, @ColumnInfo column нэрийг дүрсэлнэ. DAO interface нь @Query, @Insert, @Update, @Delete annotation-тай database operation-уудыг тодорхойлно.",
          "@Database abstract class RoomDatabase-ээс удамшиж entity жагсаалт болон abstract DAO getter зарлана. Room энэ abstract function-ийн implementation-ийг compile үед үүсгэнэ. Repository DAO-г авч data access API болгон ViewModel-д өгнө."
        ],
        bullets: [
          "Database class instance үүсгэж DAO access өгнө.",
          "abstract fun itemDao(): ItemDao нь DAO object авах contract.",
          "synchronized singleton creation race condition-оос хамгаална.",
          "@Query зөвхөн suspend биш, Flow буцааж болно."
        ],
        code: "@Dao\ninterface ItemDao {\n    @Query(\"SELECT * FROM item ORDER BY name\")\n    fun getAll(): Flow<List<Item>>\n\n    @Insert(onConflict = OnConflictStrategy.IGNORE)\n    suspend fun insert(item: Item)\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Flow database өөрчлөлтийг хэрхэн сонсдог вэ?",
        paragraphs: [
          "DAO query Flow буцаахад Room тухайн table-ийг ажиглана. INSERT, UPDATE, DELETE явагдаж table invalidated болох бүрт Room query-г дахин ажиллуулж шинэ List-ийг Flow руу emit хийнэ. Repository Flow-г дамжуулж, ViewModel map/stateIn-аар UI state болгоно.",
          "Compose collectAsStateWithLifecycle() ашиглан StateFlow-г collect хийнэ. Шинэ emission ирэхэд Compose state өөрчлөгдөж recomposition явагдана. Иймээс UI database-г дахин гараар refresh хийх шаардлагагүй."
        ],
        bullets: [
          "Flow cold байж collector эхлэхэд query ажиллана.",
          "stateIn hot StateFlow болгож хамгийн сүүлийн state хадгална.",
          "SharingStarted.WhileSubscribed(5_000) subscriber түр алга болоход upstream-ийг богино хугацаанд хадгална.",
          "Database write suspend function coroutine дотор дуудагдана."
        ],
        code: "val homeUiState = repository.getAllItemsStream()\n    .map { items -> HomeUiState(itemList = items) }\n    .stateIn(\n        scope = viewModelScope,\n        started = SharingStarted.WhileSubscribed(5_000),\n        initialValue = HomeUiState()\n    )",
        codeLanguage: "Kotlin"
      },
      {
        title: "Preferences DataStore",
        paragraphs: [
          "Preferences DataStore нь жижиг key-value тохиргоо хадгалах asynchronous, transaction-safe API. Жишээ нь theme, layout preference, хамгийн сүүлийн search text. Preferences schema-гүй бөгөөд stringPreferencesKey, booleanPreferencesKey зэрэг typed key ашиглана. Proto DataStore урьдчилан тодорхойлсон schema-тай.",
          "dataStore.data нь Flow<Preferences>. IOException үед emptyPreferences emit хийж болох ба map-аар хэрэгтэй утга, default-ыг гаргана. edit transaction дотор key-д утга бичнэ. Application/Container нэг DataStore instance болон repository үүсгэж ViewModel-д injection хийнэ."
        ],
        bullets: [
          "DataStore том relational dataset-д зориулагдаагүй.",
          "edit нь suspend тул viewModelScope.launch дотор дуудагдана.",
          "Flow app дахин нээгдэхэд хадгалсан preference-г уншина.",
          "IOException-г handle хийнэ, бусад exception-г нуухгүй дахин throw хийнэ."
        ],
        code: "val searchQuery: Flow<String> = dataStore.data\n    .catch { error ->\n        if (error is IOException) emit(emptyPreferences()) else throw error\n    }\n    .map { preferences -> preferences[SEARCH_QUERY] ?: \"\" }\n\nsuspend fun saveSearchQuery(value: String) {\n    dataStore.edit { it[SEARCH_QUERY] = value }\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "Room ба DataStore-ийн ялгаа: Flight Search урсгал",
        paragraphs: [
          "Room/SQLite нь airport болон favorite route шиг олон row, relationship, search query шаардсан structured data-д хэрэглэгдэнэ. DataStore нь search field-ийн хамгийн сүүлийн text шиг нэг жижиг preference-д тохирно. SQL-д хадгалж болох ч table, DAO, migration зэрэг илүү бүтэц шаардаж асуудлаас том шийдэл болно.",
          "Flight Search-д FlightRepository Room DAO-г ашиглан airport suggestion, destination, favorite route өгнө. UserPreferencesRepository DataStore ашиглан search query хадгална. ViewModel хоёр repository-ийн Flow-г combine/flatMapLatest хийж нэг FlightSearchUiState үүсгэнэ. UI зөвхөн энэ state-ийг collect хийнэ."
        ],
        bullets: [
          "Text өөрчлөгдөхөд DataStore query-г хадгална.",
          "flatMapLatest хуучин airport search-ийг цуцалж хамгийн сүүлийн query-г үргэлжлүүлнэ.",
          "Airport сонгоход destination query ажиллана.",
          "Favorite toggle Room-д insert эсвэл delete хийж, Flow UI-г автоматаар шинэчилнэ."
        ],
        note: "Сонголт хийх дүрэм: олон record, query, relation бол Room; жижиг тохиргоо, key-value бол DataStore."
      }
    ]
  },
  {
    number: 7,
    title: "WorkManager",
    subtitle: "Persistent background work, constraints, chaining, testing",
    description: "Апп хаагдсан эсвэл төхөөрөмж restart болсон ч заавал дуусах deferred background ажлыг найдвартай төлөвлөж, хязгаарлалт, дараалал, status болон test-ийг удирдана.",
    pathways: ["Schedule tasks with WorkManager"],
    source: "https://developer.android.com/courses/android-basics-compose/unit-7",
    sections: [
      {
        title: "WorkManager хэзээ хэрэглэх вэ?",
        paragraphs: [
          "WorkManager нь deferred боловч заавал дуусах persistent background work-д зориулагдсан. Жишээ нь log upload, backup, offline data sync, тодорхой хугацаанд шинэ content татах. App process хаагдах эсвэл device restart болоход ч систем ажлыг дахин төлөвлөж чадна.",
          "Шууд хэрэглэгч хүлээж буй богино ажилд coroutine, яг цагт дуугарах alarm-д AlarmManager, хэрэглэгчид ил харагдах урт ажилд foreground service тохиромжтой байж болно. WorkManager exact timing батлахгүй; constraint хангагдсан боломжит үед ажиллана."
        ],
        bullets: [
          "Deferrable: яг одоо биш, боломжит үед ажиллаж болно.",
          "Guaranteed: enqueue болсон ажлыг систем дуусгахыг оролдоно.",
          "Persistent: process болон restart-ийг давж төлөвлөгдөж чадна.",
          "WorkManager main thread дээр удаан ажиллуулах шалтгаан биш."
        ]
      },
      {
        title: "Worker ба doWork()",
        paragraphs: [
          "Worker class ажлын хэрэгжилтийг агуулна. CoroutineWorker-ийн suspend doWork() дотор repository, file эсвэл network operation гүйцэтгэж Result.success(), Result.failure(), Result.retry() буцаана. WorkManager Worker instance-ийг шаардлагатай үед өөрөө үүсгэж ажиллуулна.",
          "success ажил амжилттай дууссаныг, failure дахин оролдохгүй алдааг, retry түр зуурын алдаа тул backoff дараа дахин оролдохыг заана. Exception-г хяналтгүй гаргахаас илүү алдааны төрөлд тохирсон Result сонгоно."
        ],
        bullets: [
          "CoroutineWorker ListenableWorker-ийн дэд төрөл.",
          "doWork() idempotent байвал retry аюулгүй.",
          "Input/output Data хэмжээ хязгаартай тул том file өөрөө дамжуулахгүй URI/path өгнө.",
          "Dependency хэрэгтэй бол WorkerFactory ашиглаж injection хийж болно."
        ],
        code: "class SyncWorker(\n    appContext: Context,\n    params: WorkerParameters\n) : CoroutineWorker(appContext, params) {\n    override suspend fun doWork(): Result = try {\n        syncData()\n        Result.success()\n    } catch (error: IOException) {\n        Result.retry()\n    }\n}",
        codeLanguage: "Kotlin"
      },
      {
        title: "WorkRequest ба enqueue",
        paragraphs: [
          "OneTimeWorkRequest нэг удаагийн, PeriodicWorkRequest давтагдах ажлыг дүрсэлнэ. Builder-ээр Worker төрөл, constraint, input data, initial delay, tag, backoff policy-г тохируулаад WorkManager.enqueue() хийнэ.",
          "Periodic work-ийн interval системийн minimum хязгаартай бөгөөд яг секундэд ажиллахгүй. Unique work нь ижил логик ажлыг давхар enqueue хийхээс сэргийлж ExistingWorkPolicy KEEP, REPLACE, APPEND зэрэг бодлого хэрэглэнэ."
        ],
        bullets: [
          "WorkRequest нь ажиллах дүрэм, Worker нь хийх код.",
          "Tag нь ажлын бүлгийг хайх, cancel хийхэд тусална.",
          "UUID нь нэг request-ийг давтагдашгүй танина.",
          "Name нь unique work урсгалыг танина."
        ],
        code: "val request = OneTimeWorkRequestBuilder<SyncWorker>()\n    .setConstraints(constraints)\n    .addTag(\"sync\")\n    .build()\n\nWorkManager.getInstance(context).enqueue(request)",
        codeLanguage: "Kotlin"
      },
      {
        title: "Constraint ба Data",
        paragraphs: [
          "Constraint нь ажил эхлэхээс өмнөх device condition. NetworkType.UNMETERED нь их data татахдаа Wi-Fi мэт unmetered network шаардана. Charging, batteryNotLow, storageNotLow, deviceIdle зэрэг constraint ашиглаж хэрэглэгчийн battery/data-д хүндэтгэлтэй хандана.",
          "Input Data нь WorkRequest-ээс Worker руу key-value дамжуулна. Worker inputData-аас key-ээр уншиж, Result.success(outputData) хэлбэрээр жижиг output буцааж болно. Data нь app domain database биш, ажлын жижиг параметрт зориулагдсан."
        ],
        bullets: [
          "Payment method байгаа эсэх зэрэг app business condition WorkManager constraint биш.",
          "Constraint хангагдахаа боливол ажил зогсож, дараа дахин ажиллаж болно.",
          "Network constraint нь connectivity-г шалгана, server заавал амжилттай гэсэн үг биш.",
          "Data key-г constant болгон алдааг багасгана."
        ],
        code: "val constraints = Constraints.Builder()\n    .setRequiredNetworkType(NetworkType.UNMETERED)\n    .setRequiresBatteryNotLow(true)\n    .build()\n\nval input = workDataOf(\"user_id\" to 42)",
        codeLanguage: "Kotlin"
      },
      {
        title: "Chaining, state ба ажиглалт",
        paragraphs: [
          "Хамааралтай ажлуудын дарааллыг chaining гэдэг. beginWith(download).then(process).then(upload).enqueue() гэж холбовол өмнөх work амжилттай дууссаны дараа дараагийнх эхэлнэ. Parallel request жагсаалт өгч fan-out, дараа нэг work-оор fan-in хийж болно.",
          "WorkInfo.State нь ENQUEUED, RUNNING, BLOCKED болон terminal SUCCEEDED, FAILED, CANCELLED төлөвтэй. Terminal state-д орсон work дахин шилжихгүй. Status-ийг UUID, tag эсвэл unique work name-аар Flow/LiveData хэлбэрээр ажиглана."
        ],
        bullets: [
          "FAILED болсон dependency дараагийн chain-ийг ажиллуулахгүй.",
          "CANCELLED нь terminal state.",
          "DELETED гэсэн work state байхгүй.",
          "Progress Data-г setProgress() ашиглан RUNNING үед мэдээлж болно."
        ],
        code: "WorkManager.getInstance(context)\n    .beginWith(downloadRequest)\n    .then(processRequest)\n    .then(uploadRequest)\n    .enqueue()",
        codeLanguage: "Kotlin"
      },
      {
        title: "Retry, backoff ба cancellation",
        paragraphs: [
          "Түр зуурын network/server алдаанд Result.retry() буцаана. Backoff policy нь retry хоорондын хугацааг LINEAR эсвэл EXPONENTIAL байдлаар өсгөнө. Байнгын validation алдааг retry хийвэл battery болон data дэмий зарцуулах тул Result.failure() зөв.",
          "Work-г id, tag, unique name-аар cancel хийж болно. CoroutineWorker цуцлагдахад coroutine cancellation тархдаг тул suspend API ашиглаж, урт loop-д ensureActive()/isActive шалган cleanup-ийг finally блокт хийнэ."
        ],
        bullets: [
          "Retry count-ийг runAttemptCount-оор харж болно.",
          "Idempotency duplicate side effect-ээс хамгаална.",
          "Server request-д idempotency key ашиглах боломжтой.",
          "Cancel нь аль хэдийн external server-д хийгдсэн side effect-ийг автоматаар буцаахгүй."
        ]
      },
      {
        title: "Background Task Inspector ба test",
        paragraphs: [
          "Android Studio-ийн Background Task Inspector нь worker жагсаалт, state, constraint, chain болон output-ийг харах, ажиллаж буй worker-ийг stop хийхэд тусална. Энэ нь enqueue болсон эсэх, яагаад BLOCKED байгаа, retry болсон эсэхийг debug хийх гол хэрэгсэл.",
          "Worker implementation unit test-д TestListenableWorkerBuilder ашиглан CoroutineWorker instance үүсгээд doWork()-ийг шууд дуудаж Result шалгаж болно. WorkManager integration test-д WorkManagerTestInitHelper болон test driver ашиглан delay/constraint хангагдсан мэт удирдана."
        ],
        bullets: [
          "OneTimeWorkRequestBuilder нь production request үүсгэнэ, worker unit test builder биш.",
          "Coroutine test-ийг runTest дотор ажиллуулна.",
          "Success, failure, retry зам бүрийг тусад нь шалга.",
          "Input Data болон output Data-г assertion хийнэ."
        ],
        code: "@Test\nfun syncWorker_returnsSuccess() = runTest {\n    val worker = TestListenableWorkerBuilder<SyncWorker>(context).build()\n    val result = worker.doWork()\n    assertEquals(Result.success(), result)\n}",
        codeLanguage: "Kotlin"
      }
    ]
  }
];
