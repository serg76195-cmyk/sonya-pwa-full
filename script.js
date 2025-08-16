document.getElementById('startButton').addEventListener('click', () => {
  document.getElementById('status').innerText = 'Соня готова к работе ✅';
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker зарегистрирован"))
    .catch(err => console.log("Ошибка Service Worker:", err));
}
