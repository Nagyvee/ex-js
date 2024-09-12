//Cars example

const date = new Date()
const nowYear = date.getFullYear()

class Car{
    constructor(make, year){
        this.make = make;
        this.year = year;
    }
    carDetails(){
        console.log(`This is ${this.make}. Made in the year of ${this.year} and it's ${nowYear - this.year} years old`)
    }
}

class JCars extends Car{
    constructor(name, year, country){
        super(name, year);
        this.country = country;
    }
    carDetails(){
        console.log(`This is ${this.make}. Made in the year of ${this.year} , it's ${nowYear - this.year} years old and was made in ${this.country}.`)
    }
}

const car1 = new Car('BMW', 2022)
const car2 = new Car('Nissan', 2018)

const jCar1 = new JCars('Toyota', 2014, 'Japan')

car1.carDetails();
car2.carDetails();
jCar1.carDetails(); 


//Admin and Users example

//users Array
const users = [
    {
        id: 1,
        name: 'Mnelisi',
        role: 'student'
    },
    {
        id: 2,
        name: 'Gladman',
        role: 'student'
    },
    {
        id: 3,
        name: 'Mamello',
        role: 'student'
    },
    {
        id: 4,
        name: 'Nigel',
        role: 'admin'
    },
]

class User{
    constructor(user_id,username){
        this.user_id = user_id;
        this.username = username;
    }

    //users can change their names
    changeMyName(){
        const userIndex = users.findIndex((user) => user.id === this.user_id );
        if(userIndex < 0) return console.log("user doesn't exist")
        const selectedUser = users[userIndex]
        const finalUser = {...selectedUser, name: this.username}
        users.splice(userIndex, 1);
        users.push(finalUser)
    }
}


class AdminUser extends User{
    constructor(user_id,username,changeId,changeName){
        super(user_id,username);
        this.changeId = changeId;
        this.changeName = changeName;
    }
    
    //admin can change other user's names
    changeOtherUser(){
        //check if user is Admin
        const userPerforming = users.find((item) => item.id === this.user_id);
        if(!userPerforming) return console.log("user doesn't exist");
        if(userPerforming.role !== 'admin'){
            return console.log(`Hybo ${userPerforming.name} Only Nigel admin can perform this`);
       }
       //
        const userIndex = users.findIndex((user) => user.id === this.changeId );
        if(userIndex < 0) return console.log("user doesn't exist")
        const selectedUser = users[userIndex]
        const finalUser = {...selectedUser, name: this.changeName}
        //delete previous user
        users.splice(userIndex, 1);
        //add updated user
        users.push(finalUser)
    }
}

const user1 = new User(3, 'Mellow'); 
const admin1 = new AdminUser(4, 'Nayvee', 2 , 'Gman Sibs')
const admin2 = new AdminUser(3, 'Mellow', 1 , 'Melusi')
console.log('current users', users);
user1.changeMyName() //Mamello change her name
admin1.changeMyName(); //Nigel change his name
admin2.changeOtherUser(); //Mamellow trying to change Mnelis's name
admin1.changeOtherUser(); // Nigel change Gladman's name
console.log('updated user', users);  