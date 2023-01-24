class Funcionario {
    cpf
    nomeCompleto

    salario

    constructor(cpf, nomeCompleto, salario) {
        if (Funcionario.validaCPF(cpf)) {
            this.cpf = cpf;
            this.nomeCompleto = nomeCompleto;
            this.salario = salario
        }else{
            console.log("CPF Invalido!")
        }
    }

    promover(percentual) {
        this.salario *= (1 + (percentual / 100))
    }


    static validaCPF(cpf) {
        const strCPF = cpf.replaceAll('.', '').replaceAll('-', '')
        let soma = 0;
        let resto;
        if (strCPF == "00000000000") {
            return false;
        }

        for (let i = 1; i <= 9; i++) {
            soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto != parseInt(strCPF.substring(9, 10))) {
            return false;
        }

        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        }

        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto != parseInt(strCPF.substring(10, 11))) {
            return false;
        }
        return true;
    }
}

export default Funcionario;