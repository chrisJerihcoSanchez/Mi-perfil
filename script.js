// Referencia al avatar
const avatar = document.getElementById("avatar");

// Lista de imágenes dentro de la carpeta "imagen"
const avatars = [
    "imagen/AvatarMaker.png", // Asegúrate de que estas rutas sean correctas
    "imagen/face.jpeg",
    "imagen/can.jpeg"
];

let current = 0;

// Verificación para ver si las imágenes están siendo cargadas correctamente
console.log("Imagenes cargadas: ", avatars);

// Función para verificar si las imágenes están disponibles
function checkImageAvailability(imagePath) {
    const img = new Image();
    img.onload = function() {
        console.log(`${imagePath} cargada correctamente.`);
    };
    img.onerror = function() {
        console.log(`Error al cargar la imagen: ${imagePath}`);
    };
    img.src = imagePath;
}

// Verificar si las imágenes existen
avatars.forEach(checkImageAvailability);

// Cambia el avatar cada 3 segundos
setInterval(() => {
    current = (current + 1) % avatars.length;
    
    // Para un efecto suave:
    avatar.style.opacity = 0; // Ocultamos el avatar antes de cambiar la imagen
    setTimeout(() => {
        console.log("Cambiando imagen a:", avatars[current]); // Verificamos la imagen que se va a mostrar
        avatar.src = avatars[current]; // Cambia la fuente de la imagen
        avatar.style.opacity = 1; // Vuelve a mostrar el avatar con la nueva imagen
    }, 300);
}, 3000);

// Muestra un mensaje al pasar el mouse sobre el <h1>
document.querySelector('h1').addEventListener('mouseenter', () => {
    alert('¡Hola, gracias por visitar mi perfil!');
});
