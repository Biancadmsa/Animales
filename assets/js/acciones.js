// Simulación de consulta asíncrona
export async function obtenerDatosAnimales() {
  // Retorna una nueva promesa
  return new Promise((resolve, reject) => {
    // Simula un retardo de 2 segundos antes de ejecutar el código dentro de la función de retardo
    setTimeout(() => {
      // Objeto que contiene imágenes y sonidos de varios animales
      const datos = {
        imagenes: {
          Leon: "./assets/imgs/Leon.png",
          Lobo: "./assets/imgs/Lobo.jpg",
          Oso: "./assets/imgs/Oso.jpg",
          Serpiente: "./assets/imgs/Serpiente.jpg",
          Aguila: "./assets/imgs/Aguila.png",
        },
        sonidos: {
          Leon: "./assets/sounds//Rugido.mp3",
          Lobo: "./assets/sounds/Aullido.mp3",
          Oso: "./assets/sounds/Grunido.mp3",
          Serpiente: "./assets/sounds/Siseo.mp3",
          Aguila: "./assets/sounds/Chillido.mp3",
        },
      };
      // Simula un error aleatorio con una probabilidad del 50%
      const randomError = Math.random() > 0.5;
      // Si ocurre un error, rechaza la promesa con un mensaje de error
      if (randomError) {
        reject("Hubo un problema al cargar los datos de los animales.");
      } else {
        // Si no hay error, resuelve la promesa con los datos de los animales
        resolve(datos);
      }
    }, 2000); // Fin del setTimeout, retardo de 2000 milisegundos (2 segundos)
  }); // Fin de la promesa
} // Fin de la función obtenerDatosAnimales
