function veSeOValorEValido(chute){
    const numero = +chute

    if (ValidacaoNumero (numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if  (NumeroForMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um Número entre ${menorValor} e ${maiorValor}!</div>
        `
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogarNovamente" class="btn-Jogar">Jogar Novamente</button>
        `

    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></i></div>
        `
    }
}

function NumeroForMaiorOuMenor(numero) {
return numero > maiorValor || numero < menorValor


}



function ValidacaoNumero (numero) {
    return Number.isNaN(numero)
}


document.body.addEventListener('click', e => {
    if(e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
})