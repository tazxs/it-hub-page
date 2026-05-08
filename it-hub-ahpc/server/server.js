import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, '../dist')));

// Newsletter Endpoint
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  try {
    const subscriber = await prisma.newsletter.create({
      data: { email },
    });
    return res.status(201).json({ success: true, data: subscriber });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Email already subscribed' });
    }
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Contact Message Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const contactMessage = await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });
    return res.status(201).json({ success: true, data: contactMessage });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Programs Endpoint
app.get('/api/programs', async (req, res) => {
  try {
    const programs = await prisma.program.findMany();
    return res.json({ success: true, data: programs });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin Get Messages Endpoint
app.get('/api/admin/messages', async (req, res) => {
  try {
    const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } });
    return res.json({ success: true, data: messages });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin Get Newsletter Endpoint
app.get('/api/admin/newsletter', async (req, res) => {
  try {
    const subscribers = await prisma.newsletter.findMany({ orderBy: { createdAt: 'desc' } });
    return res.json({ success: true, data: subscribers });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Production server running at http://localhost:${PORT}`);
});
