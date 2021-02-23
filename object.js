const obj = { a: 1, b: 2, c: 3 };

//  console.log(obj.a);
//  console.log(obj.b);
//  console.log(obj.c);

//  delete obj.b;


// destructuring

let result = {}

for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
    if(obj[key] % 2 !== 0) {
        result = {...result, [key]: obj[key]}
    }
}

console.log(result);

const c = 4

// alias
const { c:cc , ...rest } = obj;

console.log(c)
console.log(cc)
console.log(rest)


//  console.log(obj)
//  console.log(obj);

 // mutable
// obj.b = 4;

// immutable
// spread operator
// const obj1 = { ...obj, b: 4, f: 5, g: 10 };

// console.log(obj1);


// console.log(obj);

 





