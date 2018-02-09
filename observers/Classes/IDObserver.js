const IObserver = require("../Interfaces/IObserver").IObserver;

function IDObserver(student){
    this.student = student;
    this.update = (student) => console.log("Student's ID is: " + student.ID);

    IObserver.conforms(this);
}

exports.IDObserver = IDObserver;