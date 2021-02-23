class person
{
constructor(name,age){
    this.name=name;
    this.age=age;
     }
     isAdult()   /// it is function here we can not write function syntax
     {
         return this.age>=18; /// this is dynamic here 
     }
}

let p=new person("rahul",22);  /// here we are not allowed to call class without new keyword

console.log(typeof person) //output:function; there is no new datatype callsed 'class'

console.log(p.__proto__==person.prototype);//true
console.log(p.__proto__.__proto__==Object.prototype);//true

class student extends person
{
    constructor (name,age,grade)
    {
        super(name,age);  /// here we have to use super befor this keyword in constructor
        this.grade=grade;
    }
}

let s1 =new student('visha sharma', 10);
let s2 = new student ("Ronak",10,20);

console.log(s1.__proto__==student.prototype);
console.log(s1.__proto__.__proto__==person.prototype);
console.log(s1.__proto__.__proto__.__proto__==Object.prototype);

/*inheritance chain:->
object.prototype -> person.prototype -> student.prototype

No inheritance between the classes (actually they are functions)
Object -x-> Person -x-> Student
*/