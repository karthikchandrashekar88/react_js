import Controller from '../controller/Controller.js';
import Model from '../model/model.js';
export default class View {
    constructor(elements) {
        this.elements = elements;
        this.model = new Model('India', 'Russia');
        this.controller = new Controller(this.model);
    }
    init() {
        console.log('this.elements :', this.elements);
        this.model.observer.register((data) => {
            this.render(data);
        })
        this.elements.addButton.addEventListener('click', () => {
            var newCountry = prompt('Enter New Country');
            if (newCountry) {
                this.controller.add(newCountry);
            }
        })
    }
    render(newData) {
        let select = this.elements.countryList;
        select.innerHTML = "";
        console.log('country :', this.model.countries);
        for (let val of this.model.countries) {
            var option = document.createElement('option');
            var text = document.createTextNode(val);
            option.appendChild(text);
            select.appendChild(option);
        }
    }
}
