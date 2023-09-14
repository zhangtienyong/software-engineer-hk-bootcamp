"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cls_1 = require("./cls");
var lib_1 = require("./lib");
var func_1 = require("./func");
/* lib is a name exported object from the module lib.*/
console.log(lib_1.lib.someObject); /* should print "Hello World"*/
console.log(lib_1.lib.someFunction()); /* should print "Foobar"*/
/* cls is a function which is exported as the default export of the module Cls*/
console.log((0, cls_1.default)());
/* func is a function which is exported as the named export of the module func */
console.log((0, func_1.func)());
