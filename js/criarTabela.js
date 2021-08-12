function criaTabela() {
    let table = document.createElement('table')
    //Cabecalho tabela
    let cabecalhoTr = document.createElement('tr')
    let cabecalhoOp = document.createElement('th')
    let cabecalhoV = document.createElement('th')
    let colV = document.createElement('tr')
    let colOp = document.createElement('tr')
    
    let vSoma = document.createElement('td')
    let vMultiplicacao = document.createElement('td')
    let vDivisao = document.createElement('td')
    let vResDivisao = document.createElement('td')

    let opSoma = document.createElement('td')
    let opMultiplicacao = document.createElement('td')
    let opDivisao = document.createElement('td')
    let opResDivisao = document.createElement('td')

    

    inserindoTabelaNoBody(table,cabecalhoTr,cabecalhoOp,cabecalhoV,colOp,colV,vSoma,vDivisao,vMultiplicacao,vResDivisao,opSoma,opMultiplicacao,opDivisao,opResDivisao)
}