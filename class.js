
// let a = 5;

class Animal {
    // variable
    a = 10;
    constructor(name) {
        console.log(name);
        this.name = name;
    }

    set name(value) {
        this._name = value.toUpperCase()
    }

    get name() {
        return this._name;
    }

    // method -> function
    printName(name) {
        
        console.log(this.a);
        // setTimeout(() => {
        //     console.log(this.a);
        // }, 100)
        return this.name;        
    }

    static b = 15

    static hello() {
        return 'hello';
    }
}

console.log(Animal.hello());
console.log(Animal.b);

class Dog extends Animal {
    constructor() {
        super('dog')
    }

    printName() {
        return super.printName()
    }
}

const dog = new Dog()

console.log(dog.printName());


// instance of animal class
const a = new Animal('dog');
const c = new Animal('cat');
console.log(a.printName());
console.log(c.printName());

