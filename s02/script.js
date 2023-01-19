function classificaIdade(idade) {
    if (idade < 16) {
        console.log("Jovem")
    } else if (idade >= 16 && idade < 65) {
        console.log("Adulto")
    } else {
        console.log("Idoso")
    }
}

function tabuada() {
    let numero = prompt("Digite um número inteiro diferente de zero: ")

    for (var i = 1; i < 11; i++) {
        console.log(numero + " x " + i + " = " + (i * numero))

    }

}

function somarNumeros() {
    let soma = 0;
    let numero = 0;

    while (numero != -1) {
        soma += numero;
        numero = parseInt(prompt("Digite um número qualquer para somá-lo ou '-1' para parar: "))
    }
    console.log("Soma total: " + soma)
}

function paresEImpares() {
    let pares = 0;
    let impares = 0;
    let numero = parseInt(prompt("Digite um número inteiro diferente de zero: "));
    let numeroBase = numero;

    for (numero; numero > 0; numero--) {
        if (numero % 2 == 0) {
            pares += 1;
        } else {
            impares += 1;
        }
    }
    alert("Há, entre 0 e " + numeroBase + ", " + pares + " números pares e " + impares + " números ímpares")

}

function calculadora() {
    let operacao = parseInt(prompt("Digite a operação desejada:" +
        " \n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"))
    let numero1 = parseFloat(prompt("Digite o primeiro número: "));
    let numero2 = parseFloat(prompt("Digite o segundo número: "));

    switch (operacao) {
        case 1:
            alert("O resultado do seu cálculo é: " + (numero1 + numero2));
        case 2:
            alert("O resultado do seu cálculo é: " + (numero1 - numero2));
        case 3:
            alert("O resultado do seu cálculo é: " + (numero1 * numero2));
        case 4:
            if (numero2 != 0) {
                alert("O resultado do seu cálculo é: " + (numero1 / numero2));
            } else {
                alert("Não é possível divisão por 0!")
            }
        default:
            alert("Opção inválida!")
    }

}

function verificaEstacaoAno() {

    const date = new Date();

    let mes = (date.getMonth()) + 1;
    let dia = date.getDate();

    if (mes == 1 || mes == 2) {
        return 'Verão';
    } else if (mes == 3) {
        if (dia < 21) {
            return 'Verão';
        } else {
            return "Outono";
        }
    } else if (mes == 4 || mes == 5) {
        return "Outono"
    } else if (mes == 6) {
        if (dia < 21) {
            return "Outono"
        } else {
            return "Inverno"
        }
    } else if (mes == 7 || mes == 8) {
        return "Inverno"
    } else if (mes == 9) {
        if (dia < 21) {
            return "Inverno"
        } else {
            return "Primavera"
        }
    } else if (mes == 10 || mes == 11) {
        return "Primavera"
    } else if (mes == 12) {
        if (dia < 21) {
            return "Primavera"
        } else {
            return "Verão"
        }

    }
}

function alertaEstacaoAno() {
    let estacao = verificaEstacaoAno();
    alert(estacao)
}

function calculadoraPA() {
    let base = parseInt(prompt("Digite a base da PA: "));
    let raiz = parseInt(prompt("Digite a raíz: "));
    let resultados = [];
    for (var i = 0; i < 10; i++) {
        resultados.push((base + (raiz * i)));
    }

    console.log(resultados)
}

function verificaPrimos(num) {

    if (num < 2) {
        console.log("Número inválido!")
    } else {
        let lista_divisores = []
        lista_divisores.push(1)
        for (var i = 2; i <= (num / 2); i++) {
            if (num % i == 0) {
                lista_divisores.push(i)
            }
        }
        lista_divisores.push(num)

        let primo = ''

        if (lista_divisores.length > 2) {
            primo += 'NÃO É PRIMO'

        } else {
            primo += 'É PRIMO'
        }
        console.log("O número " + num + " possui como divisores " + lista_divisores + ". Logo, " + num + " " + primo);
    }
}