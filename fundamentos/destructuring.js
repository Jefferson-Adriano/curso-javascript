// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade) // imprimiu Ana 5

const { nome: n, idade: i } = pessoa
console.log(n, i) // imprimiu Ana 5

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) // imprimiu undefined true

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // imprimiu Rua ABC 1000 undefined

