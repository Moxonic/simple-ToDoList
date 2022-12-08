const express = require('express');
const bodyParser = require('body-parser');
let ejs = require('ejs');

const app = express();
var itemsAdded=['first item'];

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true})); //necesarry for post request 


app.get('/', function (req, res) {

    var today = new Date();
    var options = { weekday: 'long', day: 'numeric', month:'long'}
    var day = today.toLocaleDateString('eng-US',options);

    res.render('list', { dateString: day, newItems: itemsAdded })  /* render list.ejs and pass variables*/
});

app.post('/', function(req,res){
    itemsAdded.push(req.body.newTask);
    
    res.redirect('/');
})

app.listen(3000, function () {
    console.log('Server started on port 3000');
});