import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.static('public'));



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
