function inserindoTabelaNoBody(table,cabecalhoTr, cabecalhoOp,cabecalhoV,colOp,colV,vSoma,vMultiplicacao,vDivisao,vResDivsao,opSoma,opMultiplicacao,opDivisao,opResDivisao) {
    //Inserindo a tabela no main
    main.appendChild(table) 
    
    //cabecalho tabela   
    table.appendChild(cabecalhoTr)
    cabecalhoTr.appendChild(cabecalhoOp)
    cabecalhoTr.appendChild(cabecalhoV)
    //Colunas(OPERAÇÃO E VALORES)
    table.appendChild(colOp)
    table.appendChild(colV)

    //Coluna Operações
    colOp.appendChild(opSoma)
    colOp.appendChild(opMultiplicacao)
    colOp.appendChild(opDivisao)
    colOp.appendChild(opResDivisao)

    // Coluna resutados
    colV.appendChild(vSoma)
    colV.appendChild(vMultiplicacao)
    colV.appendChild(vDivisao)
    colV.appendChild(vResDivsao)

    //Configuração cabecalho tabela(adicionando textos e classes)
    cabecalhoOp.textContent = "Operação"
    cabecalhoV.textContent = "Valor"
    table.classList.add('tabela') 
    cabecalhoTr.classList.add('table')
    cabecalhoV.classList.add('valorCabecalho')
    cabecalhoOp.classList.add('opCabecalho')
    colOp.classList.add('tableOp')
    opSoma.classList.add('opSoma')
    opMultiplicacao.classList.add('opMultiplicacao')
    opDivisao.classList.add('opDivisao')
    opResDivisao.classList.add('opResDivisao')
    colV.classList.add('tableValor')
    vSoma.classList.add('valorSoma')
    vMultiplicacao.classList.add('valorMultiplicacao')
    vDivisao.classList.add('valorDivisao')
    vResDivsao.classList.add('valorResDivisao')



    let operacoes =  realizaOperacoes(inputForm1.value,inputForm2.value) 

    
    //conteudo de texto dos resultados
    opSoma.textContent = inputForm1.value + ' + ' + inputForm2.value
    opMultiplicacao.textContent = inputForm1.value + " * " + inputForm2.value
    opDivisao.textContent = inputForm1.value + ' / ' + inputForm2.value
    opResDivisao.textContent = inputForm1.value + ' % ' + inputForm2.value
    vSoma.textContent = operacoes[0]
    vMultiplicacao.textContent = operacoes[1]
    vDivisao.textContent = operacoes[2]
    vResDivsao.textContent = operacoes[3]

}
