function realizaOperacoes(userEnter1,userEnter2) {
    let operacoes = []
    const primeiroValor = Number(userEnter1)
    const segundoValor = Number(userEnter2)

    let soma =  primeiroValor + segundoValor
    let mutiplicacao = primeiroValor * segundoValor
    let divisao = primeiroValor / segundoValor
    let resDivisao = primeiroValor % segundoValor


    operacoes.push(soma,mutiplicacao,divisao.toFixed(2),resDivisao.toFixed(2))
    
    
    return operacoes

}