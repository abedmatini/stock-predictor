import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/api/openai', async (req, res) => {
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`
        },
        body: JSON.stringify({
            prompt: req.body.prompt,
            max_tokens: 50
        })
    });
    const data = await response.json();
    res.send(data);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
