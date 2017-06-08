import Model from '../model/model.js'

export default class Controller {
    
    constructor(model) {
        this.model = model;
    }

    add(newCountry) {
        console.log('newCountry :', newCountry);
        console.log('this.model :', this.model);
        this.model.add(newCountry);
    }
    
}
