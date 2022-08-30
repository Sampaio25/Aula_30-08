$(document).ready(function() {

    $('.btn').click(function(e) {
        e.preventDefault()

        let dados = $('#CEP').val()

        let url = `https://viacep.com.br/ws/01001000/json/`

        console.log(url)

        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            assync: true,
            url: url,
            success: function(dados) {
                $('#LAGRADOURO').val(dados.logradouro)
            }
        })

    })
})