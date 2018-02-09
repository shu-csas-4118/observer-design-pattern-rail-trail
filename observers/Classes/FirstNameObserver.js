const IObserver = require("../Interfaces/IObserver").IObserver;

function FirstNameObserver(student){
    this.student = student;
    this.update = (student) => console.log("Student's first name is: " + student.firstName);

    IObserver.conforms(this);
}

exports.FirstNameObserver = FirstNameObserver;