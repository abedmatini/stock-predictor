import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

// Function to get embeddings from OpenAI
async function getEmbeddings(text) {
    const apiKey = process.env.OPENAI_API_KEY; // Ensure you have this in your .env file
    const url = 'https://api.openai.com/v1/embeddings';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };
    const data = {
        model: "text-embedding-3-small",
        input: text
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log('Embeddings:', response.data.data);
    } catch (error) {
        console.error('Error fetching embeddings:', error.response?.data || error.message);
    }
}

// Replace 'Your sample text here' with the text you want to embed
getEmbeddings("Your sample text here");
