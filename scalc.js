import Calculator from './calc';
//var Calculator = require('./calc');
var ScientificCalculator = class ScientificCalculator extends Calculator{
    constructor(val){
        super(val);
    }
}

//module.exports = ScientificCalculator;
export default ScientificCalculator;