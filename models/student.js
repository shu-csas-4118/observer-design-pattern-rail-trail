function Student(firstName, lastName, ID, email){
    this._firstName = firstName || "";
    this._lastName = lastName || "";
    this._ID = ID || 0;
    this._email = email || "";
    this._observers = [];
}

Object.defineProperties(Student.prototype, {
    firstName: {
        get: function() {return this._firstName},
        set: function(name) {this._firstName = name; return this}
    },
    lastName: {
        get: function() {return this._lastName},
        set: function(name) {this._lastName = name; return this}
    },
    ID: {
        get: function() {return this._ID},
        set: function(name) {this._ID = name; return this}
    },
    email: {
        get: function(){return this._email},
        set: function(email){this._email = email; return this}
    },
    observers:{
        get: function(){return this._observers}
    }
});

Student.prototype.attachObserver = function(observer){
  this._observers.push(observer);
};

Student.prototype.notifyAllObservers = function(){
    this._observers.forEach((x) => x.update(this));
};

exports.student = Student;