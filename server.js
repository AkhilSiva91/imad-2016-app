var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one':{
        title: 'Article-One | Akhil Siva',
        heading: 'Article One',
        date: 'sep 05, 2016',
        content: `
        <p>
        content on article One
        <p/>`
    },
    'article-two':{
        title: 'Article-Two | Akhil Siva',
        heading: 'Article Two',
        date: 'sep 10, 2016',
        content: `
        <p>
        content on article two
        <p/>`
        
    },
    'article-three':{
        title: 'Article-Three | Akhil Siva',
        heading: 'Article Tnree',
        date: 'sep 15, 2016',
        content: `
        <p>
        content on article three
        <p/>`
        
    }
};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale-1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            
            <body>
                <div class="container">
                    <div>
                       <a href="/">Home</a>
                    </div>
                    <hr/>
                    
                    <h3>
                    ${heading}
                    </h3>
                    
                    <div> 
                    ${date}
                    </div>
                    
                    <div>
                        ${content}
                    </div>
                    
                </div>
            </body>
        </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
