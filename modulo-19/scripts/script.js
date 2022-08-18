function errorMessage() {
    document.getElementById('mensagem').style.color = "red";
    document.getElementById('mensagem').innerHTML = "* Valores inválidos.";
}

const isValidBRZip = (zip) => {
    const pattern = /^[0-9]{5}-[0-9]{3}$/
    return pattern.test(zip)
}

document.getElementById('formulario').addEventListener('submit', function(e){
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()

    document.getElementById('mensagem').innerHTML = ""
    document.getElementById('resultado').innerHTML = ""

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let cep = document.getElementById('cep').value
    let erro = false
    let dadosValidacao = [nome_campo = false, email_campo = false, cep_campo = false]
    let dadosId = [nomeId = 'nome', emailId = 'email', cepId = 'cep']
    let y = 0

    email = email.toString()

    if ( (nome === null) || (nome === '') || (nome.length <= 2) ) {
        erro = true
        dadosValidacao[0] = true
    }

    if ( (email === null) || (email === '') || (email.includes("@") === false) || (email.includes(".") === false) ) {
        erro = true
        dadosValidacao[1] = true
    }

    if ( (cep === null) || (cep === '') || (isValidBRZip(cep) === false) ) {
        erro = true
        dadosValidacao[2] = true
    }

    let x = 0

    while (x < dadosValidacao.length) {
        if (dadosValidacao[x] === true) {
            document.getElementById(dadosId[x]).style.borderColor = "red"
            x++
        } else {
            document.getElementById(dadosId[x]).style.borderColor = "grey"
            x++
        }
    }

    if (erro === true) {
        errorMessage()
    } else {
        document.getElementById('resultado').innerHTML = '* Seu cadastro foi realizado com sucesso.'
        document.getElementById('resultado').style.color = "green";
    }   
});