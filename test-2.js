const phones = [
  {
    name: "iphone 8",
    price: 100,
  },
  {
    name: "iphone 10",
    price: 200,
  },
  {
    name: "iphone 13",
    price: 300,
  },
  {
    name: "iphone 14",
    price: 400,
  },
];

class Phone {
    constructor(name,price){
        this.name = name;
        this.price = price
    };
    addPhone(){
        phones.push({
            name: this.name,
            price: this.price
        })
    };
    getPhone(){
        return phones.find((item) => item.name === this.name);
    };
};

class Android extends Phone {
    constructor(name,price,type){
        super(name,price);
        this.type = type;
    }
    addPhone(){
        phones.push({
            name: this.name,
            price: this.price,
            type: this?.type?? 'android'
        })
    }
}

class User{
    #password = '12341234'
    constructor(name,age, password){
        this.name = name
        this.age = age
        this.password = password
    }
    changePassword(){
        this.#password = this.password
        return this.#password
    }
}

const user = new User('Nigel',22, 'Nigel1234')
console.log('new password: ', user.changePassword());


