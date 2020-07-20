const express = require('express')
const app = express()
const port = process.env.PORT || 3001
var path = require('path');

app.use(express.static(path.join(__dirname, 'react/build')));
app.get('/test', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))