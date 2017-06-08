import View from './views/view.js';

(function () {
    var elements = {
        addButton: document.querySelector('#addButton'),
        countryList: document.querySelector('#countryList'),
    }
    new View(elements).init();
})();
