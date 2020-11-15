const path = require('path')
const express = require('express');
const app = express();

const calculateRate = require('./lib/calculateRate');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public/'));

app.use('/public/', express.static(path.join(__dirname, "../public/")));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.render('pages/form'))

app.get('/results', calculateRate)

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


