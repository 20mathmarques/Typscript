export class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;
  private valueDeposit: number = 0;
  private valueWithdraw: number = 0;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // setName = (name: string): void => {
  //   this.name = name;
  //   console.log("Nome alterado com sucesso!");
  // };

  getName = (): string => {
    return this.name;
  };

  //Deposito

  setValueDeposit = (valueDeposit: number): void => {
    this.valueDeposit = valueDeposit;

    console.log("Depositado com sucesso");
  };

  getDepoist = (): number => {
    console.log("Valor depositado", this.valueDeposit);

    return this.valueDeposit;
  };

  deposit = (): void => {
    if (this.validateStatus()) {
      console.log("Valor de conta R$:", this.balance);

      this.setValueDeposit(20);

      this.getDepoist();

      this.balance = this.valueDeposit + this.balance;

      console.log("Seu valor de conta depois de depositado é:", this.balance);
    }
  };

  //Saque

  withdraw = (): void => {
    if (this.validateStatus()) {
      this.setWithdraw(10);

     

     
    } else {
      console.log("Conta Invalida !");
    }
  };

  setWithdraw = (valueWithdraw: number): void => {
    if (valueWithdraw > this.balance) {
      console.log("Oops, valor declarado é maior que a conta !");
    }else{

    this.getWithdraw();

    this.valueWithdraw = valueWithdraw;

    this.balance = this.balance - this.valueWithdraw;

    console.log("Seu valor de conta depois de sacado é :", this.balance);

    console.log('Valor sacado com sucesso !')
  }
  };

  getWithdraw = (): number => {

    return this.valueWithdraw;
  };

  public getBalance = (): number=> {


    return this.balance

  };

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
