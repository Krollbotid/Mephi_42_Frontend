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
        if (isNaN(age) === false && newAge >= 1 && newAge <= 100 && Number.isInteger(age) === true) {
            this.#age = newAge;
        } else {
            console.log("Возраст должен быть целым числом от 1 до 100.");
        }
    };

    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.#age} years old. My phone number is ${this._tel}`);
    };

}

let user1 = new User('Alice');
console.log(user1.age);
user1.age = 30;
console.log(user1.age);
user1.age = 150;
user1.hello();
  