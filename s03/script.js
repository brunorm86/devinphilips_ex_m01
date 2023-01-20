function procuraMinMax(arrayNum) {
    if (arrayNum == null) {
        console.log("Não é possível encontrar")
    } else if (arrayNum.length == 0) {
        console.log("Não é possível encontrar")
    } else {
        let menor = arrayNum[0];
        let maior = arrayNum[0];

        for (var i = 1; i < arrayNum.length; i++) {
            if (arrayNum[i] < menor) {
                menor = arrayNum[i];
            }
            if (arrayNum[i] > maior) {
                maior = arrayNum[i];
            }
        }
        console.log("Maior: " + maior + "\nMenor: " + menor)
    }
}

function testaProcuraMinMax() {

    const array0 = [[56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47], [], [1], [1, -1], null, [-2, -2, -2, -2], [20, 10, 30]]

    for (var i = 0; i < array0.length; i++) {
        procuraMinMax(array0[i])
    }

}

