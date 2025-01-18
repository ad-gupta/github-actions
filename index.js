const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');  // Match this with your test case
});

// Addition API
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: "Invalid input, numbers required" });
    }
    res.json({ result: num1 + num2 });
});

// Subtraction API
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: "Invalid input, numbers required" });
    }
    res.json({ result: num1 - num2 });
});

// Subtraction API
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: "Invalid input, numbers required" });
    }
    res.json({ result: num1 * num2 });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;  // Export app for testing
