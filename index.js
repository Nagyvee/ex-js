//OOP self practicing

let users = [{name:'Elon', age: 4}]

class User{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    addUser(){
        users.push({
            name: this.name,
            age: this.age
        })
        console.log(`Added user ${this.name} Aged ${this.age} I'm user`);
    }
}

class Admin extends User{
    constructor(name, age, role){
        super(name,age)
        this.role = role
    }
    addUser(){
        users.push({
            name: this.name,
            age: this.age,
            role: this.role
        })
        console.log(`I'm admin Added user ${this.name} Aged ${this.age} Role of ${this.role}`);
    }
}

const user1 = new User('Nozzi', 24)
const user2 = new User('Prosper', 23)
const admin = new Admin('Nigel', 22, 'admin')

user1.addUser()
user2.addUser()
admin.addUser()

console.log(users);