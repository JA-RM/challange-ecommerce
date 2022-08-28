import { filesExport } from "../servicios/servicios.js";

//agreagamos el elemento, creando una constante con una rrow function que tome todos los elementos del db.json que quermos enviarle para que imprima. Dentro de la arrow function cremos una constante con create element del tag que queremos crear, además creamos una contante que tenga el cofigo html encerrado en backticks o comillas invertidas, y adentro ponemos las variables en ${} . Luego usamos la constante linea con  innerHTML para que ese nuevo eemento contenga "contenido", finalmente le pedimos que retorne línea
const card = (url, nombre, descripcion, id) => {
    const linea = document.createElement("div");
    //CAMBIO agrego el boton de eliminar y una ancla para editar y lle enviamos el id a Eliminar
    const contenido = `
    <img src="${url}" alt="">
    <h3>${nombre}</h3>
    <p>${descripcion}</p>
    <button class="contacto__form__boton--eliminar" type="button" id="${id}">
    Eliminar
    </button>
    <button class="contacto__form__boton--editar"><a href="../edit-productos.html?id=${id}">Editar</a></button>
    
    `;
    linea.innerHTML = contenido;
    //CAMBIO se agrega clase card al div
    linea.classList.add("card")
    //CAMBIO seleccionamos el button del html
    const btn = linea.querySelector("button");
    //CAMBIO ponemos a la escuca de un click definos que id sea btn.id
    btn.addEventListener("click", () => {
        const id = btn.id;
        //CAMBIO llamamos al metodo eliminarProducto y le enviamos la cosntante  id
        filesExport.eliminarProducto(id).then( (respueta) => {
        }).catch((err) => alert("error eliminar"))
    })
    return linea;
}

//selecicionamos nuestro data atribute donde esta contenido nuestro nuevo div, no hay que confundir en el codigo un div contiene otro div, es decir s repite mucho, pero es bueno guiarse por el data atribute que es el que contiene

const div = document.querySelector("[data-productos]");


//"data" es un nombre cualquiera, pero es lo que retorna listaProductos, es decir "data" en este caso es "promise"
filesExport.listaProductos().then((data) => {
    //CAMBIO Se elimina producto y se citan las constntes entre llaves y paréntesis ({url, nombre, descripcion})
    data.forEach( ({url, nombre, descripcion, id}) => {
    const nuevacard =card(url, nombre, descripcion, id)
    div.appendChild(nuevacard);
});
}).catch((error) => alert('Error'));

