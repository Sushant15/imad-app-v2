var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One| Sushant Garg',
        heading: 'Article One',
        date: '7 March, 2017',
        content:`
            <p>
                This is my Article One. This is my Article One. This is my Article One. This is my Article One. This is my Article One. This is my Article One. This is my Article One.
            </p>`
            },
    'article-two': {
        title: 'Article Two| Sushant Garg',
        heading: 'Article Two',
        date: '26 January, 2017' ,
        content: '<p>This is my Article Two.</p>'
    },
    'article-three': {
        title: 'Article Three| Sushant Garg',
        heading: 'Article Three',
        date: '15 April, 2017' ,
        content: '<p>This is my Article Three. This is my Article One.</p>'
    }
};

function createTemplate(data){
var title =data.title;
var date =data.date;
var heading =data.heading;
var content =data.content;

var htmlTemplate=`
    <html>
    <head>
        <title>${title} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
            <div>
                ${date}
            </div>
            <h1>
                ${heading}
            </h1>
            <div>
                ${content}
            </div>    
        </div>
    </body>
</html>
` ;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
   counter=counter + 1;
   res.send(counter.toString());
});

app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names= [];
app.get('/submit-name/:name' , function(req, res) {
    // Get the name from the request
    var name= req.param.name; //TODO
    names.push(name);
    // JSON javascript object notation
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('IMAD course app listening on port ${port}!');
});
