var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function(){
    $("#registroForm").submit(function(event){
        event.preventDefault();

        var email = $("#emailInput").val();
        var contraseña = $("#Contraseña").val();
        var direccion = $("#inputAddress").val();
        var ciudad = $("#cityInput").val();
        var codigo_postal = $("#postalcodeInput").val();
        var pais = $("#paisInput").val();

        if(email == "" || !expr.test(email)){
            alert("El correo debe estar bien escrito")
            return;
        }

        if(contraseña.length == ""){
            alert("Debe ingresar una contraseña");
            return;
        }
        
        if(direccion.length == ""){
            alert("Debe colocar una direccion");
            return;
        }

        if(ciudad.length == ""){
            alert("Debe colocar una ciudad");
            return;
        }

        if(codigo_postal.length == ""){
            alert("Debe colocar un codigo postal");
            return;
        }

        if(pais.length == ""){
            alert("Debe colocar un pais");
            return;
        }

        alert("¡Registro exitoso!");

        window.location.href = "index.html";

    });
});
