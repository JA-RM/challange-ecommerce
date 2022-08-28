
const listaProductos = () => fetch("http://localhost:3000/producto").then( respuesta => respuesta.json());
//se crea una constante  crearProducto que contiene una arrow function,  la cual recibe los tres elementos 
const crearProducto = (url, nombre, descripcion)=>{
    //se usa la api fetch
    return fetch("http://localhost:3000/producto", {
        //se le indica el método
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //se le indica para que pase de formato json a string
        body: JSON.stringify({url, nombre, descripcion, id: uuid.v4()}),
    })
}
//se agrega una constnte que contenga fetch a la misma solo le enviamos el id
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "DELETE"
    })
}

//CAMBIO: se crea la cosntante que contiene un arrow function para convertir  el elemento en json
 const detaleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json()
    )};

    //CAMBIO: se crea la cosntante que contiene un arrow function para que obtenga los elementos y con el metodo PUT de actualizar envie como string los elementos

    const actualiarProducto = (url, nombre, descripcion, id) => {
        return fetch(`http://localhost:3000/producto/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({url, nombre, descripcion})
        }).then((respuesta) => respuesta)
        .catch((err) => console.log(err));

    }
//se exporta detaleProducto y actualiarProducto
export const filesExport = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detaleProducto,
    actualiarProducto,
};

