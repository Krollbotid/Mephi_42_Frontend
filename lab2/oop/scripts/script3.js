class User {
    constructor(name, age, tel) {
        this.name = name;
        this.age = age;
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

    hello = function() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old. My phone number is ${this._tel}`);
    };
}

const user1 = new User('Alice', 25, '+71234567890');
console.log(user1.getTel());
user1.setTel('12345');
user1.hello();
  