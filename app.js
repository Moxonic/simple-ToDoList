const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+ '/date.js');

const app = express();
var itemsAdded=[];
var workItemsAdded=[];

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true})); //necesarry for post request 
app.use(express.static(__dirname + "/public"));     //set  static folder for server to reach files 

app.get('/', function (req, res) {
    res.render('list', { listTitle: date(), newItems: itemsAdded, route: '/' })  /* render list.ejs and pass variables*/
});

app.post('/', function(req,res){
    console.log(req.body);
    itemsAdded.push(req.body.newTask);
    res.redirect('/');
})

app.get('/work', function(req,res){
    res.render('list', {listTitle:'Working List', newItems: workItemsAdded, route: '/work' })
})
app.post('/work', function(req,res){
    workItemsAdded.push(req.body.newTask);
    res.redirect('/work');
})

app.get('/about', (req,res)=>{
    res.render('about');
})

app.listen(3000, function () {
    console.log('Server started on port 3000');
});