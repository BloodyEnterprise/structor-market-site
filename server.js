var fs = require('fs-extra');
var path = require('path');
var express = require('express');
var rewrite = require('express-urlrewrite');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

// Emulate REST service API, use http://localhost:3000 in proxy settings of Structor.
var serverFakeDataDirPath = path.join(__dirname, 'server-data');

app.get('/rbs/getProjectGalleryList', function(req, res) {
    fs.readJSON(path.join(serverFakeDataDirPath, 'getProjectGalleryList.json'), {encoding: 'utf8'}, function(err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});
app.get('/rbs/downloadGalleryFile', function(req, res) {
    fs.readFile(path.join(serverFakeDataDirPath, '__app.tar.gz'), function(err, data) {
        res.setHeader('Content-Type', 'application/x-gzip');
        res.setHeader('Content-Disposition', 'attachment; filename="app.tar.gz"');
        res.send(data);
    });
});
app.get('/rbs/getProjectById', function(req, res) {
    fs.readJSON(path.join(serverFakeDataDirPath, 'getProjectGalleryList.json'), {encoding: 'utf8'}, function(err, data) {
        var projectId = req.query.projectId;
        var dataRes = [];
        data.data.forEach(function(item){
            if(item.projectId === parseInt(projectId)){
                dataRes.push(item);
            }
        });
        res.setHeader('Content-Type', 'application/json');
        if(dataRes.length > 0){
            res.send( { "data": dataRes[0] } );
        } else {
            res.send( { "data": {"projectName": "Not found"} } );
        }
    });
});
app.use('/rbs/preview', express.static(serverFakeDataDirPath));

// Routes for real application with React-Router

app.use('/resources', express.static(path.join(__dirname, 'public/resources')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(rewrite('/*', '/index.html'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
