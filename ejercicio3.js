// EJERCICIO #3

//3.a)
class Producto {
    constructor(cantidad, nombre, precio) {
        this.cantidad = cantidad;
        this.nombre = nombre;
        this.precio = precio;

    }
}
class Carrito {
    constructor() {
        this.montoTotal = 0;
        this.productos= [];
    }
//3.b)
    agregarProducto(nombre, precio, unidades) {
        // 3.c)
        let productoExistente = this.productos.find(producto => producto.nombre === nombre);
        if (productoExistente) {
          console.log("El producto " + nombre + " ya existe en el carrito con " + productoExistente.cantidad + " unidades");
          return; // Validacion para ver si el producto ya está en el carrito
        }
        let producto = new Producto(nombre, precio, unidades);
        this.productos.push(producto);
        this.montoTotal += precio * unidades;
      }
    }


   

