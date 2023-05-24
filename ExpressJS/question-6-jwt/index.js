import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;
const SECRET_KEY = 'my-secret-key';

app.use(express.json());


const users = [];

// Sign-up endpoint
app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Checking if user already exists
    if (users.find(user => user.username === username)) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating a new user
    const user = {
      username,
      password: hashedPassword
    };

    // Saving user in the database
    users.push(user);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Finding the user
    const user = users.find(user => user.username === username);

    // Checking if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Comparing the passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the password is valid
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generating a JWT 
    const token = jwt.sign({ username }, SECRET_KEY);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Internal server error' });
  }
});

// Protected endpoint
app.get('/protected', (req, res) => {
  try {
    // Extracting the token from the Authorization header
    const token = req.headers.authorization.split(' ')[1];

    // Token verification
    const decoded = jwt.verify(token, SECRET_KEY);

    // Extracting the username from the token
    const { username } = decoded;

    res.json({ message: `Welcome, ${username}! This is a protected endpoint.` });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid or missing token' });
  }
});

app.listen(PORT, () => {
  console.log(`Successfully running server ${PORT}`);
});
