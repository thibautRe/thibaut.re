var express = require('express');
var stylus = require('stylus');
var projects = require('./src/projects')
var app = express();


app.set('views', __dirname + '/views/templates');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(stylus.middleware({
    src: __dirname + '/styles/',
    dest: __dirname + '/public/',
    compile: function(str, path) {
        return stylus(str).set('filename', path);
    }
}));
app.use(express.static('public'));

app.get("/", function(req, res) {
    projects.getAll(function(err, allProjects) {
        res.render("index", {projects: allProjects});
    });
});

app.get("/project/:urlname", function(req, res) {
    projects.get(req.params.urlname, function(err, project) {
        if (err != null || project == null) {
            return error404Handler(req, res);
        }
        res.render("project", {project: project});
    });
});

var error404Handler = function(req, res) {
    res.status(400);
    res.render('errors/404.jade');
};

app.use(error404Handler);

var server = app.listen(3100, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('thibaut.re listening at http://%s:%s', host, port);
});