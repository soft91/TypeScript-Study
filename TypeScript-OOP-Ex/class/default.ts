class Account {
    balance: number;

    get getBlance(){
        return this.balance;
    }

    set setBalance(amount: number){
        this.balance += amount;
    }

    deposite(depositeAmount: number){
        this.setBalance = depositeAmount;
    }

    constructor(defaultBalance: number = 0, protected bankName: string = "happy bank", readonly interestRate: number = 0.1){
        this.balance = defaultBalance;
    }

    getInterestRate(){
        return this.interestRate;
    }
}

class MyAccount extends Account {
    constructor(){
        super();
        this.deposite(1000);
        this.setBalance = 1000;
        console.log(`2번 적금 : ${this.balance}원, ${this.getBlance}원, / 이율 : ${this.interestRate}, ${this.getInterestRate()}% / 은행명 : ${this.bankName}`);
    }
}

let account = new Account();
console.log(`1번 적금 : ${account.balance}원, ${account.getBlance}원, / 이율 : ${account.interestRate}, ${account.getInterestRate()}%`);

let myAccount = new MyAccount();
