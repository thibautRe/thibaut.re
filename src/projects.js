var MongoClient = require("mongodb").MongoClient
var mongoUrl = "mongodb://localhost:27017/thibaut-re";

module.exports = {
    getAll: function(callback) {
        MongoClient.connect(mongoUrl, function(err, db) {
            var collection = db.collection("projects");

            collection.find({}).toArray(function(err, projects) {
                callback(err, projects);
                db.close();
            });
        });
    },
    get: function(url_name, callback) {
        MongoClient.connect(mongoUrl, function(err, db) {
            var collection = db.collection("projects");
            collection.findOne({url_name: url_name}, function(err, project) {
                callback(err, project);
                db.close();
            });
        });
    }
}