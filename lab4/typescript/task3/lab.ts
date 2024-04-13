type UserType = {
    name: string;
    age: number;
    hello(): void;
};

class User implements UserType {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    hello(): void {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}


const newUser = new User("Alice", 30);
newUser.hello();

// npx -p typescript tsc lab.ts --watch