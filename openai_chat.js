import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function fetchChatCompletion() {
    const messages = [
        {
            role: 'system',
            content: 'You are a helpful general knowledge expert.'
        },
        {
            role: 'user',
            content: 'Who invented the television?'
        }
    ];

    try {
        const response = await openai.chat.completions.create({
            model: 'text-embedding-3-small',
            messages: messages
        });
        console.log(response);
    } catch (error) {
        console.error('Failed to fetch chat completion:', error);
    }
}

fetchChatCompletion();
