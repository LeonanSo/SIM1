$(document).ready(function(){
    
    $('#btnEnviar2').click(function(){
        
        var tipo = $('#tipo').val();
        var numero = $('#numero').val();

        $.ajax({
            url:'processaDados2.php',
            type: 'POST',
            data:{
                tipo: tipo,
                numero:numero
            },
            success: function(data){
                alert(data);
                if("form-control" === "MostraBot"){
                    window.location.href = "botao.html"
                }else{
                    window.location.href = "PM.html"
                }
            }
        })
    })     
});