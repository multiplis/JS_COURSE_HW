/**
 * Created by Eugene on 21.12.13.
 */
/*
 Задача №1
 Раньше в JavaScript'e очень не хватало биндинга событий\функций. Начиная с Javascript 1.8.5(IE9, FF4, Chrome7, Opera 11.6)
 появилась нативная реализация. Раньше же приходилось писать собственную реализацию биндинга или использовать существующие
 решения.
 Напишите реализацию функции bind, которая позволяет выполнять функцию в передаваемом контексте выполнения и аргументами.
 Подсказка: Обратите внимание на методы apply/call нативного JavaScript.
 Пример:
 var App = function(){
 return {
 init: function() {
 this.nodes = document.querySelectorAll('.node');
 this.setListeners();
 },

 setListeners: function() {
 [].slice.call(this.nodes).forEach(function(n){
 n.onclick = this.onClick.myBind(this);
 }, this);
 },

 onClick: function(e) {
 e = e || window.event;
 var node = e.target || e.srcElement;
 // this - should be the main context - instance of App
 // node - should be the node, that fires event
 }
 };
 };
 (new App()).init();
 Задача №2
 Напишите реализацию конструктора, принимающего на вход объект и создающего аттрибуты\методы по ключам этого объекта:

 var Person = function(args){
 // put your code here
 };

 var p = new Person({
 name: "Jack",
 age: "10",
 jump: function(){ return "My name is " + this.name + " and I can jump.";}
 });
 p.name // "Jack"
 p.age // 10
 console.log(p.jump()) // "My name is Jack and I can jump."

 Задача №3
 Модифицируйте конструктор из прошлой задачи, добавив к нему геттеры\сеттеры для каждого переданного свойства.

 var p = new Person({
 name: "Jack",
 age: "10"
 });
 p.getName() // "Jack"
 p.name // undefined
 p.getAge() // 10
 p.age // undefined

 var p = new Person({
 a: {b: "c"}
 });

 p.getA()// {b: "c"}
 p.setA('anything else')

 console.log(p.jump()) // "My name is Jack and I can jump."
 console.log(p.getJump) // undefined
 */

describe('Task#1 - myBind', function () {
    var context, func;
    beforeEach(function () {
        context = {name : 'moe'};
        func = function(arg) { return "name: " + (this.name || arg); };
    });

    it('should be defined', function(){
        expect(func.myBind).toBeDefined();
    })

    // delete x to run spec
    it('should be able to bind a function to a context', function(){
        var bound = func.myBind(context)
        expect(bound()).toEqual('name: moe')
    })

    it('should partially apply function in advance', function(){
        var bound, localFunc;
        localFunc = function(salutation, name) { return salutation + ': ' + name; };
        bound = localFunc.myBind(this, 'hello')
        expect(bound('moe')).toEqual('hello: moe')
    })

    it('should completely apply function in advance', function(){
        var bound = func.myBind(this, 'curly')
        expect(bound()).toEqual('name: curly')
    })
})
// delete x to run suite
describe('Task#2 - Person', function () {
    it('shold be defined', function(){
        expect(Person).toBeDefined();
    })

    it('should instantiate object with given properties', function(){
        expect((new Person({a: 1})).a).toEqual(1)
    });

    it('should instantiate object with given properties, take#2', function(){
        var p = new Person({
            name: "Jack",
            age: 10,
            jump: function(){ return "My name is " + this.name + " and I can jump.";}
        });
        expect(p.name).toEqual('Jack'); // "Jack"
        expect(p.age).toEqual(10);
        expect(p.jump()).toEqual("My name is Jack and I can jump.");
    })


});

describe('Task#3 - PersonExtended', function () {
    it('shold be defined', function(){
        expect(PersonExtended).toBeDefined();
    })

    it('should have custom getters and setters for all properites', function(){
        var p = new PersonExtended({
            a: {b: "c"}
        });

        expect(p.getA()).toEqual({b: "c"}) // {b: "c"}
        expect(p.setA.bind(null, 2)).not.toThrow()
        p.setA('anything else')
        expect(p.getA()).toEqual('anything else')
    })


    it('should not have custom getters for functions', function(){
        var a = {
            name: "Jack",
            age: "10",
            jump: function(){return 'jumpy'}
        }
        var p = new PersonExtended(a);

        expect(p.getName()).toEqual('Jack'); // "Jack"
        expect(p.age).toBeUndefined();
        p.setAge(12)
        expect(p.getAge()).toEqual(12);
        //expect(p.jump()).toEqual('jumpy');
        expect(p.getJump()).toBeUndefined();
        expect(a.age).toEqual("10")
    })

})
