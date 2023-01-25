export default class CalculadoraDeArea{
    tipo
    base
    altura

    constructor(tipo, base, altura) {
        this.tipo = tipo
        this.base = parseFloat(base)
        this.altura = parseFloat(altura)
    }

    calcular(){
        switch (this.tipo){
             case 'triangulo':
                 return (this.base*this.altura)/2
            case 'quadrado':
                return this.base * this.altura
            case 'retangulo':
                return this.base * this.altura
            default:
                console.log("Impossivel calcular")
                return ''

        }

    }
}