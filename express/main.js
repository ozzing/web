const express = require('express')
const app = express()
const port = 3000
var fs = require('fs')
var template = require('./lib/template.js')
var bodyParser = require('body-parser')
var compression = require('compression')
var helmet = require('helmet')
app.use(helmet());

var session = require('express-session')
var FileStore = require('session-file-store')(session)


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());
app.use(session({
  secret: 'asdfasdfasdf',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}))
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});

var topicRouter = require('./routes/topic');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use('/auth', authRouter);

app.use(function(req, res, next){
  res.status(404).send('SORRY NO SUCH PAGE');
});

app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`);
});
