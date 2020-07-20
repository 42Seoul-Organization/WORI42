const express = require('express')
const app = express()
const port = 3002
var path = require('path');

app.use(express.static(path.join(__dirname, 'react/build')));
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))