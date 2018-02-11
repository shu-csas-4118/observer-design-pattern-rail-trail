const IObserver = require("../Interfaces/IObserver").IObserver;

function EmailObserver(student){
    this.email = student;
    this.update = (student, old) => console.log("Student's email changed from " + old + " to " + student.email);

    IObserver.conforms(this); //Duck Type Check
}

exports.EmailObserver = EmailObserver;