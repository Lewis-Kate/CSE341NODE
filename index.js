const express = require('express');
const app = express();

const calculateRate = require('./lib/calculateRate');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.render('pages/form'))

app.get('/results', calculateRate)

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var fs = require('fs');
     var myCss = {
         style : fs.readFileSync('/public/styles.css','utf8')
     };

     app.get('/', function(req, res){
       res.render('form.ejs', {
       title: 'Postal Rate Calculator Index',
       myCss: myCss
      });
    });
         
       app.get('/', function(req, res){
       res.render('results.ejs', {
       title: 'Postal Rate Calculator Results',
       myCss: myCss
      });
     });