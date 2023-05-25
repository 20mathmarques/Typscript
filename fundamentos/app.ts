import { CompanyAccount} from '../class/CompanyAccount'
import { PeopleAccount } from '../class/PeopleAccount'

const  peopleAccount : PeopleAccount = new PeopleAccount(1, 'math',10)

peopleAccount.deposit()

const companyAccount : CompanyAccount = new CompanyAccount ('Dio', 20)

companyAccount.deposit()