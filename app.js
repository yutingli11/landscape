const fs = require('fs');
const http = require('http');
const https = require('https');
var express = require('express');
var path = require('path');
var expresshbs = require('express-handlebars');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var favicon = require('serve-favicon');

var app = express();

app.set('http_port', process.env.PROD_HTTP_PORT || 3000);
app.set('views', path.join(__dirname, 'app/views/pages'));
app.engine('.hbs', expresshbs({
    defaultLayout: 'layout',
    layoutsDir: 'app/views/layouts/',
    partialsDir: 'app/views/components/',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('stylus').middleware({ src: __dirname + '/app/public' }));
app.use(express.static(path.join(__dirname, 'app/public')));
// app.use(express.static(__dirname + '/app/public'));
app.use(favicon(__dirname + '/app/public/favicon.ico'));
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    console.log('%s %s %s', req.method, req.url, res.statusCode);
    next();
});

if (app.get('env') == 'development') {
    app.use(errorHandler());
}

if (process.env.NODE_ENV == 'production') {

    // app.get("*", function (req, res, next) {
    //     res.redirect("https://" + req.headers.host + "/" + req.path);
    // });

    app.use(function (req, res, next) {
        if (req.secure) {
            next();
        } else {
            res.redirect('https://' + req.headers.host + req.url);
        }
    });

    const options = {
        cert: fs.readFileSync('/etc/letsencrypt/live/landscapeholidayvilla.com/fullchain.pem'),
        key: fs.readFileSync('/etc/letsencrypt/live/landscapeholidayvilla.com/privkey.pem')
    };

    const httpsServer = https.createServer(options, app);

    httpsServer.listen(443, () => {
        console.log('HTTPS Server running on port 443');
    });

}

require('./app/routes/router')(app);

const httpServer = http.createServer(app);

httpServer.listen(app.get('http_port'), () => {
    console.log('HTTP Server running on port ' + app.get('http_port'));
});

// http.createServer(app).listen(app.get('port'), function(){
// 	console.log('Express server listening on port ' + app.get('port'));
// });