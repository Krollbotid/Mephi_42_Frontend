var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.hello = function () {
        console.log("Hi! My name is ".concat(this.name, ". And I am ").concat(this.age, " years old."));
    };
    return User;
}());
var newUser = new User("Alice", 30);
newUser.hello();
// npx -p typescript tsc lab.ts --watch
