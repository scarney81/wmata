/*globals __dirname, process*/
var express     = require('express'),
    connect     = require('connect-assets'),
    connectJade = require('connect-assets-jade'),
    http        = require('http'),
    path        = require('path');

var app = express();
connect.jsCompilers.jade = connectJade();
app.use(connect());

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });
// TODO: REPLACE WITH CUSTOM FAVICON
// app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') === 'development') app.use(express.errorHandler());

app.get('/', function(req, res, next) {
  res.render('index');
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
