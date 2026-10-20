// Generated from shalgalt.md by build-quiz-data.mjs.
window.QUIZ_QUESTIONS = [
  {
    "id": 1,
    "topic": "Kotlin үндэс",
    "prompt": "Which of the following variable declarations is valid?",
    "options": [
      "var hello: Int? = \"\"",
      "String \"hello\" = hello",
      "val hello = \"hello\"",
      "hello: String = \"hello\""
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “val hello = \"hello\"”. Энэ нь kotlin үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 2,
    "topic": "Kotlin үндэс",
    "prompt": "It is considered best practice to declare a variable that will not change using var instead of val.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Өөрчлөгдөхгүй утгыг val-аар зарлавал дахин утга оноохоос хамгаалдаг. var нь өөрчлөгдөх утгад хэрэглэгдэнэ."
  },
  {
    "id": 3,
    "topic": "Kotlin үндэс",
    "prompt": "Which of the following are valid ways to update a variable?",
    "options": [
      "total++",
      "total - 1",
      "total--",
      "total = total + 1"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "multiple": true,
    "explanation": "++ болон -- нь утгыг нэгээр өөрчилнө. total - 1 нь зөвхөн тооцоолол бөгөөд үр дүнг total-д буцаан оноохгүй."
  },
  {
    "id": 4,
    "topic": "Kotlin үндэс",
    "prompt": "In Kotlin, comments can be single or multi-line and are ignored by the compiler.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь kotlin үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 5,
    "topic": "Kotlin үндэс",
    "prompt": "Which of the following is not a data type in Kotlin?",
    "options": [
      "String",
      "Decimal",
      "Int",
      "Boolean"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Decimal”. Энэ нь kotlin үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 6,
    "topic": "Kotlin үндэс",
    "prompt": "Float also represents a decimal, but is less precise than Double.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь kotlin үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 7,
    "topic": "Kotlin үндэс",
    "prompt": "In Kotlin, the entrypoint of a program is the ___.",
    "options": [
      "println() statement",
      "val variable",
      "main() function",
      "return statement"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “main() function”. Энэ нь kotlin үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 8,
    "topic": "Kotlin үндэс",
    "prompt": "Which of the following are true about function return values?",
    "options": [
      "If a function does not specify a return type, the return type is Unit.",
      "A return value can be stored in a variable.",
      "Functions with a return type of Unit must include a return statement.",
      "A return value's type must match the return type of a function."
    ],
    "answers": [
      0,
      1,
      3
    ],
    "multiple": true,
    "explanation": "Буцаах төрөл бичээгүй функц Unit буцаана. Буцаасан утгыг хувьсагчид хадгалж болох ба төрөл нь зарласан return type-тэй таарах ёстой."
  },
  {
    "id": 9,
    "topic": "Kotlin үндэс",
    "prompt": "Which of the following are true about functions?",
    "options": [
      "Functions can take parameters, or variables as inputs.",
      "Function parameters are required to have default arguments.",
      "When calling a function with parameters, the values passed in are called arguments.",
      "Breaking up your code into separate functions makes your code easier to maintain."
    ],
    "answers": [
      0,
      2,
      3
    ],
    "multiple": true,
    "explanation": "Зөв ойлголт нь “Functions can take parameters, or variables as inputs., When calling a function with parameters, the values passed in are called arguments., Breaking up your code into separate functions makes your code easier to maintain.”. Энэ нь kotlin үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 10,
    "topic": "Kotlin үндэс",
    "prompt": "With named arguments, you can change the order in which you pass arguments into a function.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь kotlin үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 11,
    "topic": "Kotlin үндэс",
    "prompt": "What is the default behavior of classes in Kotlin?",
    "options": [
      "All classes are private",
      "All classes are sealed",
      "All classes are final",
      "All classes are protected"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Kotlin class анхнаасаа final байдаг. Удамшуулах шаардлагатай бол open гэж тэмдэглэнэ."
  },
  {
    "id": 12,
    "topic": "Kotlin үндэс",
    "prompt": "Which of the following is the correct way of declaring objects for class Book in Kotlin?",
    "options": [
      "Book b1 = new Book()",
      "val b1 = Book()",
      "var b1 = (Book) new()",
      "val b1 = (new) Book()"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “val b1 = Book()”. Энэ нь kotlin үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 13,
    "topic": "Kotlin үндэс",
    "prompt": "What is true about extension functions in Kotlin?",
    "options": [
      "Allows you to write new functions for a class that you cannot modify",
      "Use dot notation to call them on variables of the type you are extending",
      "It must be declared in the same file as the original class you are extending",
      "Use the extend keyword to declare these functions"
    ],
    "answers": [
      0,
      1
    ],
    "multiple": true,
    "explanation": "Extension function нь эх классыг өөрчлөхгүйгээр шинэ функцийг тухайн төрлийн объект дээр цэгэн тэмдэглэгээгээр дууддаг болгоно."
  },
  {
    "id": 14,
    "topic": "Kotlin үндэс",
    "prompt": "Which of the following is true about data classes?",
    "options": [
      "It is required for you to implement the toString() method",
      "No parameters are needed for the primary constructor",
      "Use it for classes that store data",
      "Getter methods are automatically generated for you (and setter methods for mutable variables)"
    ],
    "answers": [
      2,
      3
    ],
    "multiple": true,
    "explanation": "Data class нь өгөгдөл хадгалахад зориулагдсан бөгөөд property access болон toString, equals, copy зэрэг хэрэгтэй функцуудыг үүсгэнэ."
  },
  {
    "id": 15,
    "topic": "Kotlin үндэс",
    "prompt": "Which keyword is used to indicate that a class can be subclassed?",
    "options": [
      "public",
      "protected",
      "internal",
      "open"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Kotlin-д class-ийг удамшуулах боломжтой болгохын тулд open түлхүүр үг хэрэглэнэ."
  },
  {
    "id": 16,
    "topic": "Compose үндэс",
    "prompt": "What does IDE stand for?",
    "options": [
      "Integrated Development Environment",
      "Independent Design Environment",
      "Ideal Developer Environment",
      "Intelligent Design Environment"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Integrated Development Environment”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 17,
    "topic": "Compose үндэс",
    "prompt": "Which of the following are advantages of using Android Studio?",
    "options": [
      "It can help prevent typos and other mistakes in your code.",
      "It comes with a virtual device called an emulator that can run your app.",
      "It can show you a real-time preview of how your app will look on-screen while you code.",
      "It can automatically translate your app into other languages."
    ],
    "answers": [
      0,
      1,
      2
    ],
    "multiple": true,
    "explanation": "Зөв ойлголт нь “It can help prevent typos and other mistakes in your code., It comes with a virtual device called an emulator that can run your app., It can show you a real-time preview of how your app will look on-screen while you code.”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 18,
    "topic": "Compose үндэс",
    "prompt": "What is the purpose of using a virtual device, or emulator, in Android Studio?",
    "options": [
      "To show a variety of error messages to users",
      "To experiment with app code safely",
      "To test your app on a device without having that physical device",
      "To see what your app looks like in a web browser"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Emulator нь бодит төхөөрөмжгүй үед Android төхөөрөмжийн орчныг дуурайлган аппыг ажиллуулж шалгана."
  },
  {
    "id": 19,
    "topic": "Compose үндэс",
    "prompt": "In Android Studio, what is a project template good for?",
    "options": [
      "It causes Android Studio to download files faster.",
      "It makes getting started on building a new app faster.",
      "It provides a structure that follows best practices.",
      "It is the only way to build apps that can be previewed in Android Studio.",
      "It makes building a new app less error-prone by pre-populating the project with some app code."
    ],
    "answers": [
      1,
      2,
      4
    ],
    "multiple": true,
    "explanation": "Project template нь эхлэх бүтэц, нийтлэг код болон зөв практикийг бэлдэж өгдөг учраас хурдан бөгөөд алдаа багатай эхлүүлнэ."
  },
  {
    "id": 20,
    "topic": "Compose үндэс",
    "prompt": "How do you create a new project in Android Studio?",
    "options": [
      "A. Log out of Android Studio, and navigate to your project folder to find instructions.",
      "B. If you have a project already open, select File > New > New Project from the Android Studio menu.",
      "C. In the “Welcome to Android Studio” window, click “Start a new Android Studio project.”",
      "D. Create a new file on your computer, and title it “New Android Studio Project.\"",
      "Both B and C are ways to create a new project in Android Studio.",
      "None of the above"
    ],
    "answers": [
      4
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Both B and C are ways to create a new project in Android Studio.”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 21,
    "topic": "Compose үндэс",
    "prompt": "___ is a function that is used to define a layout in your app using Composable functions.",
    "options": [
      "ComponentActivity()",
      "onCreate()",
      "DefaultPreview()",
      "setContent()"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “setContent()”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 22,
    "topic": "Compose үндэс",
    "prompt": "A Compose function requires the @Composable annotation.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 23,
    "topic": "Compose үндэс",
    "prompt": "A ___ is a Composable that has a background color and can contain other Composables.",
    "options": [
      "Color",
      "Container",
      "Surface",
      "Box"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Surface”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 24,
    "topic": "Compose үндэс",
    "prompt": "Padding is an example of a ___",
    "options": [
      "Property",
      "Composable",
      "Attribute",
      "Modifier"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Modifier”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 25,
    "topic": "Compose үндэс",
    "prompt": "Which of the following is false about Compose?",
    "options": [
      "The Empty Compose Activity template is used to create a simple app.",
      "Layouts can be viewed in the Preview window, without actually running your app.",
      "All elements and themes in a Compose app are contained in a Surface.",
      "Themes, such as GreetingCardTheme allow you to style Composables."
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Surface заавал бүх UI-г агуулах албагүй. Compose UI нь олон төрлийн composable-оос бүрдэж болно."
  },
  {
    "id": 26,
    "topic": "Compose үндэс",
    "prompt": "What is Jetpack Compose?",
    "options": [
      "A Modern toolkit to develop Android UI",
      "Toolkit to design libraries",
      "Database Interface",
      "Plugin to build APK"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “A Modern toolkit to develop Android UI”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 27,
    "topic": "Compose үндэс",
    "prompt": "Composable functions are the basic building block of Compose.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 28,
    "topic": "Compose үндэс",
    "prompt": "What annotation is used to annotate a Composable function?",
    "options": [
      "@Annotation",
      "@ComposableFunction",
      "@Composable",
      "@Preview"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “@Composable”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 29,
    "topic": "Compose үндэс",
    "prompt": "The basic standard layout elements in Compose are:",
    "options": [
      "Column",
      "Row",
      "Text",
      "Box"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "multiple": true,
    "explanation": "Column, Row, Box нь хүүхэд элементүүдийг босоо, хэвтээ болон давхарласан байдлаар байрлуулах үндсэн layout-ууд юм."
  },
  {
    "id": 30,
    "topic": "Compose үндэс",
    "prompt": "What is the tool window for importing, creating, managing, and using resources in your app?",
    "options": [
      "Application Manager",
      "Resource Manager",
      "Resource Tool",
      "Layout Manager"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Resource Manager”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 31,
    "topic": "Compose үндэс",
    "prompt": "Which class is an automatically generated class by Android that contains the IDs of all resources in the project.",
    "options": [
      "The Android class",
      "The Resource class",
      "The R Class",
      "The ResourceID class"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “The R Class”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 32,
    "topic": "Compose үндэс",
    "prompt": "Which function is used is to load a drawable image resource.",
    "options": [
      "The stringResource() function",
      "The painterResource() function",
      "The ImageResource() function",
      "The loadResource() function"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “The painterResource() function”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 33,
    "topic": "Compose үндэс",
    "prompt": "What is the function parameter used to add accessibility text, used by talkback?",
    "options": [
      "accessibilityText",
      "contentText",
      "accessibilityDescription",
      "contentDescription"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “contentDescription”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 34,
    "topic": "Compose үндэс",
    "prompt": "The Box layout stacks the UI elements on top of one another.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 35,
    "topic": "Compose үндэс",
    "prompt": "What parameter is used to align the child element to the beginning of the parent?",
    "options": [
      "Alignment.End",
      "Alignment.Begin",
      "Alignment.Start",
      "Alignment.Top"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Alignment.Start”. Энэ нь compose үндэс сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 36,
    "topic": "Kotlin OOP ба функц",
    "prompt": "The following code will print \"Divisible by 5\" if number is equal to 25. if (number % 10 == 0) { println(\"Divisible by 10\") } else if (number == 5) { println(\"Divisible by 5\") }",
    "options": [
      "true",
      "false"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "25 нь 10-д үлдэгдэлгүй хуваагдахгүй, дараагийн нөхцөлд number == 5 мөн биш. Тиймээс уг текст хэвлэгдэхгүй."
  },
  {
    "id": 37,
    "topic": "Kotlin OOP ба функц",
    "prompt": "Which of the following conditions are satisfied when x = 5?",
    "options": [
      "x == 5",
      "x in 1..5",
      "x is Int",
      "x % 5"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "multiple": true,
    "explanation": "x нь 5 тул тэнцүүгийн шалгалт, 1..5 муж болон Int төрлийн шалгалт бүгд үнэн. x % 5 нь Boolean нөхцөл биш."
  },
  {
    "id": 38,
    "topic": "Kotlin OOP ба функц",
    "prompt": "Which is not a basic concept of object-oriented programming",
    "options": [
      "Abstraction",
      "Readability",
      "Inheritance",
      "Polymorphism"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Readability”. Энэ нь kotlin oop ба функц сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 39,
    "topic": "Kotlin OOP ба функц",
    "prompt": "Which are the four visibility modifiers in Kotlin?",
    "options": [
      "public, private, protected, abstract",
      "static, override, internal, external",
      "private, protected, public, internal",
      "public, protected, static, internal"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “private, protected, public, internal”. Энэ нь kotlin oop ба функц сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 40,
    "topic": "Kotlin OOP ба функц",
    "prompt": "The ___ keyword is used to call a method from the parent class.",
    "options": [
      "this",
      "super",
      "parent",
      "self"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “super”. Энэ нь kotlin oop ба функц сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 41,
    "topic": "Kotlin OOP ба функц",
    "prompt": "A(n) ___ defines properties or methods that a class needs to implement.",
    "options": [
      "Delegate",
      "Generic type",
      "Interface",
      "Subclass"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Interface”. Энэ нь kotlin oop ба функц сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 42,
    "topic": "Kotlin OOP ба функц",
    "prompt": "Which of the following is best represented by a nullable type?",
    "options": [
      "The number of followers (0 or more) in a social media app.",
      "An optional profile picture.",
      "A username that must be at least one character.",
      "A unique ID given to every user."
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “An optional profile picture.”. Энэ нь kotlin oop ба функц сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 43,
    "topic": "Kotlin OOP ба функц",
    "prompt": "The ___ operator allows you to call a method only if the object is non-null.",
    "options": [
      ".",
      "!!",
      "?:",
      "?."
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "?. нь safe-call оператор. Объект null бол функцийг дуудахгүй, үр дүн нь null болно."
  },
  {
    "id": 44,
    "topic": "Kotlin OOP ба функц",
    "prompt": "Which is not true of functions in Kotlin?",
    "options": [
      "A function can be changed to another data type, and vice versa.",
      "A function can be returned from another function.",
      "A function can take another function as a parameter.",
      "A function has a data type, such as (Int) -> Unit."
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “A function can be changed to another data type, and vice versa.”. Энэ нь kotlin oop ба функц сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 45,
    "topic": "Kotlin OOP ба функц",
    "prompt": "A function literal is another name for a ___",
    "options": [
      "Function type",
      "Lambda expression",
      "Function reference",
      "Trailing lambda"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Lambda expression”. Энэ нь kotlin oop ба функц сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 46,
    "topic": "Compose state ба тест",
    "prompt": "Use a ___ Composable to display an image",
    "options": [
      "Button",
      "Text",
      "Image",
      "Icon"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Image”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 47,
    "topic": "Compose state ба тест",
    "prompt": "Alignment.Center centers UI components both horizontally and vertically.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 48,
    "topic": "Compose state ба тест",
    "prompt": "Composable functions can store an object in memory using the ___ composable",
    "options": [
      "remember",
      "Column",
      "Modifier",
      "@Composable"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “remember”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 49,
    "topic": "Compose state ба тест",
    "prompt": "The debugger allows you to inspect variables when code execution has been suspended.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 50,
    "topic": "Compose state ба тест",
    "prompt": "By using ___ values in a composable function, variables can be made into observables that schedule a recomposition when their value is changed.",
    "options": [
      "remember",
      "Modifier",
      "@Composable",
      "mutableStateOf"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "mutableStateOf утга өөрчлөгдөхөд Compose-д ажиглагдах state үүсгэж, хамааралтай UI-г дахин зурна."
  },
  {
    "id": 51,
    "topic": "Compose state ба тест",
    "prompt": "The ___ composable places its children in a vertical sequence.",
    "options": [
      "Row",
      "Box",
      "Column",
      "Modifier"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Column”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 52,
    "topic": "Compose state ба тест",
    "prompt": "The ___ debugger feature allows you to navigate back up the call stack.",
    "options": [
      "Step over",
      "Step out",
      "Step into",
      "Resume program"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Step out”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 53,
    "topic": "Compose state ба тест",
    "prompt": "Jetpack Compose runs your composables for the first time, during ___ it will keep track of the composables that you call to describe your UI.",
    "options": [
      "Initial composition",
      "Recomposition",
      "State change",
      "App termination"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Initial composition”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 54,
    "topic": "Compose state ба тест",
    "prompt": "The only way to modify a Composition is through recomposition.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Composition-д харагдах өөрчлөлт оруулах үндсэн зам нь state өөрчлөгдөхөд явагдах recomposition юм."
  },
  {
    "id": 55,
    "topic": "Compose state ба тест",
    "prompt": "___ is when Jetpack Compose re-executes the composables that may have changed in response to data changes.",
    "options": [
      "Initial composition",
      "Recomposition",
      "State change",
      "App termination"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Recomposition”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 56,
    "topic": "Compose state ба тест",
    "prompt": "___ in an application is any value that can change over time.",
    "options": [
      "State",
      "value",
      "valueChange",
      "StateValue"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “State”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 57,
    "topic": "Compose state ба тест",
    "prompt": "___ is a pattern of moving state up to make a component stateless.",
    "options": [
      "State change",
      "State hoisting",
      "Hoist composition",
      "Recomposition"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "State hoisting гэдэг нь state болон түүнийг өөрчлөх callback-ийг дээд түвшинд гаргаж, доод composable-ийг stateless болгох загвар."
  },
  {
    "id": 58,
    "topic": "Compose state ба тест",
    "prompt": "Which KeyboardAction property is used to move the focus to the next composable?",
    "options": [
      "onDone",
      "onNext",
      "onGo",
      "onSend"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “onNext”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 59,
    "topic": "Compose state ба тест",
    "prompt": "Which of the following Kotlin functions is used to round up a Double or Float?",
    "options": [
      "kotlin.math.ceilUp()",
      "kotlin.math.ceil()",
      "kotlin.math.roundDown()",
      "kotlin.math.roundUp()"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “kotlin.math.ceil()”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 60,
    "topic": "Compose state ба тест",
    "prompt": "Layout Inspector is a tool in Jetpack Compose that allows you to inspect a Compose layout inside a running app in an emulator or physical device.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 61,
    "topic": "Compose state ба тест",
    "prompt": "UI tests are stored in the ___ directory.",
    "options": [
      "main",
      "androidTest",
      "test",
      "res"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “androidTest”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 62,
    "topic": "Compose state ба тест",
    "prompt": "Local tests and UI tests should be annotated with the ___ annotation.",
    "options": [
      "@VisibleForTesting",
      "@Preview",
      "@Test",
      "@Composable"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “@Test”. Энэ нь compose state ба тест сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 63,
    "topic": "Collection ба data class",
    "prompt": "Which of the following is a valid way to define a data class in Kotlin?",
    "options": [
      "data class Person(val name: String, val age: Int)",
      "class Person(val name: String, val age: Int): data",
      "class Person(val name: String, val age: Int)",
      "data class Person{val name: String, val age: Int}"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “data class Person(val name: String, val age: Int)”. Энэ нь collection ба data class сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 64,
    "topic": "Collection ба data class",
    "prompt": "When using a sealed class, all direct subclasses must be in the same package.",
    "options": [
      "true",
      "false"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Sealed төрлийн шууд дэд классууд нэг package, нэг module дотор байх хязгаарлалттай тул боломжит төрлүүдийг compiler мэдэж чадна."
  },
  {
    "id": 65,
    "topic": "Collection ба data class",
    "prompt": "When using generics, the generic data type goes inside ___.",
    "options": [
      "[]",
      "{}",
      "()",
      "<>"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “<>”. Энэ нь collection ба data class сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 66,
    "topic": "Collection ба data class",
    "prompt": "A(n) ___ class is useful when you have a fixed set of values.",
    "options": [
      "enum",
      "sealed",
      "data",
      "inherited"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “enum”. Энэ нь collection ба data class сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 67,
    "topic": "Collection ба data class",
    "prompt": "To create a list object that has the ability to change its size, you would call ___.",
    "options": [
      "modifiableListOf()",
      "immutableListOf()",
      "listOf()",
      "mutableListOf()"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “mutableListOf()”. Энэ нь collection ба data class сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 68,
    "topic": "Collection ба data class",
    "prompt": "Which of the following are higher-order functions?",
    "options": [
      "map",
      "arrangeBy",
      "filter",
      "forEach"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "multiple": true,
    "explanation": "map, filter, forEach нь lambda буюу функц параметрээр авдаг учраас higher-order function юм."
  },
  {
    "id": 69,
    "topic": "Collection ба data class",
    "prompt": "Given the following line of code, which of the following commands will print Blue? (Hint: If you are not sure, try running the code in the Kotlin Playground.) val colors = listOf(\"Red\", \"Green\", \"Blue\")",
    "options": [
      "println(colors[2])",
      "println(colors.get(2))",
      "println(colors.contains(2))",
      "println(colors.getOrDefaultValue(index = 2, defaultValue = 10))"
    ],
    "answers": [
      0,
      1
    ],
    "multiple": true,
    "explanation": "List-ийн индекс 0-оос эхэлдэг. Иймээс гурав дахь Blue элемент [2] болон get(2)-оор хоёул олдоно."
  },
  {
    "id": 70,
    "topic": "Collection ба data class",
    "prompt": "The programming concept of a class that has only one instance is called a ___.",
    "options": [
      "Uniqueness",
      "Singleton",
      "Mono-object",
      "Lambda"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Singleton”. Энэ нь collection ба data class сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 71,
    "topic": "Collection ба data class",
    "prompt": "Which of the following statements is true regarding sets and maps?",
    "options": [
      "A set must contain distinct values and a map’s keys must be distinct.",
      "A set must contain distinct values and a map’s keys can contain duplicates.",
      "A set can contain duplicate values and a map’s values can contain duplicate values.",
      "A set can contain duplicate values and a map’s keys must be distinct."
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Set давхардсан элемент хадгалахгүй, Map-ийн key бүр давтагдашгүй байна. Харин Map-ийн value давхцаж болно."
  },
  {
    "id": 72,
    "topic": "Collection ба data class",
    "prompt": "If you have a variable named records, which is a collection, to determine the number of items it contains, you can call ___.",
    "options": [
      "records.length",
      "records.quantity",
      "len(records)",
      "records.size"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “records.size”. Энэ нь collection ба data class сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 73,
    "topic": "UI, theme ба accessibility",
    "prompt": "Adaptive launcher icons for Android apps consist of a foreground and background vector drawable.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 74,
    "topic": "UI, theme ба accessibility",
    "prompt": "When building a UI that requires a scrolling list with a variable number of items, which Composable should you use?",
    "options": [
      "Column",
      "Row",
      "LazyColumn",
      "Card"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “LazyColumn”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 75,
    "topic": "UI, theme ба accessibility",
    "prompt": "What file type is used for the launcher icon foreground and background vectors?",
    "options": [
      ".txt",
      ".jpg",
      ".png",
      ".xml"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “.xml”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 76,
    "topic": "UI, theme ба accessibility",
    "prompt": "Which Composable should you use to create a vertically scrollable grid with an undetermined number of items?",
    "options": [
      "LazyColumn",
      "LazyVerticalGrid",
      "LazyHorizontalGrid",
      "Row"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “LazyVerticalGrid”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 77,
    "topic": "UI, theme ба accessibility",
    "prompt": "The Column composable is not a good option for a list of items of unknown quantity because ___.",
    "options": [
      "It can only hold a small, finite number of predefined items",
      "It arranges items vertically",
      "It provides scrolling by default without any additional code",
      "It can add content on demand"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Column бүх child-ээ нэг дор байгуулдаг. Тодорхойгүй эсвэл том жагсаалтад LazyColumn зөвхөн харагдах элементүүдийг үүсгэдэг."
  },
  {
    "id": 78,
    "topic": "UI, theme ба accessibility",
    "prompt": "The ___ method is used to add content to a LazyColumn Composable.",
    "options": [
      "painterResource()",
      "Modifier.padding()",
      "items()",
      "onCreate()"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “items()”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 79,
    "topic": "UI, theme ба accessibility",
    "prompt": "Which Composable arranges items horizontally?",
    "options": [
      "Column",
      "Card",
      "Image",
      "Row"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Row”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 80,
    "topic": "UI, theme ба accessibility",
    "prompt": "Which Composable arranges items vertically?",
    "options": [
      "Column",
      "Card",
      "Image",
      "Row"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Column”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 81,
    "topic": "UI, theme ба accessibility",
    "prompt": "Animations in your Android app can:",
    "options": [
      "Add visual cues about what's going on in your app.",
      "Add a polished look to your app.",
      "Help the user see what changed.",
      "All of the above."
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “All of the above.”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 82,
    "topic": "UI, theme ба accessibility",
    "prompt": "Spring animation is based on:",
    "options": [
      "Start and end values over the specified duration.",
      "Damping ratio and stiffness.",
      "Snapshot values specified at different timestamps.",
      "Interpolation between two keyframe values."
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Spring animation-ий хөдөлгөөнийг хугацаа бус damping ratio болон stiffness гэсэн физикийн параметрүүд тодорхойлно."
  },
  {
    "id": 83,
    "topic": "UI, theme ба accessibility",
    "prompt": "Spring animation is a physics-based animation driven by spring force.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 84,
    "topic": "UI, theme ба accessibility",
    "prompt": "In the Material theming, the ___ color is the color displayed most frequently across your app's screens and components.",
    "options": [
      "primary",
      "secondary",
      "surface",
      "background"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “primary”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 85,
    "topic": "UI, theme ба accessibility",
    "prompt": "The following file is used to define shapes of components in Compose.",
    "options": [
      "Theme.kt",
      "Color.kt",
      "Shape.kt",
      "Colors.kt"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Shape.kt”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 86,
    "topic": "UI, theme ба accessibility",
    "prompt": "You can only have one @Preview composable",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “False”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 87,
    "topic": "UI, theme ба accessibility",
    "prompt": "A hex color code starts with a pound (#) character, and is followed by six letters and/or numbers that represent the red, green, and blue (RGB) components of that color.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 88,
    "topic": "UI, theme ба accessibility",
    "prompt": "The ___ file is the file that holds all the information about the theme of the app which is defined through color, shape, and typography.",
    "options": [
      "Theme.kt",
      "Color.kt",
      "Shape.kt",
      "Colors.kt"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Theme.kt”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 89,
    "topic": "UI, theme ба accessibility",
    "prompt": "___ creates contrast between the Card and the background by adding a shadow to make the app look more realistic and visually interesting?",
    "options": [
      "Elevation",
      "Shape",
      "Color",
      "Theme"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Elevation”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 90,
    "topic": "UI, theme ба accessibility",
    "prompt": "What are reasons that someone may use Dark Theme on their device?",
    "options": [
      "It can reduce power usage by a significant amount (depending on the device’s screen technology).",
      "It improves visibility for users with low vision and those who are sensitive to bright light.",
      "It makes it easier for anyone to use a device in a low-light environment.",
      "All of the above."
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Dark theme нь зарим дэлгэцийн цэнэг зарцуулалтыг бууруулж, бага гэрэл болон гэрэлд мэдрэмтгий хэрэглэгчдэд харагдацыг сайжруулна."
  },
  {
    "id": 91,
    "topic": "UI, theme ба accessibility",
    "prompt": "TalkBack allows a user to navigate an app using switches instead of the touchscreen.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "TalkBack нь screen reader. Switch-ээр удирдах боломжийг Android-ийн Switch Access үйлчилгээ хариуцдаг."
  },
  {
    "id": 92,
    "topic": "UI, theme ба accessibility",
    "prompt": "Which attribute allows TalkBack to speak a meaningful representation of an image or icon?",
    "options": [
      "elevation",
      "shape",
      "contentDescription",
      "style"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “contentDescription”. Энэ нь ui, theme ба accessibility сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 93,
    "topic": "Lifecycle ба архитектур",
    "prompt": "Which method is first called when the app no longer has focus?",
    "options": [
      "onPause()",
      "onStart()",
      "onCreate()",
      "onStop()"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “onPause()”. Энэ нь lifecycle ба архитектур сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 94,
    "topic": "Lifecycle ба архитектур",
    "prompt": "After ___, the app is no longer visible on screen.",
    "options": [
      "onPause()",
      "onStart()",
      "onCreate()",
      "onStop()"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “onStop()”. Энэ нь lifecycle ба архитектур сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 95,
    "topic": "Lifecycle ба архитектур",
    "prompt": "Use ___ to write a debug message. This method takes two arguments: the log tag and the log message.",
    "options": [
      "Log.i()",
      "Log.d()",
      "Log.e()",
      "Log.w()"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Log.d()”. Энэ нь lifecycle ба архитектур сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 96,
    "topic": "Lifecycle ба архитектур",
    "prompt": "To save a value that needs to survive a configuration change, declare its variables with ___.",
    "options": [
      "MutableState{}",
      "rememberSaveable{}",
      "remember{}",
      "State Hoisting"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "rememberSaveable нь утгыг Bundle-д хадгалж, rotation зэрэг configuration change-ийн дараа сэргээнэ."
  },
  {
    "id": 97,
    "topic": "Lifecycle ба архитектур",
    "prompt": "The separation of concerns design principle states that the app should be divided into classes, each with separate responsibilities.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь lifecycle ба архитектур сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 98,
    "topic": "Lifecycle ба архитектур",
    "prompt": "The UI is what the user sees, while the UI state is what the app says they should see.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь lifecycle ба архитектур сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 99,
    "topic": "Lifecycle ба архитектур",
    "prompt": "According to the recommended app architecture, each application should have at least the following two layers:",
    "options": [
      "The domain layer and the data layer",
      "The UI layer and the data layer",
      "Repository layer and the UI layer",
      "The domain layer and the UI layer"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Android-ийн санал болгодог үндсэн архитектур нь UI layer болон data layer-аас бүрдэнэ. Domain layer нь шаардлагатай үед нэмэгддэг."
  },
  {
    "id": 100,
    "topic": "Lifecycle ба архитектур",
    "prompt": "StateFlow is a data-holder observable flow that emits the current and new state updates.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь lifecycle ба архитектур сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 101,
    "topic": "Lifecycle ба архитектур",
    "prompt": "Which of the following configurations should be added to the build.gradle file to add dependencies for the unit test source code?",
    "options": [
      "implementation",
      "testImplementation",
      "debugImplementation",
      "androidTestImplementation"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “testImplementation”. Энэ нь lifecycle ба архитектур сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 102,
    "topic": "Lifecycle ба архитектур",
    "prompt": "Unit tests are executed on an Android device or emulator.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Local unit test JVM дээр ажиллана. Төхөөрөмж эсвэл emulator шаарддаг нь instrumented test юм."
  },
  {
    "id": 103,
    "topic": "Navigation ба adaptive UI",
    "prompt": "A route is defined with a(n) ___ data type.",
    "options": [
      "@Composable function",
      "NavHost.Route",
      "String",
      "NavRoute"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “String”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 104,
    "topic": "Navigation ба adaptive UI",
    "prompt": "With a NavHost, you must explicitly specify a starting screen.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 105,
    "topic": "Navigation ба adaptive UI",
    "prompt": "It’s considered best practice to not pass a NavHostController to individual composables.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "NavController-ийг screen бүрт өгөхийн оронд navigation callback дамжуулах нь composable-ийг салангид, тестлэхэд хялбар болгоно."
  },
  {
    "id": 106,
    "topic": "Navigation ба adaptive UI",
    "prompt": "___ is a composable that manages which screen is displayed based on a given route.",
    "options": [
      "NavController",
      "NavHostController",
      "NavHost",
      "ComposableNavigator"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “NavHost”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 107,
    "topic": "Navigation ба adaptive UI",
    "prompt": "The composable() function called in a NavHost takes which two parameters?",
    "options": [
      "Destination content and a route",
      "A route and composable content",
      "A path and a composable",
      "Composable content and an intent."
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “A route and composable content”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 108,
    "topic": "Navigation ба adaptive UI",
    "prompt": "You can change the currently displayed route using the ___ method.",
    "options": [
      "update()",
      "composable()",
      "transition()",
      "navigate()"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “navigate()”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 109,
    "topic": "Navigation ба adaptive UI",
    "prompt": "The ___ method removes one or more screens from the backstack.",
    "options": [
      "popToStartDestination()",
      "popBackStack()",
      "popComposable()",
      "popToBackStack()"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “popBackStack()”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 110,
    "topic": "Navigation ба adaptive UI",
    "prompt": "In a multi-screen app, navigating to a new screen puts it on the bottom of the backstack.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Шинэ destination back stack-ийн дээд талд нэмэгдэнэ. Bottom хэсэгт start destination байрладаг."
  },
  {
    "id": 111,
    "topic": "Navigation ба adaptive UI",
    "prompt": "Intent ___ contain additional data passed to an Intent.",
    "options": [
      "arguments",
      "extras",
      "parameters",
      "properties"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “extras”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 112,
    "topic": "Navigation ба adaptive UI",
    "prompt": "StateFlow is a data-holder observable flow that emits the current and new state updates.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 113,
    "topic": "Navigation ба adaptive UI",
    "prompt": "Which of the following are true about the Back and Up buttons?",
    "options": [
      "The Back button is a system button",
      "The Up button is provided by the system at the bottom of the screen",
      "The Back button is part of the AppBar",
      "The Up button in the AppBar automatically navigates to the previous screen.",
      "The Back button only appears if you use navigation.",
      "The Up button can be shown or hidden, depending on the current screen."
    ],
    "answers": [
      0,
      5
    ],
    "multiple": true,
    "explanation": "Back нь системийн navigation үйлдэл. Up нь app bar-д байрлах бөгөөд одоогийн дэлгэцээс шалтгаалан харуулах эсэхийг апп шийднэ."
  },
  {
    "id": 114,
    "topic": "Navigation ба adaptive UI",
    "prompt": "The ___ composable is used to respond to the Back button, with or without a NavHost.",
    "options": [
      "BackButton",
      "BackHandler",
      "BackNavigator",
      "BackStack"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “BackHandler”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 115,
    "topic": "Navigation ба adaptive UI",
    "prompt": "Which of the following are true about designing for larger screens?",
    "options": [
      "Button positioning is more important on larger screen sizes.",
      "Usually no changes are needed to the UI layout to make the app work well for larger screen sizes.",
      "Adding another layout to the same screen removes the need to navigate between screens.",
      "Large screen layouts should avoid placing commonly used buttons in the center of the screen."
    ],
    "answers": [
      0,
      2,
      3
    ],
    "multiple": true,
    "explanation": "Том дэлгэц дээр товчийн хүрэх зай чухал бөгөөд list-detail зэрэг зэрэгцээ pane нь дэлгэц хооронд шилжих шаардлагыг багасгана."
  },
  {
    "id": 116,
    "topic": "Navigation ба adaptive UI",
    "prompt": "A ___ is a specific measurement of width or height where an app's layout should change.",
    "options": [
      "window class",
      "layout point",
      "size bucket",
      "breakpoint"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “breakpoint”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 117,
    "topic": "Navigation ба adaptive UI",
    "prompt": "The compact width window size class generally refers to smaller devices, such as phones in portrait mode.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 118,
    "topic": "Navigation ба adaptive UI",
    "prompt": "The ___ API makes the implementation of adaptive layouts simpler.",
    "options": [
      "SizeClass",
      "WindowSizeState",
      "SizeBucket",
      "WindowSizeClass"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “WindowSizeClass”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 119,
    "topic": "Navigation ба adaptive UI",
    "prompt": "A navigation rail is often appropriate for ___ width layouts.",
    "options": [
      "compact",
      "standard",
      "medium",
      "expanded"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “medium”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 120,
    "topic": "Navigation ба adaptive UI",
    "prompt": "When building apps with adaptive layouts, you should use a single preview for each screen.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “False”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 121,
    "topic": "Navigation ба adaptive UI",
    "prompt": "The list-detail layout requires Back navigation on compact screens, but not on screens where both the list and detail screens are shown at once.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Compact үед list ба detail тусдаа дэлгэц тул Back хэрэгтэй. Хоёул зэрэг харагдах өргөн layout-д detail-ээс list рүү буцах navigation шаардлагагүй."
  },
  {
    "id": 122,
    "topic": "Navigation ба adaptive UI",
    "prompt": "Assume you have a contacts app that displays a list of contacts and has details to show for each contact. What are appropriate ways to adapt the UI to different screen sizes?",
    "options": [
      "Use the list-detail layout to show one pane or two panes side-by-side depending on the available width of the screen.",
      "The list items should take up the full width of the screen, regardless of how narrow or wide the screen is.",
      "The Up button should always be shown within the app and clicking the button should exit the app.",
      "When rotating the device, the selected item in the list (and the corresponding details of that item shown) should be reset to the first item in the list.",
      "It’s required to use the Jetpack Navigation Component to make the UI responsive to different screen sizes."
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Use the list-detail layout to show one pane or two panes side-by-side depending on the available width of the screen.”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 123,
    "topic": "Navigation ба adaptive UI",
    "prompt": "Tests can be configured to run only test functions with custom annotations by configuring the ___.",
    "options": [
      "module",
      "package",
      "instrumentation class",
      "instrumentation arguments"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “instrumentation arguments”. Энэ нь navigation ба adaptive ui сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 124,
    "topic": "Coroutine, network ба DI",
    "prompt": "With concurrent programming, code might execute in an order different from how it was written.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 125,
    "topic": "Coroutine, network ба DI",
    "prompt": "The thread is responsible for displaying the user interface responding to user input.",
    "options": [
      "Main",
      "Worker",
      "IO",
      "Default"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Main”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 126,
    "topic": "Coroutine, network ба DI",
    "prompt": "Which of the following statements are true about coroutine contexts?",
    "options": [
      "Dispatchers.Default is the best choice for long running tasks involving reading and writing large amounts of data.",
      "Dispatchers.Main can be used for updating the UI but not for long-running tasks.",
      "A Job controls the lifecycle of a coroutine.",
      "Dispatchers.IO is optimized for network I/O, among other background tasks."
    ],
    "answers": [
      1,
      2,
      3
    ],
    "multiple": true,
    "explanation": "Main dispatcher UI-д, IO нь сүлжээ/файлд зориулагдана. Job нь coroutine-ийн lifecycle-ийг удирдана."
  },
  {
    "id": 127,
    "topic": "Coroutine, network ба DI",
    "prompt": "launch() and async() are extension functions of a ___, which keeps track of any coroutines it creates.",
    "options": [
      "CoroutineScope",
      "Job",
      "Dispatcher",
      "CoroutineContext"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “CoroutineScope”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 128,
    "topic": "Coroutine, network ба DI",
    "prompt": "Which of the following statements are true about structured concurrency and its best practices?",
    "options": [
      "If a coroutine is canceled, child coroutines should also be canceled.",
      "A parent scope can complete before one or more of its children are completed.",
      "A failure should propagate downward without canceling the parent coroutine.",
      "Coroutines must be launched from a coroutine scope."
    ],
    "answers": [
      0,
      3
    ],
    "multiple": true,
    "explanation": "Structured concurrency-д coroutine scope дотор эхэлж, parent цуцлагдвал child-ууд мөн цуцлагдана; parent нь child-уудаа дуусахыг хүлээнэ."
  },
  {
    "id": 129,
    "topic": "Coroutine, network ба DI",
    "prompt": "Which of the following statements are true about web services?",
    "options": [
      "GET, POST, and DELETE are all examples of HTTP operations.",
      "A URL is a type of URI but not all URIs are URLs.",
      "RESTful services always provide a formatted XML response.",
      "Retrofit is a third-party library for handling JSON from a web service."
    ],
    "answers": [
      0,
      1,
      3
    ],
    "multiple": true,
    "explanation": "HTTP-д GET, POST, DELETE зэрэг operation байна. URL нь URI-ийн нэг төрөл, Retrofit нь REST/JSON ажилд хэрэглэгддэг client library."
  },
  {
    "id": 130,
    "topic": "Coroutine, network ба DI",
    "prompt": "Retrofit is a third-party library that enables your app to make requests to a(n) ___ web service.",
    "options": [
      "XML",
      "Socket",
      "RESTful",
      "JSON"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “RESTful”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 131,
    "topic": "Coroutine, network ба DI",
    "prompt": "One recommended way to perform a Retrofit network request is with a coroutine launched in the viewModelScope.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 132,
    "topic": "Coroutine, network ба DI",
    "prompt": "To enable your app to make connections to the Internet, add the 'android.permission.INTERNET' permission in the ___ file.",
    "options": [
      "MainActivity",
      "build.gradle",
      "Android manifest",
      "ViewModel"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Android manifest”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 133,
    "topic": "Coroutine, network ба DI",
    "prompt": "The process of turning a JSON result into usable data, as is done with Gson, is called JSON ___.",
    "options": [
      "Serialization",
      "Encoding",
      "Converting",
      "Parsing"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Parsing”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 134,
    "topic": "Coroutine, network ба DI",
    "prompt": "Which of the following is not a common HTTP operation/method:",
    "options": [
      "GET",
      "POST",
      "DELETE",
      "SET"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “SET”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 135,
    "topic": "Coroutine, network ба DI",
    "prompt": "The response from a REST web service is commonly formatted in one of the common data transfer formats like XML or JSON.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 136,
    "topic": "Coroutine, network ба DI",
    "prompt": "Which of the following is not true for the Retrofit library:",
    "options": [
      "It is a client library.",
      "It enables your app to make requests to a REST web service.",
      "It converts Kotlin objects to JSON objects.",
      "It is a third-party library."
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Retrofit өөрөө Kotlin объектыг JSON болгодоггүй; converter library serialization/deserialization-ийг гүйцэтгэдэг."
  },
  {
    "id": 137,
    "topic": "Coroutine, network ба DI",
    "prompt": "Which of the following applies to a Singleton pattern:",
    "options": [
      "object declarations are used to declare singleton objects in Kotlin.",
      "Ensures that one, and only one, instance of an object is created",
      "Has one global point of access to that object.",
      "All of the above"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “All of the above”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 138,
    "topic": "Coroutine, network ба DI",
    "prompt": "Each JSON object contains the following:",
    "options": [
      "A set of key-value pairs separated by a colon.",
      "A set of key-value pairs separated by a comma.",
      "A set of key-value pairs separated by a semi colon.",
      "None of the above"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "JSON object дотор key-value хосууд хоорондоо таслалаар тусгаарлагдана. Нэг key ба value-ийн хооронд colon орно."
  },
  {
    "id": 139,
    "topic": "Coroutine, network ба DI",
    "prompt": "Following Android’s recommended app architecture guidelines, an app should have which of the following:",
    "options": [
      "A UI Layer",
      "A Domain Layer",
      "A Data Layer",
      "A Business Layer"
    ],
    "answers": [
      0,
      2
    ],
    "multiple": true,
    "explanation": "Санал болгодог архитектурт UI layer болон data layer үндсэндээ байна. Domain layer нь optional."
  },
  {
    "id": 140,
    "topic": "Coroutine, network ба DI",
    "prompt": "The advantages of using Dependency Injection (DI) in your app include which of the following:",
    "options": [
      "Helps with the reusability of code",
      "Makes refactoring easier",
      "Helps with testing",
      "Makes your app run faster"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "multiple": true,
    "explanation": "Dependency Injection нь dependency-г гаднаас өгснөөр код дахин ашиглах, солих, refactor хийх болон fake dependency-ээр тестлэхэд хялбар болгоно."
  },
  {
    "id": 141,
    "topic": "Coroutine, network ба DI",
    "prompt": "If your app has more than one type of data source, they should all be stored in the same repository for ease of use.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “False”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 142,
    "topic": "Coroutine, network ба DI",
    "prompt": "Which of the following is used to replace the Main dispatcher with a TestDispatcher in a local unit test:",
    "options": [
      "runTest",
      "runBlocking",
      "Distpatchers.resetMain()",
      "Dispatchers.setMain()"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Dispatchers.setMain()”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 143,
    "topic": "Coroutine, network ба DI",
    "prompt": "The runTest() function can be used to test suspend functions.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь coroutine, network ба di сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 144,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Which of the following statements are true about relational databases and SQLite?",
    "options": [
      "Referencing one table's primary key in another table lets you model relationships between tables.",
      "A SQLite database consists of columns, which consist of tables and rows.",
      "Every data table must have at least one foreign key.",
      "Rows contain the individual items in the database."
    ],
    "answers": [
      0,
      3
    ],
    "multiple": true,
    "explanation": "Foreign key ашиглан хүснэгтүүдийг холбоно. Row бүр нэг бичлэгийг илэрхийлдэг; хүснэгт бүр заавал foreign key-тэй байх албагүй."
  },
  {
    "id": 145,
    "topic": "SQL, Room ба DataStore",
    "prompt": "It is optional to end a SQL statement with a semicolon.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 146,
    "topic": "SQL, Room ба DataStore",
    "prompt": "If you want to calculate the sum of all values for a database column, what do you use?",
    "options": [
      "Aggregate function",
      "WHERE clause",
      "DISTINCT keyword",
      "LIMIT clause"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Aggregate function”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 147,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Which SELECT statement returns the number of unique email addresses for messages in the spam folder?",
    "options": [
      "SELECT COUNT(DISTINCT folder) FROM email WHERE spam != sender;",
      "SELECT DISTINCT COUNT(sender) FROM email WHERE folder = 'spam';",
      "SELECT COUNT(DISTINCT sender) FROM email WHERE folder = 'spam';",
      "SELECT DISTINCT COUNT('spam') FROM email WHERE sender = folder;"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “SELECT COUNT(DISTINCT sender) FROM email WHERE folder = 'spam';”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 148,
    "topic": "SQL, Room ба DataStore",
    "prompt": "The SQL statement SELECT * FROM contacts WHERE name LIKE '%Milton' returns all rows where the value of the name column begins with Milton.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "%Milton загварын эхний % нь өмнө нь дурын тэмдэгт байж болохыг илэрхийлдэг тул Milton-оор төгссөн утгууд таарна."
  },
  {
    "id": 149,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Which of the following statements are true about GROUP BY and ORDER BY?",
    "options": [
      "The ORDER BY clause comes before the GROUP BY clause.",
      "In an ORDER BY clause, ascending order is the default.",
      "If a query contains a GROUP BY clause, it overrides the ORDER BY clause.",
      "ORDER BY and GROUP BY clauses can both accept multiple columns."
    ],
    "answers": [
      1,
      3
    ],
    "multiple": true,
    "explanation": "ORDER BY-ийн default нь ascending. GROUP BY болон ORDER BY хоёул олон column авч чадна, SQL дараалалд GROUP BY түрүүлж бичигдэнэ."
  },
  {
    "id": 150,
    "topic": "SQL, Room ба DataStore",
    "prompt": "The WHERE condition NOT read = false and the WHERE condition read != true are equivalent.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "NOT (read = false) нь read үнэн байх нөхцөл, харин read != true нь read худал байх нөхцөл тул эквивалент биш."
  },
  {
    "id": 151,
    "topic": "SQL, Room ба DataStore",
    "prompt": "The LIMIT clause LIMIT 30 SKIP 60 returns:",
    "options": [
      "60 rows",
      "Rows 31 through 60",
      "Rows 61 through 90",
      "90 rows"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Rows 61 through 90”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 152,
    "topic": "SQL, Room ба DataStore",
    "prompt": "An UPDATE statement uses a ___ clause to assign values for columns.",
    "options": [
      "WHERE",
      "SET",
      "ASSIGN",
      "LIKE"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “SET”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 153,
    "topic": "SQL, Room ба DataStore",
    "prompt": "UPDATE and DELETE statements can include a WHERE clause and can affect multiple rows.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 154,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Which of the following statements is not true about the @Query annotation?",
    "options": [
      "The @Query annotation is used with a method in the DAO.",
      "The @Query annotation corresponds to a SELECT query.",
      "The @Query annotation can pass arguments into a SQL statement by preceding their name with a colon.",
      "The @Query annotation can only be used with a suspend function."
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "@Query функц suspend байх албагүй; Flow зэрэг observable төрөл буцааж болно."
  },
  {
    "id": 155,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Which of the following statements are true about the DAO?",
    "options": [
      "DAO functions use annotations like @Insert and @Update that correspond to an operation on the database.",
      "DAO functions can return a flow.",
      "Instances of DAO classes are referenced in the AppDatabase class.",
      "All of the above"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “All of the above”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 156,
    "topic": "SQL, Room ба DataStore",
    "prompt": "The Database class, inheriting from the RoomDatabase class, is responsible for ___.",
    "options": [
      "Instantiating the database and providing access to the DAO.",
      "Representing individual data tables.",
      "Defining functions that map to SQL statements, such as SELECT queries.",
      "Provides data to the UI."
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Instantiating the database and providing access to the DAO.”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 157,
    "topic": "SQL, Room ба DataStore",
    "prompt": "The purpose of the DAO is to:",
    "options": [
      "Hold reference to the view models and the database.",
      "Define functions that map to SQL statements, such as SELECT, and INSERT queries.",
      "Provide a factory method to create a database instance.",
      "Create a new database instance."
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “Define functions that map to SQL statements, such as SELECT, and INSERT queries.”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 158,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Why do you need to use the synchronized() function when you create the database?",
    "options": [
      "It lets you create multiple copies of the database.",
      "It lets you safely access the code from multiple threads at once.",
      "It is used to avoid race conditions.",
      "It ensures only one thread can enter the block of code at once."
    ],
    "answers": [
      1,
      2,
      3
    ],
    "multiple": true,
    "explanation": "synchronized блокт нэг агшинд зөвхөн нэг thread орсноор зэрэг database instance үүсэх race condition-оос хамгаална."
  },
  {
    "id": 159,
    "topic": "SQL, Room ба DataStore",
    "prompt": "You can use the @Insert and @Delete annotations without providing a SQL statement.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 160,
    "topic": "SQL, Room ба DataStore",
    "prompt": "To handle conflicts when inserting into a database, you can pass a(n) parameter, such as IGNORE, to the @Insert annotation.",
    "options": [
      "onConflict",
      "strategy",
      "conflictAction",
      "resolution"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “onConflict”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 161,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Select all the statements that are true about the Database Inspector:",
    "options": [
      "It lets you inspect, query, and modify your app's databases while your app is running.",
      "It works with other SQLite libraries that you bundle with your app.",
      "It is especially useful for database debugging.",
      "It works with plain SQLite and with libraries built on top of SQLite, such as Room."
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "multiple": true,
    "explanation": "Database Inspector нь ажиллаж буй аппын Room болон SQLite database-ийг харах, query хийх, өөрчлөх, debug хийх боломжтой."
  },
  {
    "id": 162,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Entities represent individual data tables in the Room database.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 163,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Which of the following statement is not true about the primary key:",
    "options": [
      "You can use the primary key to uniquely identify every record/entry in your database tables.",
      "After you assign the primary key, you cannot modify it.",
      "Room generates an incrementing primary key value for each entity by default.",
      "The primary key represents the entity object as long as it exists in the database."
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Room primary key-г зөвхөн autoGenerate = true гэж тохируулсан үед автоматаар өсгөнө; энэ нь default үйлдэл биш."
  },
  {
    "id": 164,
    "topic": "SQL, Room ба DataStore",
    "prompt": "The implementations of DataStore are:",
    "options": [
      "Proto",
      "Preferences",
      "Room",
      "SQLite"
    ],
    "answers": [
      0,
      1
    ],
    "multiple": true,
    "explanation": "DataStore-ийн хоёр implementation нь Preferences DataStore болон Proto DataStore юм. Room, SQLite нь relational database технологи."
  },
  {
    "id": 165,
    "topic": "SQL, Room ба DataStore",
    "prompt": "The Preferences DataStore uses a predefined schema.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Preferences DataStore нь schema-гүй key-value хадгалалт. Урьдчилан тодорхойлсон schema хэрэглэдэг нь Proto DataStore."
  },
  {
    "id": 166,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Which function does DataStore provide to modify the DataStore?",
    "options": [
      "preferencesDataStore()",
      "updatePreferences()",
      "edit()",
      "map()"
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “edit()”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 167,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Preferences DataStore uses keys to access stored values.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “True”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 168,
    "topic": "SQL, Room ба DataStore",
    "prompt": "Which exception can occur when you attempt to read from a Preferences DataStore?",
    "options": [
      "IllegalArgumentException",
      "IOException",
      "IllegalStateException",
      "NumberFormatException"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Зөв ойлголт нь “IOException”. Энэ нь sql, room ба datastore сэдэвт хэрэглэгддэг зөв нэр, дүрэм эсвэл үйлдэл юм."
  },
  {
    "id": 169,
    "topic": "WorkManager ба background task",
    "prompt": "Which tool helps you visualize, monitor, and debug your app's workers?",
    "options": [
      "Profiler",
      "Background Task Inspector",
      "Logcat",
      "Device Manager"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Android Studio-ийн Background Task Inspector нь WorkManager worker-уудыг харах, төлөвийг хянах болон алдааг шинжлэх зориулалттай."
  },
  {
    "id": 170,
    "topic": "WorkManager ба background task",
    "prompt": "Which of the following options are valid terminal work states?",
    "options": [
      "CANCELLED",
      "DELETED",
      "FAILED",
      "SUCCEEDED"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "multiple": true,
    "explanation": "SUCCEEDED, FAILED, CANCELLED төлөвт орсон work цааш дахин ажиллахгүй тул terminal state гэж үзнэ. DELETED гэсэн WorkInfo.State байдаггүй."
  },
  {
    "id": 171,
    "topic": "WorkManager ба background task",
    "prompt": "Which of the following options are valid types of work requests?",
    "options": [
      "OneTimeWorkRequest",
      "SingleWorkRequest",
      "RepeatingWorkRequest",
      "PeriodicWorkRequest"
    ],
    "answers": [
      0,
      3
    ],
    "multiple": true,
    "explanation": "WorkManager нэг удаагийн ажилд OneTimeWorkRequest, давтагдах ажилд PeriodicWorkRequest ашигладаг."
  },
  {
    "id": 172,
    "topic": "WorkManager ба background task",
    "prompt": "Creating and enqueueing multiple dependent tasks and the order they should run in is called linking.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Хамааралтай ажлуудын гүйцэтгэх дарааллыг үүсгэхийг work chaining гэдэг; linking гэж нэрлэдэггүй."
  },
  {
    "id": 173,
    "topic": "WorkManager ба background task",
    "prompt": "Work constraints are useful in which of the following situations?",
    "options": [
      "Checking that a valid form of payment is saved on the user's device before the work runs.",
      "Checking what time it is before the work runs.",
      "Checking that the device is connected to a wifi network before downloading a large amount of app data.",
      "Checking that the app was opened a set number of times before the work runs."
    ],
    "answers": [
      2
    ],
    "multiple": false,
    "explanation": "WorkManager constraint нь network type зэрэг төхөөрөмжийн бодит нөхцөлийг шалгана. Том өгөгдөл татахын өмнө Wi-Fi шаардах нь тохиромжтой жишээ."
  },
  {
    "id": 174,
    "topic": "WorkManager ба background task",
    "prompt": "Which of the following options is a way to pass input data to a worker?",
    "options": [
      "Pass the data in as an argument when calling the doWork() function.",
      "Use a Data object to pass key/value pairs.",
      "Pass data as a String, but it must be less than 140 characters.",
      "Assign it to the worker.inputData variable."
    ],
    "answers": [
      1
    ],
    "multiple": false,
    "explanation": "Worker-ийн input нь Data объект дахь хэмжээ хязгаартай key-value хосуудаар WorkRequest-д өгөгдөнө."
  },
  {
    "id": 175,
    "topic": "WorkManager ба background task",
    "prompt": "After work is enqueued, you can check its status by ___.",
    "options": [
      "Name",
      "Id",
      "Tag",
      "Work type"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "multiple": true,
    "explanation": "Enqueue хийсэн work-ийн WorkInfo төлөвийг id, tag эсвэл unique work-ийн name-аар WorkManager-аас ажиглаж болно."
  },
  {
    "id": 176,
    "topic": "WorkManager ба background task",
    "prompt": "The Background Task Inspector lets you stop workers during their execution.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Background Task Inspector-оос ажиллаж буй worker-ийг сонгон stop хийх боломжтой."
  },
  {
    "id": 177,
    "topic": "WorkManager ба background task",
    "prompt": "Which worker builder is recommended to test CoroutineWorkers?",
    "options": [
      "OneTimeWorkRequestBuilder",
      "PeriodicWorkRequestBuilder",
      "TestWorkerBuilder",
      "TestListenableWorkerBuilder"
    ],
    "answers": [
      3
    ],
    "multiple": false,
    "explanation": "CoroutineWorker нь ListenableWorker-ийн дэд төрөл тул TestListenableWorkerBuilder ашиглан тестийн instance байгуулна."
  },
  {
    "id": 178,
    "topic": "WorkManager ба background task",
    "prompt": "When testing worker implementations, you can call workers directly with doWork() instead of enqueuing the worker.",
    "options": [
      "True",
      "False"
    ],
    "answers": [
      0
    ],
    "multiple": false,
    "explanation": "Worker implementation-ийн unit test-д worker-ийг тестийн builder-ээр үүсгээд doWork()-ийг шууд дуудаж Result-ийг шалгаж болно."
  }
];
