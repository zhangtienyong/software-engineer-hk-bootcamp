import cls from "./cls";
import { lib } from "./lib";
import { func } from "./func";

/* lib is a name exported object from the module lib.*/
console.log(lib.someObject); /* should print "Hello World"*/
console.log(lib.someFunction()); /* should print "Foobar"*/

/* cls is a function which is exported as the default export of the module Cls*/
console.log(cls()); 

/* func is a function which is exported as the named export of the module func */
console.log(func());