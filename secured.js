class BankAcc{
    static #balance = 100
    constructor(name,surname,amnt){
        this.name = name;
        this.surname = surname;
        this.amnt = amnt
    }
    addBalance(){
        BankAcc.#balance += this.amnt;
        console.log(`${this.name} ${this.surname} adds ${this.amnt} to his acc`)
        console.log('New Balance after adding: ', BankAcc.#balance);
    }
    subBalance(){
        BankAcc.#balance -= this.amnt;
        console.log(`${this.name} ${this.surname} deduct ${this.amnt} from his acc`)
        console.log('New Balance after subtracting: ', BankAcc.#balance);
    }
}

action1 = new BankAcc('Aeden', 'Manell', 50);
action2 = new BankAcc('Aeden', 'Manell', 15);

action1.addBalance();
action2.subBalance();
console.log('User name', action1.surname);