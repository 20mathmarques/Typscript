export abstract class DioAccount {
    name: String;
    accountNumber: number;
    balance: number = 0;
  
    constructor(name: String, accountNumber: number) {
      this.name = name;
      this.accountNumber = accountNumber;
    }
  
    deposit = () => {
      console.log("vc depositou");
    };
  
    withdraw = () => {
      console.log("vc sacou");
    };
  
    getBalance = () => {
      console.log(this.balance);
    };
  }