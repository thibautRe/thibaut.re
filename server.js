var express = require('express');
var projects = require('./src/projects')
var app = express();

app.set('views', __dirname + '/views/templates');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static('public'));
app.get("/", function(req, res) {
    projects.getAll(function(allProjects) {
        res.render("index", {projects: allProjects});
    });
});

var server = app.listen(3100, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('thibaut.re listening at http://%s:%s', host, port);
});