//se importa filesExport
import { filesExport } from "../servicios/servicios.js";
//crea constnte que seleciona el data atribute del formulario
const formulario = document.querySelector("[data-form]");
//a la nueva constante se la pone a esccucar el evento submit
formulario.addEventListener("submit", (eventi) =>{
    //se impide que el formularoio funcione por default
    eventi.preventDefault();
    //se captura los valores de los data atributes de lso campos llenados
    const url = document.querySelector('[data-url]').value
    const nombre = document.querySelector('[data-nombre').value
    const descripcion = document.querySelector('[data-descripcion]').value
    console.log(url, " - ", nombre, " - ", descripcion )
    //se usa el código de services.js sitando el valor(filesExport) y su clave (crearProducto) se usa el metodo then para obtener la respuest y window.location.href para redireccionar
    filesExport.crearProducto(url, nombre, descripcion).then((respuesta) => {
        
        window.location.href = "/listado-productos.html"
    }).catch((err) => console.log(err));

});