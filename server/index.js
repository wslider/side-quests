import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors()); 
app.use(express.json()); 

// Simple API endpoint for testing
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// placeholders for future API routes (fetch and post quests, etc.)
app.get('/api/quests', (req, res) => { });
app.get('/api/quests/:id', (req, res) => { });
app.post('/api/quests', (req, res) => { });

const PORT = process.env.port || 4000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});