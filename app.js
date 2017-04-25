var express = require('express'); //access the library of express 

var app = express(); //use the library of express.."turn on"" the library.

var port = 5000;

app.use(express.static('public'));

app.set('views', './src/views'); //where to find views
app.set('view engine', 'ejs'); //how to render the views 

var locals = {
    title: "Hello From Express",
    date: new Date(),
    list: ['a', 'b','c']
};
app.get('/', function(req,res){
        res.render("index", locals);
});

app.listen(port, function(err){
    console.log("listening on port: " + port);

});
