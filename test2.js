import Calculator from './calc.js'     ;
import ScientificCalculator from './scalc.js'   
import * as obj from './mod1.js';
//var Calculator = require('./calc');
//var ScientificCalculator = require('./scalc');
var calc = new ScientificCalculator(30);
calc.add(30);
calc.multiply(50);
console.log(calc.getTotal());
console.log(calc instanceof Calculator);

obj.myFunc1();
obj.myFunc2();
obj.myFunc3();