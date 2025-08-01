const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load candidates data
const candidates = JSON.parse(fs.readFileSync('./candidates.json'));

app.post('/login', (req, res) => {
  const { name, code } = req.body;
  const user = candidates.find(
    (c) => c.name.toLowerCase() === name.toLowerCase() && c.code === code
  );

  if (user) {
    res.json({ success: true, data: user });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
