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

    hello = function() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.#age} years old. My phone number is ${this._tel}`);
    };

}

const user1 = new User('Alice', 25, '+71234567890');
console.log(user1.getAge());
user1.setAge(30);
console.log(user1.getAge());
user1.setAge(150);
user1.hello();
  