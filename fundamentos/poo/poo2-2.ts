// abstract class Account {
//     name: String;
//     accountNumber: number;
//     balance: number = 0;
  
//     constructor(name: String, accountNumber: number) {
//       this.name = name;
//       this.accountNumber = accountNumber;
//     }
  
//     deposit = () => {
//       console.log("vc depositou");
//     };
  
//     withdraw = () => {
//       console.log("vc sacou");
//     };
  
//     getBalance = () => {
//       console.log(this.balance);
//     };
//   }
  
//   class PeopleAccount extends Account {
//     doc_id: number;
  
//     constructor(doc_id: number, name: string, accountNumber: number) {
//       super(name, accountNumber);
  
//       this.doc_id = doc_id;
//     }
//   }
  
//   const peopleAccount: PeopleAccount = new PeopleAccount(1, "math", 10);
  
//   console.log(peopleAccount);
  