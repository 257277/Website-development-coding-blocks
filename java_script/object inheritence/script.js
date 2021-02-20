let obj1={
    a:10,
    b:20,
    c:30
};

let obj2=Object.create(obj1);///it is called prototype inheritence or object to object inherihence
obj2.p="adg";
obj2.q='mfksdn';
obj2.r='fdik';

let obj3=Object.create(obj2);

/*
steps:->
1: obj2.a-> it will try to find a in obj2
2: if not found it will try to find it in obj2.__proto__
3: if not found it will try to find it in obj2.__proto__.__proto__
4: and so on till .__proto__ become null

*/