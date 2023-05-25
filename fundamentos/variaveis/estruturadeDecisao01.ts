//Estrutura de decisão  com objeto

//Estrutura arcaica 
const num: number = 15

if( num > 15) {
    console.log('Num maior que 15')

}else if( num ===15) {
    console.log('Num igual a 15')
}else{
    console.log('Num maior que 15')
}

// Tipo de estrutura de 

const typeUser = {
    admin : 'Seja bem vindo admin',
    student: 'Vc é estudante',
    viewer: 'Vc pode vizualisar'
}

function ValidateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

ValidateUser(usuario)