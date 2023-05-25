class User {
    name: string = "matheus"
    age: number = 24

    // sempre tera um metodo construtor dentro da classe
    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }


    showName = () =>{
        console.log(this.name)
    }
}

const user = new User('Matheus', 24)
user.showName()

const otherUser = new User('Rosiane', 23)
otherUser.showName()
