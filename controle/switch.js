const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10) // quadro de honra
imprimirResultado(8.9) // aprovado
imprimirResultado(6.55) // recuperação
imprimirResultado(2.3) // reprovado
imprimirResultado(-1) // nota inválida
imprimirResultado(11) // nota inválida