document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const fullText = button.previousElementSibling;
    const summary = fullText.previousElementSibling; // Kratak uvod

    if (fullText.classList.contains('hidden')) {
      fullText.classList.remove('hidden');
      summary.classList.add('hidden'); // Sakrij kratak uvod
      button.textContent = 'Read less';
    } else {
      fullText.classList.add('hidden');
      summary.classList.remove('hidden'); // Prikaži kratak uvod
      button.textContent = 'Read more';
    }
  });
});


