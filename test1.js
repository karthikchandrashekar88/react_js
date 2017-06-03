//javascript

// var myFunc= function(){
//console.log(new Date());
//  name="Myname";
//}
//myFunc();
//
//console.log(name);

//prototype

// new ES2015 code
class Calculator {
    constructor(val){
        this.total = val;
    };
    
    add(val){
        return this.total+=val;
    };
    
     multiply(val){
        return this.total*=val;
    };
    
    getTotal(){
        return this.total;
    };
};

class ScientificCalculator extends Calculator{
    constructor(val){
        super(val);
    }
}

ScientificCalculator.prototype = Object.create(Calculator.prototype);
var calc = new ScientificCalculator(30);
calc.add(30);
calc.multiply(50);
console.log(calc.getTotal());
console.log(calc instanceof Calculator);