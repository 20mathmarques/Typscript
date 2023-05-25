import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { DioAccount } from './class/DioAccount'
import {EnterpriseAccount} from './class/EnterpriseAccount'



const dioAccount : DioAccount = new DioAccount('Pessoa Fisica',1)

//Depósito

dioAccount.deposit()

//Saque

dioAccount.withdraw()
dioAccount.getBalance()

// Emprestimo
 const companyAccount: CompanyAccount = new CompanyAccount('DIO', 30)
companyAccount.Loan()


// Conta Juridica

const enterpriseAccount: EnterpriseAccount = new EnterpriseAccount(2, 'Matheus', 20)

enterpriseAccount.balancePlus()