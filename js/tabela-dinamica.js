let main = document.querySelector('main')
let form = document.querySelector('#formulario')
let inputForm1 = document.querySelector('.userEnter1')
let inputForm2 = document.querySelector('.userEnter2')
let botaoForm = document.querySelector('.botao')



botaoForm.addEventListener('click', function(event) {
    event.preventDefault()
    validadeForm(inputForm1.value,inputForm2.value)
})
/*MELHORAMENTOS
    Transformar o itens da coluna em arrays
    Mudar o nome dos parâmetros nas funções
    Como substituir a tabela já criada
*/