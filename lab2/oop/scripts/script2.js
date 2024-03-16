function User(name, age) {
    this.name = name;
    this.age = age;
  
    this.hello = function() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}


function Student(name, age) {
    User.call(this, name, age)
}
Student.prototype = Object.create(User.prototype)
let user1 = new User('Alice', 25);
user1.hello();
  