/*
* Funções
*/

function errorMessage(formulario) {
    document.getElementById(formulario)
    document.getElementById('mensagem').style.color = "red";
    document.getElementById('mensagem').innerHTML = "* Valores inválidos.";
}

document.getElementById('formulario-02').addEventListener('submit', function(evento){

    /*
    * Formulário de envio de dados para cadastro
    */

    evento.preventDefault()
    evento.stopPropagation()

    document.getElementById('mensagem').innerHTML = ""
    document.getElementById('resultado').innerHTML = ""

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let cep = document.getElementById('cep').value
    let cidade = document.getElementById('cidade').value
    let uf = document.getElementById('uf').value
    let erro = false
    let dadosValidacao = [nome_campo = false, email_campo = false, telefone_campo = false, cep_campo = false, cidade_campo = false, uf_campo = false]
    let dadosId = [nomeId = 'nome', emailId = 'email', telefoneId = 'telefone', cepId = 'cep', cidadeId = 'cidade', ufId = 'uf']
    let y = 0

    email = email.toString()

    if ( (nome === null) || (nome === '') ) {
        erro = true
        dadosValidacao[0] = true
    }

    if ( (email === null) || (email === '') ) {
        erro = true
        dadosValidacao[1] = true
    }

    if ( (telefone === null) || (telefone === '') || (isNaN(telefone) === true) ) {
        erro = true
        dadosValidacao[2] = true
    }

    if ( (cep === null) || (cep === '') || (isNaN(cep) === true) ) {
        erro = true
        dadosValidacao[3] = true
    }

    if ( (cidade === null) || (cidade === '') ) {
        erro = true
        dadosValidacao[4] = true
    }

    if ( (uf === null) || (uf === '') || (isNaN(uf) === true) || (uf < 10) || (uf > 99) ) {
        erro = true
        dadosValidacao[5] = true
    }

    let x = 0

    while (x < dadosValidacao.length) {
        if (dadosValidacao[x] === true) {
            document.getElementById(dadosId[x]).style.borderColor = "red"
            x++
        } else {
            document.getElementById(dadosId[x]).style.borderColor = "blue"
            x++
        }
    }

    if (erro === true) {
        errorMessage('formulario_02')
    } else {
        document.getElementById('resultado').innerHTML = '* Seu cadastro foi realizado com sucesso.'
    }   
});