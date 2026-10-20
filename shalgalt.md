Which of the following variable declarations is valid?

var hello: Int? = ""

String "hello" = hello

val hello = "hello"

hello: String = "hello"
It is considered best practice to declare a variable that will not change using var instead of val.

True

False
Which of the following are valid ways to update a variable?
Choose as many answers as you see fit.

total++

total - 1

total--

total = total + 1
In Kotlin, comments can be single or multi-line and are ignored by the compiler.

True

False
Which of the following is not a data type in Kotlin?

String

Decimal

Int

Boolean
Float also represents a decimal, but is less precise than Double.

True

False
In Kotlin, the entrypoint of a program is the \_\_\_.

println() statement

val variable

main() function

return statement
Which of the following are true about function return values?
Choose as many answers as you see fit.

If a function does not specify a return type, the return type is Unit.

A return value can be stored in a variable.

Functions with a return type of Unit must include a return statement.

A return value's type must match the return type of a function.
Which of the following are true about functions?
Choose as many answers as you see fit.

Functions can take parameters, or variables as inputs.

Function parameters are required to have default arguments.

When calling a function with parameters, the values passed in are called arguments.

Breaking up your code into separate functions makes your code easier to maintain.
With named arguments, you can change the order in which you pass arguments into a function.

True

False

What is the default behavior of classes in Kotlin?

All classes are private

All classes are sealed

All classes are final

All classes are protected
Which of the following is the correct way of declaring objects for class Book in Kotlin?

Book b1 = new Book()

val b1 = Book()

var b1 = (Book) new()

val b1 = (new) Book()
What is true about extension functions in Kotlin?
Choose as many answers as you see fit.

Allows you to write new functions for a class that you cannot modify

Use dot notation to call them on variables of the type you are extending

It must be declared in the same file as the original class you are extending

Use the extend keyword to declare these functions
Which of the following is true about data classes?
Choose as many answers as you see fit.

It is required for you to implement the toString() method

No parameters are needed for the primary constructor

Use it for classes that store data

Getter methods are automatically generated for you (and setter methods for mutable variables)
Which keyword is used to indicate that a class can be subclassed?

public

protected

internal

What does IDE stand for?

Integrated Development Environment

Independent Design Environment

Ideal Developer Environment

Intelligent Design Environment
Which of the following are advantages of using Android Studio?
Choose as many answers as you see fit.

It can help prevent typos and other mistakes in your code.

It comes with a virtual device called an emulator that can run your app.

It can show you a real-time preview of how your app will look on-screen while you code.

It can automatically translate your app into other languages.
What is the purpose of using a virtual device, or emulator, in Android Studio?

To show a variety of error messages to users

To experiment with app code safely

To test your app on a device without having that physical device

To see what your app looks like in a web browser
In Android Studio, what is a project template good for?
Choose as many answers as you see fit.

It causes Android Studio to download files faster.

It makes getting started on building a new app faster.

It provides a structure that follows best practices.

It is the only way to build apps that can be previewed in Android Studio.

It makes building a new app less error-prone by pre-populating the project with some app code.
How do you create a new project in Android Studio?

A. Log out of Android Studio, and navigate to your project folder to find instructions.

B. If you have a project already open, select File > New > New Project from the Android Studio menu.

C. In the “Welcome to Android Studio” window, click “Start a new Android Studio project.”

D. Create a new file on your computer, and title it “New Android Studio Project."

Both B and C are ways to create a new project in Android Studio.

None of the above
\_\_\_ is a function that is used to define a layout in your app using Composable functions.

ComponentActivity()

onCreate()

DefaultPreview()

setContent()
A Compose function requires the @Composable annotation.

True

False
A \_\_\_ is a Composable that has a background color and can contain other Composables.

Color

Container

Surface

Box
Padding is an example of a \_\_\_

Property

Composable

Attribute

Modifier
Which of the following is false about Compose?

The Empty Compose Activity template is used to create a simple app.

Layouts can be viewed in the Preview window, without actually running your app.

All elements and themes in a Compose app are contained in a Surface.

