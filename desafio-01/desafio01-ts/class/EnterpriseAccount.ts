import { DioAccount } from "./DioAccount"

export class EnterpriseAccount extends DioAccount {
  doc_id: number

  private balanceEnterprise : number =  10 ;


  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }

  balancePlus = (): void =>{
    this.SetBalancePlus(100 + this.balanceEnterprise)
    this.getBalancePlus()
  }

  SetBalancePlus = (balanceEnterprise: number): number =>{
    this.balanceEnterprise = balanceEnterprise

    console.log('teste',this.balanceEnterprise)

    return this.balanceEnterprise

  }

  getBalancePlus = (): number =>{
    console.log('Valor de conta é ', this.balanceEnterprise)

    return this.balanceEnterprise
  }


}