import { DioAccount } from "./DioAccount";
import { PeopleAccount } from "./PeopleAccount";

export class CompanyAccount extends DioAccount {
    constructor (name: string , accountNumber : number){
        super(name, accountNumber)
    }

    getLoan = () =>{
        console.log('vc pegou emprestimo')
    }


    deposit = () =>{
        console.log('A empresa depoistou')
    }
}
