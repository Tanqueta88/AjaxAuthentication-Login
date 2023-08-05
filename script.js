function myFunction() {
    var usuario = document.getElementById("mail");
    var password = document.getElementById("psw");

    var numbers = /^[0-9]+$/;
    var isnum = /^\d+$/.test(password.value);

    if (usuario.value == "Sincere@april.biz" && password.value == "81.1496") {
        window.location.href = "Punto2.html";
    } else {

        if (alerta.length == 0) {
            alert("Password y/o contraseña erróneos");
        } else {
            alert(alerta);
        }
        window.stop();
    }
}