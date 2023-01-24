class Time {
    nome
    sigla
    vitorias
    derrotas
    empates
    golsMarcados
    golsSofridos

    constructor(nome, sigla, vitorias, derrotas, empates, golsMarcados, golsSofridos) {
        this.nome = nome;
        this.sigla = sigla;
        this.vitorias = parseInt(vitorias);
        this.derrotas = parseInt(derrotas);
        this.empates = parseInt(empates);
        this.golsMarcados = parseInt(golsMarcados);
        this.golsSofridos = parseInt(golsSofridos);
    }

    get numeroDeJogos() {
        let totalJogos = this.vitorias + this.derrotas + this.empates;
        return totalJogos;
    }

    get numeroDePontos() {
        let totalPontos = this.vitorias * 3 + this.empates * 1;
        return totalPontos;
    }

    computarPartida(partida) {
        //time participou da partida
        if (this.sigla === partida.siglaTimeA || this.sigla === partida.siglaTimeB) {
            //se empate
            if (partida.golsTimeA === partida.golsTimeB) {
                this.golsMarcados += partida.golsTimeA;
                this.golsSofridos += partida.golsTimeA;
                this.empates += 1;
            } else
                //time A ganhou
            if (partida.golsTimeA > partida.golsTimeB) {
                if (this.sigla === partida.siglaTimeA) {
                    this.golsMarcados += partida.golsTimeA;
                    this.golsSofridos += partida.golsTimeB;
                    this.vitorias += 1;
                } else {
                    this.golsMarcados += partida.golsTimeB;
                    this.golsSofridos += partida.golsTimeA;
                    this.derrotas += 1

                }
                //time A perdeu
            } else {
                if (this.sigla === partida.siglaTimeA) {
                    this.golsMarcados += partida.golsTimeA;
                    this.golsSofridos += partida.golsTimeB;
                    this.derrotas += 1;
                } else {
                    this.golsMarcados += partida.golsTimeB;
                    this.golsSofridos += partida.golsTimeA;
                    this.vitorias += 1;
                }
            }
        } else{
            console.log("Este time não participou desta partida!")
        }
    }

    get exibirSituacao() {
        let situacao = []
        situacao.push(this.nome);
        situacao.push(this.sigla);
        situacao.push(this.vitorias);
        situacao.push(this.derrotas);
        situacao.push(this.empates);
        situacao.push(this.golsMarcados);
        situacao.push(this.golsSofridos);
        console.log(situacao)
    }
}

export default Time;
