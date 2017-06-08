export default class Observer {
    constructor() {
        //list of observers
        this.observers = [];
    }
    register(cb) {
        console.log('registered cb :', cb);
        this.observers.push(cb)
        console.log('this.observers 1:', this.observers);
    }
    notify(data) {
        debugger;
        console.log('data notify :', data);
        console.log('this.observers 2:', this.observers);
        for (let observer of this.observers) {
            console.log('callback :', observer);
            observer(data);
        }
    }
}
