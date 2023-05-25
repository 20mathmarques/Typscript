import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  private loan: number = 0;
  private newBalance: number = 0

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

 
  Loan = ():void => {
    if(this.validateStatus()){
      this.setLoan(30)
    }else{
      console.log('Status invalido')
    }
  }

  setLoan = (loan: number): void => {
    this.loan = loan;
    this.getLoan()
  };

  getLoan = (): void => {
    console.log("Voce pegou um empréstimo no valor de R$:", this.loan);

    this.setBalance(this.newBalance, this.loan)
  };

  setBalance = (balance: number, loand: number): void =>{
    this.newBalance = balance + loand

    console.log('Empréstimo adc em conta !')

    this.getBalance
  }


  
  public getBalance = (): number=> {

    console.log("Conta com emprestimo", this.newBalance)

    return this.newBalance

  };

}
