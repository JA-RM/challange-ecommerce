import { filesExport } from "../servicios/servicios.js";


const formulario = document.querySelector("[data-form]");
//por ser un arrow function solo hay que poner async antes de ()
const obtenerInfo = async () => {
const urlref = new URL(window.location);
const id = urlref.searchParams.get("id");
if (id === null) {
    window.location.href = "/index.html";
}

const url = document.querySelector('[data-url]');
const nombre = document.querySelector('[data-nombre]');
const descripcion = document.querySelector('[data-descripcion]');

try{
    const elemento = await filesExport.detaleProducto(id);
    if(elemento.url && elemento.nombre && elemento.descripcion){
        url.value = elemento.url; 
        nombre.value = elemento.nombre;
        descripcion.value = elemento.descripcion;
    }else{
        throw new Error();
    }
}catch(error){
    alert('Error en el try - catch')
    window.location.href = "/index.html";
}
};

obtenerInfo();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const urlref = new URL(window.location);
    const id = urlref.searchParams.get("id");

    const url = document.querySelector('[data-url]').value;
    const nombre = document.querySelector('[data-nombre').value;
    const descripcion = document.querySelector('[data-descripcion]').value;
    filesExport.actualiarProducto(url, nombre, descripcion, id).then(() => {
        window.location.href = "/listado-productos.html"
    });
});