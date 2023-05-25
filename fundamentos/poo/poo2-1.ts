// class Account {
//     name: String
//     accountNumber: number

//     constructor(name: String, accountNumber: number){
//         this.name = name
//         this.accountNumber = accountNumber
// }

//     deposit = () =>{
//         console.log('vc depositou')
//     }

//     withdraw = () =>{
//         console.log('vc sacou')
//     }
//  }

//  // minha classe admin, vai receber td o que vem em Account
//     class Admin extends Account {
//         balance :  number

//         constructor(name: String , accountNumber : number){
//             //super faz com que chamamos os paramentros de account
//             super(name, accountNumber)

//             this.balance = 20
//         }

//         getBalance = () =>{
//             console.log(this.balance)
//         }
    
// }

// const adminAccount:  Admin = new Admin('matheus', 1)
// console.log(adminAccount)

// const account : Account = new Account ('joao' , 20)
// console.log(account)