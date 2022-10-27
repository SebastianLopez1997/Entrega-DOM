const carrito = [];

let seccion = document.getElementById("principal");


let tituo = document.getElementById("titulo");

let Fecha = document.getElementById("Fecha");

Fecha.innerText = new Date().toLocaleDateString();

let ProductosCartas = document.getElementById("productos");

let Boton;

function Renderizado() {
    for (const producto of Products) {
        ProductosCartas.innerHTML += `
        <div class="card col-sm-2">
                <img src=${producto.imagen} class="card-img-top" alt=${producto.nombre}>
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Precio: $ ${producto.precio}</p>
                    <button id="btn${producto.id}" " class="btn btn-primary"> Comprar </button>
                </div>
        </div>
        `;
    }

    Products.forEach((producto) => {
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () { agregarAlcarrito(producto); })
    })
}

Renderizado();

function agregarAlcarrito(productoAcomprar) {
    carrito.push(productoAcomprar);
    console.table(carrito);
    alert("Producto " + productoAcomprar.nombre + " agregado al carro");
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoAcomprar.id} </td>
            <td>${productoAcomprar.nombre} </td>
            <td>${productoAcomprar.precio} </td>
        </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);
    document.getElementById("total").innerText = "Total a pagar: $ " + totalCarrito;
}

const producto2 = [];
const guardarLocal = JSON.parse(localStorage.getItem("ListaDelcarro"))
for (const objeto of carrito) {
    producto2.push(new Products(objeto));
}

let princi = document.getElementById("princi");
let boton = document.getElementById("mode");
let modo = localStorage.getItem("modo");



boton.onclick = () => {
    if (modo == "light") {
        document.body.className = "dark";
        princi.classList.remove("light");
        princi.classList.add("dark");
        boton.innerText = "Light mode";
        modo = "dark";
    } else {
        document.body.className = "light";
        princi.classList.remove("dark");
        princi.classList.add("light");
        boton.innerText = "Dark mode";
        modo = "light";
    }
    localStorage.setItem("modo", modo);
}
