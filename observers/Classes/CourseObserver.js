const IObserver = require("../Interfaces/IObserver").IObserver;

function CourseObserver(student){
    this._student = student;
    this.update = function(student, old){
        console.log("Course '" + old + "' changed in " + student.firstName + "'s course list. " +
            "\nThe current course list is as follows: ");
        student.courses.forEach((x, index) => console.log(index + ". " + x));
        console.log("------");
    };

    IObserver.conforms(this); //Duck Type Check
}

exports.CourseObserver = CourseObserver;