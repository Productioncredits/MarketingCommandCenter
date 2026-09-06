const button = document.getElementById('welcomeButton');

button?.addEventListener('click', () => {
  button.textContent = 'App running';
  button.disabled = true;
});
