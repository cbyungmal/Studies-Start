/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// Datatypes
datatypes are used within type systems, which offers various ways of defining, implementing, and using them.
//Numbers
any numerical value: positive, negative, or with decimal points
// Number example
var mynumber = 5; // regular Number
// Strings
a collection of charcaters/symbols surrounded by quotes
// String example
var myvar; // declaring a variables
// Booleans
A true or false value
// Boolean example
var myBool = true
// Array
an array literal is a complex datatype that is used to store multiple datatypes
// Array examples
[] // this is an array literal
// Function
a reusuable code that is used to perform a single related action
// Function examples
() // this is a funcion
// Undefined
anything that lacks a description or is not decalred is considered undefined
// Undefined examples
error or "no value"
// NaN
means not a number, meaning undefined
// NaN examples
20 * 'horse'
// Infinity and -infnity
positive infinity is the rightmost  point on the number line a negative infinty is the leftmost
// Difference between primative and complex data types
primitative is predefined and complex is made by the programmer and is defined.

// Operators
// Assignment operators
store a value in the object specified by the left operand
// Assignment operators example
a = 10; b = 20; ch = 'y'
// Arithmetic operators
addition, subtraction, multiplication, and division
// Arithemetic operators example
x+y 
// Comparision operators
operators that compare values and return true or false 
// Comparison operator example 
<,>,<=,>=,===,!== 
// Logical Operators
a symbol or words used to connect two expressions
// Logical Operators examples
(A && B) is false

// With operators (+)
indicates a outer join
// With string methods (split, join, reverse)
split: breaks the string into an array of strings 
// With string methods (split, join, reverse)
name = string.split('Jamar')

// Control flow
// If
using the keyword if to check for a specific condition 
// If examples
if (/* some conditions here */) {
  // run some code here if condition true console.log('!');
}
// Else If
using the keyword else if to check for a specific condition but only if the previos statement is false
// Else if examples
else if (/* another condition */)
// Else
an alternative statement that is executed if the result of a previous test condition evaluates to false

// Loops
// Explain while and for Loops
used to repeat a specific block of code an unknown number of times until a condition is met 
// Explain while and for Loops example
i <=5
// Be able to loop any number of times forward counting up to some limit backwarding counting down to 0
Loop over an array forwrds and backwards
Loop over an object forwards and backwards (car = Object.car(myObject); )

// Functions
// The two phases to using functions: First we must __? Next we can execute (or two other words for executing a function?) a Function by ?  
A function is block of statements that performs a specific task. You will need to perform the same task in the function more than once which meaans you use the same set of statements every time you want to perform a task
// What's the difference between a function's parameters and arguments PASSED to a function?
A parameter is the variable listed inside the parentheses in the function definition
An argument is the vaalue that is sent to the function when it is called 
// What's the syntax for named location?
When one piece of code invokes or calls a function, it is done by the following syntax: variable = function_name (args, ...);
// How do we assign a function to a varible?
Simply assign a function to the desired variable but without () just with the name of the function 
// Functions can optionally take inputs, and optionally return a single value. How do we specify inputs, and how do we specify outputs?
Inputs are the signals or data recieved by the system and outputs are the signals or data sent from it