Themes, such as GreetingCardTheme allow you to style Composables.

What is Jetpack Compose?

A Modern toolkit to develop Android UI

Toolkit to design libraries

Database Interface

Plugin to build APK
Composable functions are the basic building block of Compose.

True

False
What annotation is used to annotate a Composable function?

@Annotation

@ComposableFunction

@Composable

@Preview
The basic standard layout elements in Compose are:
Choose as many answers as you see fit.

Column

Row

Text

Box
What is the tool window for importing, creating, managing, and using resources in your app?

Application Manager

Resource Manager

Resource Tool

Layout Manager
Which class is an automatically generated class by Android that contains the IDs of all resources in the project.

The Android class

The Resource class

The R Class

The ResourceID class
Which function is used is to load a drawable image resource.

The stringResource() function

The painterResource() function

The ImageResource() function

The loadResource() function
What is the function parameter used to add accessibility text, used by talkback?

accessibilityText

contentText

accessibilityDescription

contentDescription
The Box layout stacks the UI elements on top of one another.

True

False
What parameter is used to align the child element to the beginning of the parent?

Alignment.End

Alignment.Begin

Alignment.Start

Alignment.Top

The following code will print "Divisible by 5" if number is equal to 25.

if (number % 10 == 0) {
println("Divisible by 10")
} else if (number == 5) {
println("Divisible by 5")
}

true

false
Which of the following conditions are satisfied when x = 5?
Choose as many answers as you see fit.

x == 5

x in 1..5

x is Int

x % 5
Which is not a basic concept of object-oriented programming

Abstraction

Readability

Inheritance

Polymorphism
Which are the four visibility modifiers in Kotlin?

public, private, protected, abstract

static, override, internal, external

private, protected, public, internal

public, protected, static, internal
The \_\_\_ keyword is used to call a method from the parent class.

this

super

parent

self
A(n) \_\_\_ defines properties or methods that a class needs to implement.

Delegate

Generic type

Interface

Subclass
Which of the following is best represented by a nullable type?

The number of followers (0 or more) in a social media app.

An optional profile picture.

A username that must be at least one character.

A unique ID given to every user.
The \_\_\_ operator allows you to call a method only if the object is non-null.

.

!!

?:

?.
Which is not true of functions in Kotlin?

A function can be changed to another data type, and vice versa.

A function can be returned from another function.

A function can take another function as a parameter.

A function has a data type, such as (Int) -> Unit.
A function literal is another name for a \_\_\_

Function type

Lambda expression

Function reference

Trailing lambda

Use a \_\_\_ Composable to display an image

Button

Text

Image

Icon
Alignment.Center centers UI components both horizontally and vertically.

True

False
Composable functions can store an object in memory using the \_\_\_ composable

remember

Column

Modifier

@Composable
The debugger allows you to inspect variables when code execution has been suspended.

True

False
By using \_\_\_ values in a composable function, variables can be made into observables that schedule a recomposition when their value is changed.

remember

Modifier

@Composable

mutableStateOf
The \_\_\_ composable places its children in a vertical sequence.

Row

Box

Column

Modifier
The \_\_\_ debugger feature allows you to navigate back up the call stack.

Step over

Step out

Step into

Resume program

Jetpack Compose runs your composables for the first time, during \_\_\_ it will keep track of the composables that you call to describe your UI.

Initial composition

Recomposition

State change

App termination
The only way to modify a Composition is through recomposition.

True

False
\_\_\_ is when Jetpack Compose re-executes the composables that may have changed in response to data changes.

Initial composition

Recomposition

State change

App termination
\_\_\_ in an application is any value that can change over time.

State

value

valueChange

StateValue
\_\_\_ is a pattern of moving state up to make a component stateless.

State change

State hoisting

Hoist composition

Recomposition
Which KeyboardAction property is used to move the focus to the next composable?

onDone

onNext

onGo

onSend
Which of the following Kotlin functions is used to round up a Double or Float?

kotlin.math.ceilUp()

kotlin.math.ceil()

kotlin.math.roundDown()

