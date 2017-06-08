//ES2015
import Observer from '../observer/Observer.js'
export default class Model {
    constructor(...countries) {
        this.countries = countries;
        this.observer = new Observer();
        
    }
    add(newCountry) {
        console.log('newCountry :',newCountry);
        this.countries.push(newCountry);
         console.log('newCountry :',this.countries);
        this.observer.notify(newCountry);
    }
}
