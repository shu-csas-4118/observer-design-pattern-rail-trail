//Imports
const path = require('path');
const Student = require(path.join(__dirname, "models", "student")).student;
const FNObserver = require(path.join(__dirname, "observers", "classes", "FirstNameObserver")).FirstNameObserver;
const IDObserver = require(path.join(__dirname, "observers", "classes", "IDObserver")).IDObserver;
const EmailObserver = require(path.join(__dirname, "observers", "classes", "EmailObserver")).EmailObserver;
const CourseObserver = require(path.join(__dirname, "observers", "classes", "CourseObserver")).CourseObserver;

//Create a Student
let adriano = new Student("Adriano", "Soares", "11215853", "a@shu.edu");

adriano
    //Add Observers
    .addFirstNameObserver(new FNObserver())
    .addIDObserver(new IDObserver())
    .addEmailObserver(new EmailObserver())
    .addCourseObserver(new CourseObserver())
    //Add Courses
    .addCourse("Software")
    .addCourse("Engineering")
    .addCourse("English")
    //Remove a Course
    .removeCourse("English");

//Change the properties
adriano.firstName = "Onairda";
adriano.ID = "35851211";
adriano.email = "adriano.soares@student.shu.edu";