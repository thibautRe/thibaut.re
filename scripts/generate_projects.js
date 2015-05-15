var MongoClient = require("mongodb").MongoClient
var assert = require("assert");

var url = "mongodb://localhost:27017/thibaut-re";

var projects = [
    {
        name: "SCPWNR*",
        url_name: "scpwnr",
        type: "Webapp",
        date: "2014",
        thumb_url: "http://thibaut.re/static/scpwnr.jpg",
        description: "SCPWNR is a Webapp whose purpose is to download SoundCloud tracks, lists or artists page in a local folder.",
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
        ],
        demo: {
            url:"http://thibaut.re:3000"
        }
    }, {
        name: "INTech",
        url_name: "intech",
        type: "Robot",
        date: "2011",
        thumb_url: "http://thibaut.re/static/robot.jpg",
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
        date: "2014",
        thumb_url: "http://thibaut.re/static/domora_web.jpg",
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
        name: "Domora Mobile App",
        url_name: "domora_app",
        type: "Webapp",
        date: "2014",
        thumb_url: "http://thibaut.re/static/domora_app.jpg",
        description: "The mobile app for my Start-up, Domora. It was a mobile-first hybrid webapp, build with Phonegap/Cordova, and powered by HTML5, LESS and KnockoutJS",
        technologies: [
            "HTML5",
            "LESS",
            "KnockoutJS",
            "RequireJS",
            "Grunt",
            "Mocha",
            "Webfont"
        ],
        links: []
    }, {
        name: "Thibaut.re",
        url_name: "thibaut.re",
        type: "Website",
        date: "2015",
        thumb_url: "http://thibaut.re/static/thibaut.re.jpg",
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
        links: [
            {url: "https://github.com/thibautre/thibaut.re", fa_icon:"fa-github", name:"GitHub"},
            {url: "/", fa_icon: "fa-link", name:"Website"}
        ]
    }, {
        name: "Go Raytracer",
        url_name: "go-raytracer",
        type: "Software",
        date: "2015",
        thumb_url: "http://thibaut.re/static/go-raytracer.jpg",
        description: "A raytracer written in Golang, currently in developpement",
        technologies: [
            "Golang"
        ],
        links: [
            {url:"http://github.com/thibautre/go-raytracer", fa_icon:"fa-github", name: "GitHub"}
        ]
    }, {
        name: "Domora 3D Clip",
        url_name: "domora_3D_clip",
        type: "3D Clip",
        date: "2014",
        thumb_url: "http://thibaut.re/static/domora_clip.jpg",
        description: "A short advertising clip made for my Start-up, Domora. I wanted a dynamic movie clip to explain the features of our product. Python scripts were used for dynamic animation, like the floor creation at the very beginning.",
        technologies: [
            "Blender",
            "Python"
        ],
        links: [
            {url:"https://www.youtube.com/watch?v=N-XmCWkpoH4", fa_icon:"fa-youtube", name: "Youtube"}
        ]
    }, {
        name: "Domora Crowdfunding Clip",
        url_name: "domora_crowdfunding_clip",
        type: "Movie clip",
        date: "2014",
        thumb_url: "http://thibaut.re/static/domora_clip2.jpg",
        description: "The Crowdfunding clip for my Start-up, Domora. We wanted something fresh and easy to understand. My job, aside from designing the content and the story of the clip, was to film and edit the video, adding some 3D effects and nice background music.",
        technologies: [
            "Adobe Premiere Pro",
            "Blender"
        ],
        links: [
            {url:"https://vimeo.com/113258176", fa_icon:"fa-vimeo-square", name: "Vimeo"},
            {url:"http://igg.me/at/domora", fa_icon:"fa-link", name: "Indiegogo "}
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