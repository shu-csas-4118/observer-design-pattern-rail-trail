const IObserver = require("../Interfaces/IObserver").IObserver;

function FirstNameObserver(student){
    this.student = student;
    this.update = (student, old) => console.log("Student's first name changed from " + old + " to " + student.firstName);

    IObserver.conforms(this); //Duck Type Check
}

exports.FirstNameObserver = FirstNameObserver;