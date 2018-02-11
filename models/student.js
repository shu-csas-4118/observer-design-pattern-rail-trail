function Student(firstName, lastName, ID, email){
    this._firstName = firstName || "";
    this._lastName = lastName || "";
    this._ID = ID || 0;
    this._email = email || "";
    this._courses = []; //A 'course' will be a string in this definition
    this._observers = { email: [], firstName: [], lastName: [], ID: [], courses: [] }; //Specific Observer Arrays, maybe use hashtable in refactor?
}

Object.defineProperties(Student.prototype, {
    firstName: {
        get: function() {return this._firstName},
        set: function(name) {
            let old = this._firstName;
            this._firstName = name;
            this._notifyObserversOfType('firstName', old);
        }
    },
    lastName: {
        get: function() {return this._lastName},
        //we don't have a lastName observer but it would almost literally be the firstname observer
        set: function(name) {this._lastName = name;}
    },
    ID: {
        get: function() {return this._ID},
        set: function(name) {
            let old = this._ID;
            this._ID = name;
            this._notifyObserversOfType('ID', old);
        }
    },
    email: {
        get: function(){return this._email},
        set: function(email){
            let old = this._email;
            this._email = email;
            this._notifyObserversOfType('email', old);
        }
    },
    observers:{
        get: function(){return this._observers}
    },
    courses:{
        get: function(){return this._courses}
    }
});

Student.prototype.addCourse = function(course){
    if(typeof course === 'string' && course !== ''){
        this._courses.push(course);
        this._notifyObserversOfType('courses', course);
        return this;
    }
    else throw "Invalid Input! Course must be a non-empty string.";
};
Student.prototype.removeCourse = function(course){
  if(typeof course === 'string' && course !== ''){
      //Kind of memory inefficient, but works. I hope JS has garbage collection :)
      this._courses = this._courses.filter(x => x !== course);
      this._notifyObserversOfType('courses', course);
      return this;
  }
  else throw "Invalid Input! Course must be a non-empty string.";
};

Student.prototype._attachObserver = function(observer, type) { this._observers[type].push(observer) ; return this};

//Wrapper functions
//Not needed, but the user shouldn't have to guess what types of observers there are, also no enums in JS.
Student.prototype.addEmailObserver = function(ob){ return this._attachObserver(ob, 'email'); };
Student.prototype.addFirstNameObserver = function(ob){ return this._attachObserver(ob, 'firstName'); };
Student.prototype.addLastNameObserver = function(ob){ return this._attachObserver(ob, 'lastName'); };
Student.prototype.addIDObserver = function(ob){ return this._attachObserver(ob, 'ID'); };
Student.prototype.addCourseObserver = function(ob) { return this._attachObserver(ob, 'courses')};

Student.prototype._notifyObserversOfType =
    function(type, old){this.observers[type].forEach((x) => x.update(this, old)); return this;};

exports.student = Student;