
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


const users = [];


app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;


  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }


  const hashedPassword = await bcrypt.hash(password, 10);


  users.push({ email, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;


  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }


  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }


  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
