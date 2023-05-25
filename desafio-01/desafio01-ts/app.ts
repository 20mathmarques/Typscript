import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { DioAccount } from './class/DioAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(2, 'Matheus', 20)
// console.log(peopleAccount)
// peopleAccount.deposit()
// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 30)
// companyAccount.deposit()
// console.log(companyAccount)

const dioAccount : DioAccount = new DioAccount('Pessoa Fisica',1)

//Depósito

dioAccount.deposit()

//Saque

dioAccount.withdraw()
dioAccount.getBalance()

// Emprestimo
 const companyAccount: CompanyAccount = new CompanyAccount('DIO', 30)
companyAccount.deposit()

