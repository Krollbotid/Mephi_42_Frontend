class User {
    #age;
    constructor(name) {
        this.name = name;
        this._tel = null;
    }

    get tel() {
        return this._tel;
    }

    set tel(value) {
        if (/^\+7\d{10}$/.test(value)) {
            this._tel = value;
        } else {
            console.log("Некорректный формат телефона. Телефон должен быть в формате +7xxxxxxxxxx");
            throw Error("wrong format")
        }
    }

    get age() {
        return this.#age
    }
    
    set age(newAge) {
        if (isNaN(newAge) === false && newAge >= 1 && newAge <= 100 && Number.isInteger(newAge) === true) {
            this.#age = newAge;
        } else {
            console.log("Возраст должен быть целым числом от 1 до 100.");
        }
    };

    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.#age} years old. My phone number is ${this._tel}`);
    };

}

class Student extends User {
    #knowledge = 0;
    constructor(name) {
        super(name);
    }

    learn() {
        this.#knowledge++;
    }

    get knowledge() {
        return this.#knowledge;
    }

    hello() {
        console.log(`Hi! My name is ${this.name}. I am ${this.age} years old. And I am a student!`);
    }

}


let student1 = new Student('Bob');
console.log(student1)
student1.tel = '+71234567890'
student1.age = 20
student1.learn()
student1.hello()
console.log(student1)
