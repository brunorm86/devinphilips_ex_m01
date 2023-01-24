class Personagem {
    nome
    percentualVida

    constructor(nome) {
        this.nome = nome;
        this.percentualVida = 100
    }

    get obterPercentualVida() {
        return this.percentualVida
    }


    sofreuDano(percentualDano) {
        (this.percentualVida - percentualDano) >= 0 ? this.percentualVida -= percentualDano : this.percentualVida = 0
    }

    usouKitMedico() {
        this.percentualVida + 10 <= 100 ? this.percentualVida += 10 : this.percentualVida = 100
    }
}

export default Personagem;