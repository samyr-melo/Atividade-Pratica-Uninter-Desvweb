const copyEmailBtn = document.getElementById('copy-email');
copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('devsamyrmelo@gmail.com');
    copyEmailBtn.textContent = '✅ Copiado!';
    setTimeout(() => { copyEmailBtn.textContent = '📧 Copiar E-mail'; }, 2000);
});


document.getElementById('linkedin-btn').addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/dev-samyrmelo/', '_blank'); // Substitua pelo seu link
});


document.getElementById('github-btn').addEventListener('click', () => {
  window.open('https://github.com/samyr-melo', '_blank'); // Substitua pelo seu link
});