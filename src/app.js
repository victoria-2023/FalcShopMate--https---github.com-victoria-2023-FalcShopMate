const express = require('express');
const bodyParser = require('body-parser');
const mockData = require('./data/mockData.json'); // Importing mock data

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

// Mock inventory route
app.get('/api/inventory', (req, res) => {
    res.json(mockData.inventory);
});

// Mock recommendations route
app.get('/api/recommendations/:userId', (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const recommendations = mockData.recommendations.find(r => r.userId === userId);
    if (recommendations) {
        res.json(recommendations.products.map(id => mockData.inventory.find(item => item.productId === id)));
    } else {
        res.status(404).send('No recommendations found for this user.');
    }
});

// Mock chat route
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    const chatResponse = mockData.chatResponses.find(resp => message.includes(resp.message));
    if (chatResponse) {
        res.json({ reply: chatResponse.response });
    } else {
        res.json({ reply: "I'm not sure how to respond to that." });
    }
});

// Echo route to return posted data
app.post('/echo', (req, res) => {
    res.json({
        message: 'Data received successfully',
        yourData: req.body
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
