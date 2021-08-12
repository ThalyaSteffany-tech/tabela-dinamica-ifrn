function validadeForm(input1, input2) {
    let inputValido= input1.length > 0 && input2.length > 0
    if(inputValido) {
        criaTabela()
    }else {
        alert('Os campos não podem ficar em branco.')
    }
}
