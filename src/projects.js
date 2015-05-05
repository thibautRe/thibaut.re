var MongoClient = require("mongodb").MongoClient
var assert = require("assert");
var mongoUrl = "mongodb://localhost:27017/thibaut-re";

module.exports = {
    getAll: function(callback) {
        MongoClient.connect(mongoUrl, function(err, db) {
            assert.equal(null, err);
            var collection = db.collection("projects");

            collection.find({}).toArray(function(err, projects) {
                assert.equal(null, err);
                callback(projects);
            });
        });
    }
}