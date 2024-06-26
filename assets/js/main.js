// Importar la función asíncrona obtenerDatosAnimales y la clase Animal
import { obtenerDatosAnimales } from "./acciones.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animal.js";

// Array de nombres de animales y sus  clases
const animalesDisponibles = [
  { nombre: "Leon", clase: Leon },
  { nombre: "Lobo", clase: Lobo },
  { nombre: "Oso", clase: Oso },
  { nombre: "Serpiente", clase: Serpiente },
  { nombre: "Aguila", clase: Aguila }
];

// Función autoejecutable IIFE para manejar la lógica principal
(async () => {
  try {
    // Obtener datos de los animales
    const datos = await obtenerDatosAnimales();
    const imagenes = datos.imagenes;
    const sonidos = datos.sonidos;

    // Manejar el evento de registro de animal
    document.getElementById("btnRegistrar").addEventListener("click", () => {
      // Obtener los valores de los campos del formulario
      const nombre = document.getElementById("animal").value;
      const edad = document.getElementById("edad").value;
      const comentarios = document.getElementById("comentarios").value;

      // Validar que se ingresaron todos los datos
      if (!nombre || !edad || !comentarios) {
        alert("Ingresa todos los datos.");
        return;
      }

      // Encontrar la clase correspondiente al nombre del animal seleccionado
      const animalClass = animalesDisponibles.find(animal => animal.nombre === nombre)?.clase;

      // Validar que se seleccionó un animal válido
      if (!animalClass) {
        console.log("Animal no reconocido");
        return;
      }

      // Crear instancia del animal correspondiente según el nombre seleccionado
      const animal = new animalClass(nombre, edad, imagenes[nombre], comentarios, sonidos[nombre]);

      // Mostrar el animal en la tabla del DOM
      mostrarAnimalEnTabla(animal, datos); // Pasar los datos como argumento adicional

      // Devolver el formulario a un estado inicial después de registrar el animal
      document.getElementById("animal").value = "";
      document.getElementById("edad").value = "";
      document.getElementById("comentarios").value = "";
    });
  } catch (error) {
    console.error("Hubo un problema al cargar los datos de los animales:", error);
  }
})();

// Función para mostrar un animal en la tabla del DOM
function mostrarAnimalEnTabla(animal, datos) {
  // Añadir datos como parámetro
  const tablaAnimales = document.getElementById("Animales");
  const nuevoAnimal = document.createElement("div");
  nuevoAnimal.classList.add("animal");
  nuevoAnimal.innerHTML = `
    <div class="card m-2" style="width: 18rem;">
      <img src="${animal.img}" class="card-img-top" alt="${animal.nombre}">
      <div class="card-body">
        <h5 class="card-title">${animal.nombre}</h5>
        <p class="card-text">${animal.comentarios}</p>
        <button class="btn btn-primary btnReproducirSonido"><i class="fa-solid fa-volume-high"></i> Reproducir sonido</button>
      </div>
    </div>
  `;
  tablaAnimales.appendChild(nuevoAnimal);

  // Obtener el botón de reproducir sonido dentro del nuevo animal y agregar un evento de clic
  const btnReproducirSonido = nuevoAnimal.querySelector(".btnReproducirSonido");
  btnReproducirSonido.addEventListener("click", () => {
    reproducirSonido(animal.nombre, datos); // Pasar los datos como argumento adicional
  });
}

// Función para reproducir el sonido del animal
function reproducirSonido(nombreAnimal, datos) {
  // Obtener la ruta del sonido del animal
  const rutaSonido = datos.sonidos[nombreAnimal];
  if (!rutaSonido) {
    console.error("No se encontró la ruta del sonido para el animal:", nombreAnimal);
    return;
  }

  // Reproducir el sonido
  const player = document.getElementById("player");
  player.src = rutaSonido;
  player.play();
}

// Función para cargar la página al recargar
window.onload = () => {
  // Vaciar los campos al cargar la página
  document.getElementById("animal").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("comentarios").value = "";
};
