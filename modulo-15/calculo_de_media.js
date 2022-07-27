/*
* Funções
*/

function errorMessage(formulario) {
    document.getElementById(formulario)
    document.getElementById('mensagem').style.color = "red";
    document.getElementById('mensagem').innerHTML = "* Valores inválidos.";
}

document.getElementById('formulario-01').addEventListener('submit', function(evento){

    /*
    * Formulário de envio de dados para cálculo de média
    */

    evento.preventDefault()
    evento.stopPropagation()

    document.getElementById('mensagem').innerHTML = ""
    document.getElementById('resultado').innerHTML = ""

    let notas = [document.getElementById('n1').value, document.getElementById('n2').value, document.getElementById('n3').value, document.getElementById('n4').value]
    let erro = false
    let notasValidacao = [n1 = false, n2 = false, n3 = false, n4 = false]
    let notasId = [n1Id = 'n1', n2Id = 'n2', n3Id = 'n3', n4Id = 'n4']
    let y = 0

    while (y < notas.length) {
        if ( (notas[y] < 0) || (notas[y] > 10) || (isNaN(notas[y]) === true) || (notas[y] === null) || (notas[y] === '') ) {
            erro = true
            notasValidacao[y] = true
            y++
        } else {
            y++
        }
    }

    let x = 0

    while (x < notas.length) {
        if (notasValidacao[x] === true) {
            document.getElementById(notasId[x]).style.borderColor = "red"
            x++
        } else {
            document.getElementById(notasId[x]).style.borderColor = "blue"
            x++
        }
    }

    if (erro === true) {
        errorMessage('formulario_01')
    } else {
        let media = 0
        let x = 0

        while (x < notas.length) {
            media = parseInt(media) + parseInt(notas[x])
            x++
        }

        media = media / 4

        let aprovacao

        if (media >= 5) {
            aprovacao = "Aprovado"
        } else {
            aprovacao = "Reprovado"
        }

        document.getElementById('resultado').innerHTML = "Média: " + media + " - Resultado: " + aprovacao
    }   
});