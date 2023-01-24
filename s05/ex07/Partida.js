class Partida {
    siglaTimeA
    golsTimeA
    siglaTimeB
    golsTimeB

    constructor(siglaTimeA, golsTimeA, siglaTimeB, golsTimeB) {
        this.siglaTimeA = siglaTimeA;
        this.siglaTimeB = siglaTimeB;
        this.golsTimeA = parseInt(golsTimeA);
        this.golsTimeB = parseInt(golsTimeB);
    }
} export default Partida;