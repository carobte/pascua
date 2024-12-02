import '../css/style.css';

document.getElementById('surpriseBtn').addEventListener('click', () => {
  // alert('¡Sorpresa! Los huevos de Pascua están listos para ser encontrados!');

  // Cambiar colores de los huevos para hacerlos más divertidos
  const eggs = document.querySelectorAll('.egg');
  eggs.forEach(egg => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    egg.style.backgroundColor = randomColor;
  });
});