const IObserver = require("../Interfaces/IObserver").IObserver;

function IDObserver(student){
    this.student = student;
    this.update = (student, old) => console.log("Student's ID changed from " + old + " to " + student.ID);

    IObserver.conforms(this); //Duck Type Check
}

exports.IDObserver = IDObserver;