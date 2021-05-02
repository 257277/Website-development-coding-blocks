function person(name,age)
{
    this.name=name;
    this.age=age;
    return 10;
}

let p=new person("Rahul",23);
console.log(JSON.stringify(p));
console.log(p.name)