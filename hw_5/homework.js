//TASK 1
if(Function.prototype.myBind == undefined){
    Function.prototype.myBind = function (context){
        var that = this;
        var args = [].slice.apply(arguments,[1]);
        return function(){
            var newargs = [].slice.apply(arguments);
            return that.apply(context, args.concat(newargs));
        }
    };
}

//TASK 2
var Person = function(obj){
    //debugger;
    for(var key in obj){
        this[key] = obj[key];
    }
};

//TASK 3
var PersonExtended = function(obj){
    var person = new Person(obj);
    for(var key in obj){
        var prop =key.charAt(0).toUpperCase() + key.slice(1);
        if(typeof person[key] != "function"){
            (function(context, key){
                context["get"+prop] = function(){return person[key]};
                context["set"+prop] = function(value){person[key] = value;};

            })(this, key);
        }else{
            this[key] = person[key];
            this['get'+prop] = function(){return undefined;}
        }
    }

};