kotlin.math.roundUp()
Layout Inspector is a tool in Jetpack Compose that allows you to inspect a Compose layout inside a running app in an emulator or physical device.

True

False
UI tests are stored in the \_\_\_ directory.

main

androidTest

test

res
Local tests and UI tests should be annotated with the \_\_\_ annotation.

@VisibleForTesting

@Preview

@Test

@Composable

Which of the following is a valid way to define a data class in Kotlin?

data class Person(val name: String, val age: Int)

class Person(val name: String, val age: Int): data

class Person(val name: String, val age: Int)

data class Person{val name: String, val age: Int}
When using a sealed class, all direct subclasses must be in the same package.

true

false
When using generics, the generic data type goes inside \_\_\_.

[]

{}

()

<>
A(n) \_\_\_ class is useful when you have a fixed set of values.

enum

sealed

data

inherited
To create a list object that has the ability to change its size, you would call \_\_\_.

modifiableListOf()

immutableListOf()

listOf()

mutableListOf()
Which of the following are higher-order functions?
Choose as many answers as you see fit.

map

arrangeBy

filter

forEach
Given the following line of code, which of the following commands will print Blue? (Hint: If you are not sure, try running the code in the Kotlin Playground.)

val colors = listOf("Red", "Green", "Blue")
Choose as many answers as you see fit.

println(colors[2])

println(colors.get(2))

println(colors.contains(2))

println(colors.getOrDefaultValue(index = 2, defaultValue = 10))
The programming concept of a class that has only one instance is called a \_\_\_.

Uniqueness

Singleton

Mono-object

Lambda
Which of the following statements is true regarding sets and maps?

A set must contain distinct values and a map’s keys must be distinct.

A set must contain distinct values and a map’s keys can contain duplicates.

A set can contain duplicate values and a map’s values can contain duplicate values.

A set can contain duplicate values and a map’s keys must be distinct.
If you have a variable named records, which is a collection, to determine the number of items it contains, you can call \_\_\_.

records.length

records.quantity

len(records)

records.size

Adaptive launcher icons for Android apps consist of a foreground and background vector drawable.

True

False
When building a UI that requires a scrolling list with a variable number of items, which Composable should you use?

Column

Row

LazyColumn

Card
What file type is used for the launcher icon foreground and background vectors?

.txt

.jpg

.png

.xml
Which Composable should you use to create a vertically scrollable grid with an undetermined number of items?

LazyColumn

LazyVerticalGrid

LazyHorizontalGrid

Row
The Column composable is not a good option for a list of items of unknown quantity because \_\_\_.

It can only hold a small, finite number of predefined items

It arranges items vertically

It provides scrolling by default without any additional code

It can add content on demand
The \_\_\_ method is used to add content to a LazyColumn Composable.

painterResource()

Modifier.padding()

items()

onCreate()
Which Composable arranges items horizontally?

Column

Card

Image

Row
Which Composable arranges items vertically?

Column

Card

Image

Row

Animations in your Android app can:

Add visual cues about what's going on in your app.

Add a polished look to your app.

Help the user see what changed.

All of the above.
Spring animation is based on:

Start and end values over the specified duration.

Damping ratio and stiffness.

Snapshot values specified at different timestamps.

Interpolation between two keyframe values.
Spring animation is a physics-based animation driven by spring force.

True

False
In the Material theming, the \_\_\_ color is the color displayed most frequently across your app's screens and components.

primary

secondary

surface

background
The following file is used to define shapes of components in Compose.

Theme.kt

Color.kt

Shape.kt

Colors.kt
You can only have one @Preview composable

True

