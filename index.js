const path = require('path')
const express = require('express');
const app = express();

const movies = require('./lib/movies');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public/'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.render('pages/movies'))

//app.get('/movies', movie)

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


