function IObserver(){
    throw "You can't create an instance of an interface!";
}
IObserver.functionsList = ['update'];
IObserver.conforms = function(implementer){
    let functions = IObserver.functionsList;

    for(let i = 0; i < functions.length; i++) {
        if (typeof implementer[functions[i]] !== 'function')
            throw "This clearly isn't a duck. Implement all the functions please!"
    }
};

exports.IObserver = IObserver;