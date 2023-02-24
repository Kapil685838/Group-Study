// Variables - are containers
// there are four ways to declare a variables in JS
/*
    1. var
    2. let
    3. const
    4. nothing it will consider var by default
*/
/* 
   global scope - we can access anywehre through the code
   block scope - {}
*/

/* var keyword */
//console.log(number); // undefined

var integer = 10;
var number; // initialization
number = 4; // declaration or assingment
var string = "string"; // either we will use double inverted commas "" or we can use single inverted comma ''.
var boolean = true;
// let integer;

// we can access var variables globally
var number = 5; // redeclaration allowed also var in JS.

{
    number = 4;
    {
        number = 10;
    }
    var number = 20;
}

console.log("var insideblock = "+ number);

// console.log(number);

/* let keyword */
let letnumber; // intialization
letnumber = 10; // declaration
console.log(letnumber);

let letnumber1 = 20; // initialization and declaration
console.log(letnumber1);

//let letnumber = 40; // let variables not allow us to redeclaration of a variable
// var letnumber;

letnumber = 20; // we can change value of let variable
console.log(letnumber);

{
    letnumber = 40;
    console.log("inside first block" + letnumber);
    {
        letnumber = 50;
        console.log("inside second block" + letnumber);
    }
}
// insidelet = 20;
// console.log(insidelet);
let insidelet; // initialization and declaration
// console.log(insidelet);
// insidelet = 20;
{
    // insidelet = 90;
    let insidelet = 10; // initialization and declaration
    insidelet = 30;
    console.log("inside let block " + insidelet);
}
console.log("outside let block " + insidelet);

console.log("outside block" + letnumber);


/* const keyword variables */
const constvar = 10; // we are bound to that the intialization and declaration part on the same time.
console.log(constvar);
// constvar = 20;
const arr = [19, 20, 30];
console.log(arr);
// arr = [];

//const constvar = 20; // redeclaration not allowed in case of const variable

{
    const constvar = 10;
    console.log("conts variable block " + constvar);
}

// const initialization;
// initialization = 10;