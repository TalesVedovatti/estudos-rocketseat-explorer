
const estudantes = [
    {
        name: "Ana",
        nota1: 8,
        nota2: 10,
    },
    {
        name: "Pedro",
        nota1: 4,
        nota2: 3,
    },
    {
        name: "Tales",
        nota1: 10,
        nota2: 10,
    },
    {
        name: "Paula",
        nota1: 5,
        nota2: 10,
    },
    {
        name: "Genaro",
        nota1: 0,
        nota2: 0,
    },
    {
        name: "Geraldo",
        nota1: 7,
        nota2: 7,
    }
]


function media(estudante) {
    return (estudante.nota1 + estudante.nota2)/2
}

alert("Vamos analizar as notas da sala! Lembrando: a média é 7!")

for (let estudante of estudantes) {
    let notaFinal = media(estudante)
    if (notaFinal >= 7) {
        alert("A média de " + estudante.name + " é " + notaFinal +".\nParabéns, " + estudante.name + "! Você foi aprovada(o)!")
    }
    else {
        alert("A média de " + estudante.name + " é " + notaFinal +".\nNão foi dessa vez, " + estudante.name + "! Tente novamente!")
    }
}