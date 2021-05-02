function person(name,age)
{
    this.name=name
    this.age=age
    this.isAdult=function(){
        return this.age>=18;
    }
}

let p=new person('Harry Potter',15)
let p2=new person('John Doe',30)

console.log(p.isAdult())
console.log(p2.isAdult())
console.log(p.isAdult==p2.isAdult)
person.prototype.city='Delhi'
console.log(person)
console.log(p.city)