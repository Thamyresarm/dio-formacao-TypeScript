import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { OtherAccount } from './class/OtherAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(5)
console.log(peopleAccount.getBalance());
peopleAccount.withdraw(6)
console.log(peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
console.log(companyAccount.getBalance());
companyAccount.withdraw(5)
console.log(companyAccount.getBalance());
companyAccount.getLoan(50)
console.log(companyAccount.getBalance());

const otherAccount: OtherAccount = new OtherAccount('Thamy', 30)
otherAccount.deposit(10)
console.log(otherAccount.getBalance());