const formulario = document.querySelector("[data-form]")

const validar = () => {
    
    formulario.addEventListener("submit", () => {
    var user = document.querySelector("[data-user]").value
    var pass = document.querySelector("[data-pass]").value

    if(user == "admin" && pass == "1234") {
        window.open('./listado-productos.html')
     

    }else{
        alert("Usuario o contraseña errado")
    }
});

}
validar();