import '../css/style.css'

// script.js
const eggs = document.querySelectorAll('.egg');

// Asignar un evento de clic a cada huevo
eggs.forEach((egg, index) => {
  egg.addEventListener('click', () => {
    egg.style.backgroundColor = '#90ee90'; // Cambia el color del huevo al hacer clic
    egg.textContent = '🌟'; // Muestra un ícono de estrella
    alert(`¡Encontraste el huevo #${index + 1}! 🥚`);
  });
});

