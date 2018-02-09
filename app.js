const path = require('path');
const Student = require(path.join(__dirname, "models", "student")).student;
const FNObserver = require(path.join(__dirname, "observers", "classes", "FirstNameObserver")).FirstNameObserver;
const IDObserver = require(path.join(__dirname, "observers", "classes", "IDObserver")).IDObserver;

let adriano = new Student("Adriano", "Soares", "11215853", "a@shu.edu");
let b = new Student("G", "X", 0, [3, 2]);

const fn = new FNObserver(), id = new IDObserver();

adriano.attachObserver(fn);
adriano.attachObserver(id);

adriano.notifyAllObservers();