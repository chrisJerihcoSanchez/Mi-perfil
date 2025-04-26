// Avatar
const avatar = document.getElementById('avatar');
const avatars = [
    'imagen/face.jpeg',
    'imagen/AvatarMaker.png',
];

let currentAvatar = 0;

// Función para cambiar el avatar con efecto fade
function changeAvatar(index) {
    avatar.style.opacity = 0;
    setTimeout(() => {
        avatar.src = avatars[index];
        avatar.style.opacity = 1;
    }, 500); // Duración del desvanecimiento
}

// Cambio automático cada 5 segundos
setInterval(() => {
    currentAvatar = (currentAvatar + 1) % avatars.length;
    changeAvatar(currentAvatar);
}, 5000);

// Mostrar el primer avatar
changeAvatar(currentAvatar);

// Animar barras de progreso al cargar
document.querySelectorAll('.progress').forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = width;
    }, 100);
});

// Verificar imágenes (opcional para depuración)
avatars.forEach(src => {
    const img = new Image();
    img.onload = () => console.log(`${src} cargada correctamente`);
    img.onerror = () => console.error(`Error al cargar ${src}`);
    img.src = src;
});
