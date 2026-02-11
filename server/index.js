import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(bodyParser.json());
app.use(express.static("sideQuests/dist"));  

const DATA_PATH = path.join(__dirname, "server", "data", "quests.json");

// Simple API endpoint for testing
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// placeholders for future API routes (fetch and post quests, etc.)
app.get('/api/quests', (req, res) => { });
app.get('/api/quests/:id', (req, res) => { });
app.post('/api/quests', (req, res) => { });
app.put('/api/quests/:id', (req, res) => { });
app.delete('/api/quests/:id', (req, res) => { });


//start server
app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
}); 

// Helper function to read quests from the JSON file

// read / write json 
function readData() {
    if(!fs.existsSync(DATA_PATH)) fs.writeFileSync(DATA_PATH,'[]');
    return JSON.parse(fs.readFileSync(DATA_PATH,'utf8')); 
}

function writeData(data) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2)); 
}

//helper function to get random quest
function getRandomQuest() {
    const quests = readData();
    if(quests.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * quests.length);
    return quests[randomIndex];
}



//get all quests
app.get('/api/quests', (req, res) => {
    const quests = readData();
    res.json(quests);
});

//get quest by id
app.get('/api/quests/:id', (req, res) => {
    const quests = readData();
    const quest = quests.find(q => q.id === req.params.id);
    if(quest) {
        res.json(quest);
    } else {
        res.status(404).json({ error: 'Quest not found' });
    }
});

//get random quest
app.get('/api/quests/random', (req, res) => {
    const quest = getRandomQuest();
    if(quest) {
        res.json(quest);
    } else {
        res.status(404).json({ error: 'No quests available' });
    }
});



