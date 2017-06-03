import Calculator from './calc.js'     ;
import ScientificCalculator from './scalc.js'   
//var Calculator = require('./calc');
//var ScientificCalculator = require('./scalc');
var calc = new ScientificCalculator(30);
calc.add(30);
calc.multiply(50);
console.log(calc.getTotal());
console.log(calc instanceof Calculator);