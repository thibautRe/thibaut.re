var MongoClient = require("mongodb").MongoClient
var assert = require("assert");

var url = "mongodb://localhost:27017/thibaut-re";

var projects = [
    {
        name: "SCPWNR*",
        url_name: "scpwnr",
        type: "Webapp",
        thumb_url: "/assets/img/thumbs/scpwnr.jpg",
        description: "SCPWNR is a Webapp whose purpose is to download SoundCloud tracks, lists or artists page in a local folder. It was a personnal project I did for my own needs.",
        technologies: [
            "HTML5",
            "CasperJS",
            "KnockoutJS",
            "NodeJS",
            "ExpressJS",
            "Sockets.IO"
        ],
        links: [
            {url:"https://github.com/thibautre/scpwnr", fa_icon:"fa-github", name: "Github"}
        ]
    }, {
        name: "INTech",
        url_name: "intech",
        type: "Robot",
        thumb_url: "/assets/img/thumbs/robot.jpg",
        description: "This was a student project. We had to imagine, design and develop an autonomous robot for the French Robotic Tournament. The robot had to perform several tasks and obtain more points than its opponent. Additionaly, it was not allowed to bump in its opponent.",
        technologies: [
            "C++",
            "Python",
            "AVR Microchips"
        ],
        links: [
            {url:"https://www.youtube.com/watch?v=nhUJaroAsVs", fa_icon:"fa-youtube", name: "Youtube"}
        ]
    }, {
        name: "Domora.com",
        url_name: "domora.com",
        type: "Website",
        thumb_url: "/assets/img/thumbs/domora_web.jpg",
        description: "The website for my Start-up, Domora. We wanted a modern website without the boostrap-like aspect.",
        technologies: [
            "HTML5",
            "LESS",
            "Javascript",
            "Symfony2"
        ],
        links: [
            {url:"http://domora.com", fa_icon:"fa-link", name: "Website"}
        ]
    }, {
        name: "Thibaut.re",
        url_name: "thibaut.re",
        type: "Website",
        thumb_url: "/assets/img/thumbs/thibaut.re.jpg",
        description: "This very website. Its purpose is to display my different work, and optionnaly to show a demo of each work",
        technologies: [
            "HTML5",
            "Jade",
            "Stylus",
            "Javascript",
            "NodeJS",
            "ExpressJS",
            "MongoDB"
        ],
        links: []
    }, {
        name: "Go Raytracer",
        url_name: "go-raytracer",
        type: "Software",
        thumb_url: "/assets/img/thumbs/go-raytracer.jpg",
        description: "A raytracer written in Golang, currently in developpement",
        technologies: [
            "Golang"
        ],
        links: [
            {url:"http://github.com/thibautre/go-raytracer", fa_icon:"fa-github", name: "Github"}
        ]
    }
]

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    var collection = db.collection("projects");
    collection.drop(function() {
        collection.insert(projects, function(err, result) {
            assert.equal(null, err);
            assert.equal(projects.length, result.result.n);
            assert.equal(projects.length, result.ops.length);
            console.log("successfully inserted " + projects.length + " projects.")

            db.close();
        });
    });
});