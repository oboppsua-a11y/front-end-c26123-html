import {
    guardarCarrito,
    obtenerCarrito,
    vaciarCarritoStorage,
}   from "./storage.js";

import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto)=> {
    //Usamos la función que pide el carrito al localStorage
    const carrito = obtenerCarrito();
    carrito.push(producto);
    
    //usamos la funcion que guarda el carrito en el localStorage
    guardarCarrito(carrito);
    
    //usamos la funcion UI que actualiza en número en carrito
    actualizarContador(carrito);
    mostrarMensaje("Producto agregado OK");
};

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito();
    carrito.splice(indice, 1);

    //actualizamos el carrito en el localStorage
    guardarCarrito(carrito);

    //actualizamos el contador
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado ");
};

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("Carrito vaciado");
};