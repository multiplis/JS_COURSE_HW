/*******first task*******/

var o = {a: {b: 'c'}};

function getObject(path, object){
    path = path.split('.');
    for(var i= 0; i <path.length ; i++){
        object = object[path[i]];
    }
    return object;
}

console.log(getObject('a.b', o)); // ‘c’
console.log(getObject('a', o));// {b: ‘c’}
console.log(getObject('d', o));//undefined


/*******second task*******/

var a = {b: 'c', d: {e: 'f'}},
b = deepCopy(a);

function deepCopy(obj){
   var temp = {};
   for(var i in obj){
       temp[i] = obj[i];
   }
   return temp;
}
a.b = 12;
console.log(b.b);
a.d = 12;
console.log(b.d);


/***** third task ************/
var people = [
    {id: 1, name: 'Brad', friends: [2,5,6]},
    {id: 2, name: 'John', friends: [1, 3]},
    {id: 3, name: 'Tom', friends: [2, 5]},
    {id: 4, name: 'Fil', friends: null},
    {id: 5, name: 'John', friends: [1, 3]},
    {id: 6, name: 'Jim', friends: [1]}
];

var getFriends = function(userId) {
    var friendsArray = null;
    for(var i=0; i< people.length; i++){
        if (people[i].id === userId){
            friendsArray =[];
            if(people[i].friends){
                for(var j = 0; j <people[i].friends.length; j++){
                    friendsArray.push(people[people[i].friends[j]-1]);
                }
            }else{
                return friendsArray;
            }
        }
    }
    return friendsArray;
};

console.log(getFriends(2));
console.log(getFriends(4));
console.log(getFriends(100500));