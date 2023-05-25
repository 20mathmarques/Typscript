
//interface seta o tipo de cada dado que existe dentro do objeto
interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
    // '?:' seta valor para ser opcional na declaração
}

//chamar objeto que precisa receber os dados
const pessoa: Pessoa = {
    nome: 'Matheus',
    idade: 24
}

const outraPessoa: Pessoa = {
    nome: 'Rosiane',
    idade:23,
    profissao: 'Contadora'
}

//Declaração de objetos dentro de um array com tipo de pessoa
const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]