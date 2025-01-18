const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');  // Match this with your test case
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

app.get('/view', (req, res)=> {
    res.send('view');
}

module.exports = app;  // Export app for testing
