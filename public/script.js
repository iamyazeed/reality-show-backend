document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const code = document.getElementById('code').value;

  try {
    const res = await fetch('https://reality-show-backend.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, code })
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem('candidate', JSON.stringify(data.data));
      window.location.href = 'details.html'; // Make sure this page exists
    } else {
      document.getElementById('message').textContent = data.message;
    }
  } catch (err) {
    console.error('Login error:', err);
  }
});
