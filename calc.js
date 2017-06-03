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

//module.exports = Calculator;
export default Calculator;