function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value > ano || fano.value.length == 0){
        window.alert('Por favor, preencha um dado válido!')
    } else {
        var fsex = document.getElementsByName('genero')
        var idade = ano - Number(fano.value)
        var g = ''
        if (fsex[0].checked){
            g = 'uma mulher'
        } else if (fsex[1].checked){
            g = 'um homem'
        }
        res.innerHTML = `Sua idade é de ${idade} anos e você é ${g}`
    }
}
