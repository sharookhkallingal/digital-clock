function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  function toggleTheme() {
    document.body.classList.toggle('dark');
  }

  document.getElementById('toggle-btn').addEventListener('click', toggleTheme);

  // Update the clock every second
  setInterval(updateClock, 1000);

  // Initial clock update
  updateClock();