function logar() {

    var usuario = document.getElementById ('usuario').value;
    var senha = document.getElementById ('senha').value;

    if(usuario == "kelvin" && senha == "123"){
        location.href="avent.html"
    }else{
        alert('Usuário ou senha incorretos, logue rápito, os dinossauros estão vindo.')
    }
}