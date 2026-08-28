import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { handleChat, handleAnalyzeBill } from './src/server/geminiService';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: '25mb' }));

app.post('/api/chat', async (req, res) => {
  try {
    const result = await handleChat(req.body.messages || []);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Server error' });
  }
});

app.post('/api/analyze-bill', async (req, res) => {
  try {
    const result = await handleAnalyzeBill(req.body);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Server error' });
  }
});

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Projeto Energia server running on port ${PORT}`);
});
