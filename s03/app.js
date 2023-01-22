//ex 2
const mensagemOla = (nome) =>
    console.log(`Ola, ${nome}!`)

//ex4
const mesclaObjArrow = (o1, o2) => ({...o1, ...o2});

const novoObjeto = mesclaObjArrow({a: 1, b: 2}, {c: 3, d: 4})
console.log(novoObjeto)

//ex 5
function somaTudo(...numeros) {
    let acumulador = 0;
    for (var i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }

    return acumulador;
}

//ex6

function verificaPalindromo(string) {
    let stringInversa = ''
    string = string.toLowerCase();
    for (let i = (string.length - 1); i >= 0; i--) {
        stringInversa += (string[i])
    }

    console.log(string == stringInversa);
}

verificaPalindromo("ana");
verificaPalindromo("Ana");
verificaPalindromo("Julia");

//Ex 7

const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: "programadora"
}

function desestruturaPessoa(pessoa) {
    console.log(`Este(a) eh ${pessoa.nome}, possui ${pessoa.idade} anos e trabalha como ${pessoa.profissao}`)
}

desestruturaPessoa(pessoa)


//ex 8

const uneDobraRetorna = (vetor, ...extras) => {

    for (let i = 0; i < extras.length; i++) {
        extras[i] *= 2;
    }

    return [...vetor, ...extras];
}
const r1 = uneDobraRetorna([1, 2, 3], 4, 4)
console.log(r1) // [1, 2, 3, 8, 8]

const r2 = uneDobraRetorna([2], 10, 4, 8)
console.log(r2) // [2, 20, 8, 16]

const r3 = uneDobraRetorna([6, 8])
console.log(r3) // [6, 8]