False
A hex color code starts with a pound (#) character, and is followed by six letters and/or numbers that represent the red, green, and blue (RGB) components of that color.

True

False
The \_\_\_ file is the file that holds all the information about the theme of the app which is defined through color, shape, and typography.

Theme.kt

Color.kt

Shape.kt

Colors.kt
\_\_\_ creates contrast between the Card and the background by adding a shadow to make the app look more realistic and visually interesting?

Elevation

Shape

Color

Theme
What are reasons that someone may use Dark Theme on their device?

It can reduce power usage by a significant amount (depending on the device’s screen technology).

It improves visibility for users with low vision and those who are sensitive to bright light.

It makes it easier for anyone to use a device in a low-light environment.

All of the above.
TalkBack allows a user to navigate an app using switches instead of the touchscreen.

True

False
Which attribute allows TalkBack to speak a meaningful representation of an image or icon?

elevation

shape

contentDescription

style

Which method is first called when the app no longer has focus?

onPause()

onStart()

onCreate()

onStop()
After \_\_\_, the app is no longer visible on screen.

onPause()

onStart()

onCreate()

onStop()
Use \_\_\_ to write a debug message. This method takes two arguments: the log tag and the log message.

Log.i()

Log.d()

Log.e()

Log.w()
To save a value that needs to survive a configuration change, declare its variables with \_\_\_.

MutableState{}

rememberSaveable{}

remember{}

State Hoisting
The separation of concerns design principle states that the app should be divided into classes, each with separate responsibilities.

True

False
The UI is what the user sees, while the UI state is what the app says they should see.

True

False
According to the recommended app architecture, each application should have at least the following two layers:

The domain layer and the data layer

The UI layer and the data layer

Repository layer and the UI layer

The domain layer and the UI layer
StateFlow is a data-holder observable flow that emits the current and new state updates.

True

False
Which of the following configurations should be added to the build.gradle file to add dependencies for the unit test source code?

implementation

testImplementation

debugImplementation

androidTestImplementation
Unit tests are executed on an Android device or emulator.

True

False

A route is defined with a(n) \_\_\_ data type.

@Composable function

NavHost.Route

String

NavRoute
With a NavHost, you must explicitly specify a starting screen.

True

False
It’s considered best practice to not pass a NavHostController to individual composables.

True

False
\_\_\_ is a composable that manages which screen is displayed based on a given route.

NavController

NavHostController

NavHost

ComposableNavigator
The composable() function called in a NavHost takes which two parameters?

Destination content and a route

A route and composable content

A path and a composable

Composable content and an intent.
You can change the currently displayed route using the \_\_\_ method.

update()

composable()

transition()

navigate()
The \_\_\_ method removes one or more screens from the backstack.

popToStartDestination()

popBackStack()

popComposable()

popToBackStack()
In a multi-screen app, navigating to a new screen puts it on the bottom of the backstack.

True

False
Intent \_\_\_ contain additional data passed to an Intent.

arguments

extras

parameters

properties
StateFlow is a data-holder observable flow that emits the current and new state updates.

True

False
Which of the following are true about the Back and Up buttons?
Choose as many answers as you see fit.

The Back button is a system button

The Up button is provided by the system at the bottom of the screen

The Back button is part of the AppBar

The Up button in the AppBar automatically navigates to the previous screen.

The Back button only appears if you use navigation.

The Up button can be shown or hidden, depending on the current screen.

The \_\_\_ composable is used to respond to the Back button, with or without a NavHost.

BackButton

BackHandler

BackNavigator

BackStack
Which of the following are true about designing for larger screens?
Choose as many answers as you see fit.

Button positioning is more important on larger screen sizes.

Usually no changes are needed to the UI layout to make the app work well for larger screen sizes.

Adding another layout to the same screen removes the need to navigate between screens.

Large screen layouts should avoid placing commonly used buttons in the center of the screen.
A \_\_\_ is a specific measurement of width or height where an app's layout should change.

window class

layout point

size bucket

breakpoint
The compact width window size class generally refers to smaller devices, such as phones in portrait mode.

True

False
The \_\_\_ API makes the implementation of adaptive layouts simpler.

SizeClass

WindowSizeState

SizeBucket

WindowSizeClass
A navigation rail is often appropriate for \_\_\_ width layouts.

compact

standard

medium

expanded
When building apps with adaptive layouts, you should use a single preview for each screen.

True

False
The list-detail layout requires Back navigation on compact screens, but not on screens where both the list and detail screens are shown at once.

True

False
Assume you have a contacts app that displays a list of contacts and has details to show for each contact. What are appropriate ways to adapt the UI to different screen sizes?

Use the list-detail layout to show one pane or two panes side-by-side depending on the available width of the screen.

The list items should take up the full width of the screen, regardless of how narrow or wide the screen is.

The Up button should always be shown within the app and clicking the button should exit the app.

When rotating the device, the selected item in the list (and the corresponding details of that item shown) should be reset to the first item in the list.

It’s required to use the Jetpack Navigation Component to make the UI responsive to different screen sizes.
Tests can be configured to run only test functions with custom annotations by configuring the \_\_\_.

module

package

instrumentation class

instrumentation arguments

With concurrent programming, code might execute in an order different from how it was written.

True

False
Fill-in-the-blanks
Enter one or more words to complete the sentence.
The thread is responsible for displaying the user interface responding to user input.
Which of the following statements are true about coroutine contexts?
Choose as many answers as you see fit.

Dispatchers.Default is the best choice for long running tasks involving reading and writing large amounts of data.

Dispatchers.Main can be used for updating the UI but not for long-running tasks.

A Job controls the lifecycle of a coroutine.

Dispatchers.IO is optimized for network I/O, among other background tasks.
launch() and async() are extension functions of a \_\_\_, which keeps track of any coroutines it creates.

CoroutineScope

Job

Dispatcher

CoroutineContext
Which of the following statements are true about structured concurrency and its best practices?
Choose as many answers as you see fit.

If a coroutine is canceled, child coroutines should also be canceled.

A parent scope can complete before one or more of its children are completed.

A failure should propagate downward without canceling the parent coroutine.

Coroutines must be launched from a coroutine scope.
Which of the following statements are true about web services?
Choose as many answers as you see fit.

GET, POST, and DELETE are all examples of HTTP operations.

A URL is a type of URI but not all URIs are URLs.

RESTful services always provide a formatted XML response.

Retrofit is a third-party library for handling JSON from a web service.
Retrofit is a third-party library that enables your app to make requests to a(n) \_\_\_ web service.

XML

Socket

RESTful

JSON
One recommended way to perform a Retrofit network request is with a coroutine launched in the viewModelScope.

True

False
To enable your app to make connections to the Internet, add the 'android.permission.INTERNET' permission in the \_\_\_ file.

MainActivity

build.gradle

Android manifest

ViewModel
The process of turning a JSON result into usable data, as is done with Gson, is called JSON \_\_\_.

Serialization

Encoding

Converting

Parsing

Which of the following is not a common HTTP operation/method:

GET

POST

DELETE

SET
The response from a REST web service is commonly formatted in one of the common data transfer formats like XML or JSON.

True

False
Which of the following is not true for the Retrofit library:

It is a client library.

It enables your app to make requests to a REST web service.

It converts Kotlin objects to JSON objects.

It is a third-party library.
Which of the following applies to a Singleton pattern:

object declarations are used to declare singleton objects in Kotlin.

Ensures that one, and only one, instance of an object is created

Has one global point of access to that object.

All of the above
Each JSON object contains the following:

A set of key-value pairs separated by a colon.

A set of key-value pairs separated by a comma.

A set of key-value pairs separated by a semi colon.

None of the above
Following Android’s recommended app architecture guidelines, an app should have which of the following:

A UI Layer

A Domain Layer

A Data Layer

A Business Layer
The advantages of using Dependency Injection (DI) in your app include which of the following:
Choose as many answers as you see fit.

Helps with the reusability of code

Makes refactoring easier

Helps with testing

Makes your app run faster
If your app has more than one type of data source, they should all be stored in the same repository for ease of use.

True

False
Which of the following is used to replace the Main dispatcher with a TestDispatcher in a local unit test:

runTest

runBlocking

Distpatchers.resetMain()

Dispatchers.setMain()
The runTest() function can be used to test suspend functions.

True

False

Which of the following statements are true about relational databases and SQLite?
Choose as many answers as you see fit.

Referencing one table's primary key in another table lets you model relationships between tables.

A SQLite database consists of columns, which consist of tables and rows.

Every data table must have at least one foreign key.

Rows contain the individual items in the database.
It is optional to end a SQL statement with a semicolon.

True

False
If you want to calculate the sum of all values for a database column, what do you use?

Aggregate function

WHERE clause

DISTINCT keyword

LIMIT clause
Which SELECT statement returns the number of unique email addresses for messages in the spam folder?

SELECT COUNT(DISTINCT folder) FROM email WHERE spam != sender;

SELECT DISTINCT COUNT(sender) FROM email WHERE folder = 'spam';

SELECT COUNT(DISTINCT sender) FROM email WHERE folder = 'spam';

SELECT DISTINCT COUNT('spam') FROM email WHERE sender = folder;
The SQL statement SELECT \* FROM contacts WHERE name LIKE '%Milton' returns all rows where the value of the name column begins with Milton.

True

False
Which of the following statements are true about GROUP BY and ORDER BY?
Choose as many answers as you see fit.

The ORDER BY clause comes before the GROUP BY clause.

In an ORDER BY clause, ascending order is the default.

If a query contains a GROUP BY clause, it overrides the ORDER BY clause.

ORDER BY and GROUP BY clauses can both accept multiple columns.
The WHERE condition NOT read = false and the WHERE condition read != true are equivalent.

True

False
The LIMIT clause LIMIT 30 SKIP 60 returns:

60 rows

Rows 31 through 60

Rows 61 through 90

90 rows
An UPDATE statement uses a \_\_\_ clause to assign values for columns.

WHERE

SET

ASSIGN

LIKE
UPDATE and DELETE statements can include a WHERE clause and can affect multiple rows.

True

False

Which of the following statements is not true about the @Query annotation?

The @Query annotation is used with a method in the DAO.

The @Query annotation corresponds to a SELECT query.

The @Query annotation can pass arguments into a SQL statement by preceding their name with a colon.

The @Query annotation can only be used with a suspend function.
Which of the following statements are true about the DAO?

DAO functions use annotations like @Insert and @Update that correspond to an operation on the database.

DAO functions can return a flow.

Instances of DAO classes are referenced in the AppDatabase class.

All of the above
The Database class, inheriting from the RoomDatabase class, is responsible for \_\_\_.

Instantiating the database and providing access to the DAO.

Representing individual data tables.

Defining functions that map to SQL statements, such as SELECT queries.

Provides data to the UI.
The purpose of the DAO is to:

Hold reference to the view models and the database.

Define functions that map to SQL statements, such as SELECT, and INSERT queries.

Provide a factory method to create a database instance.

Create a new database instance.
Why do you need to use the synchronized() function when you create the database?
Choose as many answers as you see fit.

It lets you create multiple copies of the database.

It lets you safely access the code from multiple threads at once.

It is used to avoid race conditions.

It ensures only one thread can enter the block of code at once.
You can use the @Insert and @Delete annotations without providing a SQL statement.

True

False
Fill-in-the-blanks
Enter one or more words to complete the sentence.
To handle conflicts when inserting into a database, you can pass a(n) parameter, such as IGNORE, to the @Insert annotation.
Select all the statements that are true about the Database Inspector:
Choose as many answers as you see fit.

It lets you inspect, query, and modify your app's databases while your app is running.

It works with other SQLite libraries that you bundle with your app.

It is especially useful for database debugging.

It works with plain SQLite and with libraries built on top of SQLite, such as Room.
Entities represent individual data tables in the Room database.

True

False
Which of the following statement is not true about the primary key:

You can use the primary key to uniquely identify every record/entry in your database tables.

After you assign the primary key, you cannot modify it.

Room generates an incrementing primary key value for each entity by default.

The primary key represents the entity object as long as it exists in the database.

The implementations of DataStore are:
Choose as many answers as you see fit.

Proto

Preferences

Room

SQLite
The Preferences DataStore uses a predefined schema.

True

False
Which function does DataStore provide to modify the DataStore?

preferencesDataStore()

updatePreferences()

edit()

map()
Preferences DataStore uses keys to access stored values.

True

False
Which exception can occur when you attempt to read from a Preferences DataStore?

IllegalArgumentException

IOException

IllegalStateException

NumberFormatException
