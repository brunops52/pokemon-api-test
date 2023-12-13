$('#pesquisa').on('click',function(){
    //recebendo o valor do input e garantindo que esteja em minúsculo.
    let pokemon = $('#valor').val().toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    
    
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            let nome = data.name
            let id = data.id
            $('#nomePokemon').text(`${id}-${nome}`)
            //usando a id gerada pela api para criar o link para a imagem.
            $('#pokemonImagem').attr('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
            $('#valor').val('');
        },
        error: function () {
            $('#valor').val('');
            $('#erro').css('display','block');
            setTimeout(function(){
                $('#erro').css('display','none');
            },2000)
        }
    })
})
$('#limpa').on('click',function(){
    $('#nomePokemon').text('Qual o Pokémon?')
    $('#pokemonImagem').attr('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png')
    $('#valor').val('');
})