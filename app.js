const express = require('express')
var logger = require('morgan');
var cors = require('cors')
var path = require('path')

const app = express()
const port = process.env.PORT || 3007

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'react/build')));

app.get('/test', (req, res) => res.send('Hello World!'))

const covid19 = require('./routes/covid19');
app.use('/covid19', covid19);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    console.log(err.message);
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))