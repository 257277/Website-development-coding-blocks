let a={p:10,q:"dksjnf",r:true}
let b=Object.create(a)
let c=Object.create(b)

console.log(c.__proto__.__proto__)
console.log(b.isPrototypeOf(a))
console.log(a.isPrototypeOf(b))
console.log(b.__proto__.p++);//chainging the value of p in a
console.log(a);