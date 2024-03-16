class User {
    #age;
    constructor(name, age, tel) {
        this.name = name;
        this._tel = tel; // защищенное поле
    }

    getTel = function() {
        return this._tel;
    };

    setTel = function(newTel) {
        const telRegex = /^\+7\d{10}$/; // регулярное выражение для проверки формата телефона
        if (telRegex.test(newTel)) {
            _tel = newTel;
        } else {
            console.log("Некорректный формат телефона. Используйте формат +7xxxxxxxxxx");
        }
    };

    getAge = function() {
        return this.#age;
    };
    
    setAge = function(newAge) {
        if (Number.isInteger(newAge) && newAge >= 1 && newAge <= 100) {
            this.#age = newAge;
        } else {
            console.log("Возраст должен быть целым числом от 1 до 100.");
        }
    };

    hello () {
        console.log(`Hi! My name is ${this.name}. And I am  years old. My phone number is ${this._tel}`);
    };
}

class Student extends User {
    #knowledge = 0;
    constructor(name, age, tel) {
        super(name, age, tel);
    }

    learn() {
        this.#knowledge++;
    }

    getKnowledge = function() {
        return this.#knowledge;
    }

    hello() {
        console.log(`Hi! My name is ${this.name}. I am ${this.age} years old. And I am a student!`);
    }

}


const student1 = new Student('Bob', 20, '+71234567890');
console.log(student1)
student1.__proto__.__proto__.hello()
