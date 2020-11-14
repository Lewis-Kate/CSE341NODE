const express = require('express');
const app = express();

const calculateRate = require('./lib/calculateRate');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

.get('/', myCallbackFunction)

function myCallbackFunction() {
  res.render('pages/index')
}

app.get('/results', calculateRate)

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});