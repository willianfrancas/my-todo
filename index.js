const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/my-todo'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/my-todo/index.html');
});

app.listen(port, () => {
    console.log(`Server is listnening on port: ${port}`);
});