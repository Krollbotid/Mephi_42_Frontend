class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
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

    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old. My phone number is ${this._tel}`);
    };
}

const user1 = new User('Alice', '+71234567890');
console.log(user1.tel);
user1.tel = '12345'
console.log(user1.tel);
user1.hello();
  