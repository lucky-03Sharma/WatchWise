import express from 'express';

const router = express.Router();

// In-memory users storage with default demo user
const users = [
  {
    id: 'user_1',
    name: 'Alex Johnson',
    email: 'demo@watchwise.tv',
    password: 'password123',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    joinedAt: new Date().toISOString()
  }
];

// Helper to generate simple token
const createToken = (userId) => `ww_token_${userId}_${Date.now()}`;

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ status: 'error', message: 'Email and password are required' });
  }

  const cleanEmail = email.trim().toLowerCase();
  const user = users.find(u => u.email.toLowerCase() === cleanEmail);

  if (!user || user.password !== password) {
    return res.status(401).json({ status: 'error', message: 'Invalid email or password' });
  }

  const token = createToken(user.id);
  const { password: _, ...safeUser } = user;

  res.json({
    status: 'ok',
    message: 'Login successful',
    token,
    user: safeUser
  });
});

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ status: 'error', message: 'Name, email, and password are required' });
  }

  const cleanEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({ status: 'error', message: 'Please enter a valid email address' });
  }

  if (password.length < 6) {
    return res.status(400).json({ status: 'error', message: 'Password must be at least 6 characters long' });
  }

  const existing = users.find(u => u.email.toLowerCase() === cleanEmail);
  if (existing) {
    return res.status(409).json({ status: 'error', message: 'An account with this email already exists' });
  }

  const newUser = {
    id: `user_${Date.now()}`,
    name: name.trim(),
    email: cleanEmail,
    password,
    avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name.trim())}&backgroundColor=6366f1,ec4899`,
    joinedAt: new Date().toISOString()
  };

  users.push(newUser);
  const token = createToken(newUser.id);
  const { password: _, ...safeUser } = newUser;

  res.status(201).json({
    status: 'ok',
    message: 'Account created successfully',
    token,
    user: safeUser
  });
});

// GET /api/auth/me
router.get('/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ status: 'error', message: 'Not authenticated' });
  }

  const token = authHeader.replace('Bearer ', '');
  const parts = token.split('_');
  const userId = parts[2] ? `${parts[1]}_${parts[2]}` : parts[1];
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(401).json({ status: 'error', message: 'Session expired or invalid user' });
  }

  const { password: _, ...safeUser } = user;
  res.json({ status: 'ok', user: safeUser });
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.json({ status: 'ok', message: 'Logged out successfully' });
});

export default router;
