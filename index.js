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