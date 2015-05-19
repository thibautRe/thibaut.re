var MongoClient = require("mongodb").MongoClient
var assert = require("assert");

var url = "mongodb://localhost:27017/thibaut-re";

var projects = [
    {
        name: "SCPWNR*",
        url_name: "scpwnr",
        type: "Webapp",
        date: "2014",
        color: "#96e3f2",
        thumb_url: "http://thibaut.re/static/scpwnr2.jpg",
        img_url: "http://thibaut.re/static/scpwnr2-full.jpg",
        description: "SCPWNR is a Webapp whose purpose is to download SoundCloud tracks, lists or artists page in a local folder.",
        article: "# Scrapping SoundCloud\n\n\
I love [SoundCloud](//soundcloud.com). I've discovered a lot of cool songs and have used extensively their website for more than 3 years, liking more than thousand songs and counting.    \n\n\
One day, I was having fun in the Developper Console, and realized that the .mp3 file was streamed with no security, and that I could eventually find the link to the raw .mp3 for every songs posted on that website.   \n\n\
I wanted to see how easy it was to automate this fastidious process with a script. Of course, the link to the URL was not hardcoded in the song's HTML page  － that would have been way too easy. Instead, I had to run the JS client scripts and see what resources were loaded.\n\n\
CasperJS, whose original purpose is to run application tests on a website or a webapp, was used for this task. The script is about 150 lines, and can find the .mp3 links for a single song page, an artist page or a playlist page.\n\n\
# User-_friendlyfying_ SCPWNR*\n\n\
This script was great but not user-friendly enough. I decided to add a web interface, and an ExpressJS server. Of course, scrapping and downloading a 5Mo .mp3 file takes a lot of time, so I chose to use websockets to notify the client of a download in progress or finished. KnockoutJS was used for front-end automation \n\n\
As of today (2015/05/09), I am currently porting the CasperJS script to a SpookyJS script. The difference between SpookyJS and CasperJS is that SpookyJS is a NodeJS module, and can be `require`d, thus allowing a better communication between the ExpressJS server and the scrapping script.\n\n\
Also, don't forget to fork the [source code](//github.com/thibautre/scpwnr) !\n\n\
## Related\n\n\
- [Domora mobile application](/project/domora_app)\n\
",
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
        color: "#ff9967",
        thumb_url: "http://thibaut.re/static/robot2.jpg",
        img_url: "http://thibaut.re/static/robot2-full.jpg",
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
        color: "#eae253",
        thumb_url: "http://thibaut.re/static/domoraweb.jpg",
        img_url: "http://thibaut.re/static/domoraweb-full.jpg",
        description: "The website for my Start-up, Domora. We wanted a modern website without the boostrap-like aspect.",
        article: "\
# A fresh website for a brand new start-up\n\n\
At Domora, we believe that a start-up has to innovate in order to be successful. \n\n\
And we're not only talking about technology innovation. Design and webdesign are crucial for a start-up, especially for a consumer-oriented start-up. Its website must be amazing to create confidence. We wanted an **amazing** website.  \n\n\
Identity is also crucial for a start-up. We got tired of all the boostrap-powered websites, with the same design and the same patterns : a big blurred background image fullscreen with a small caption over to describe the product in a few words, the \"so 2013-ish\" parallax effect, the triple-columned part with huge non-descriptive icons to describe the features of a product... All these were design patterns that we absolutely wanted to avoid, in order to create a true unique website.  \n\n\
![Domora.com](//thibaut.re/static/article/domora.com.jpg)\n\n\
# An extensible website for a growing start-up\n\n\
When you start a project from the ground up, you have two choices :\n\n\
1. Quick and dirty    \n\
2. Slow-paced and well-built\n\n\
We chose the second solution.\n\n\
Since it's mainly just one landing page, we could have gone with a bare `index.html` and `style.css` file, but we chose to setup a Symfony2 server and to use LESS to structure our CSS in modules. Our Javascript code was also divided in several modules, shrinked in production for performance purpose.\n\n\
Adding a *press* or a *contact* part in the website was then a simple trick : one more TWIG template inherited from a standard base, a few more LESS lines and *voilà*.\n\n\
## Related\n\n\
- [Domora mobile application](/project/domora_app)\n\
- [Domora Crowdfunding clip](/project/domora_crowdfunding_clip)\n\
- [Domora 3D clip](/project/domora_3D_clip)\
",
        technologies: [
            "HTML5",
            "LESS",
            "Javascript",
            "Symfony2"
        ],
        links: [
            {url:"http://domora.com/en", fa_icon:"fa-link", name: "Website"}
        ]
    }, {
        name: "Domora Mobile App",
        url_name: "domora_app",
        type: "Webapp",
        date: "2014",
        color: "#637ac7",
        thumb_url: "http://thibaut.re/static/domorapp.jpg",
        img_url: "http://thibaut.re/static/domorapp-full.jpg",
        description: "The mobile app for my Start-up, Domora. It was a mobile-first hybrid webapp, build with Phonegap/Cordova, and powered by HTML5, LESS and KnockoutJS",
        article: "\
# Designed for Usability\n\n\
\
Domora's mobile app has been thought from the beginning for an everyday use, with a high focus on accessibility. Because of its very purpose, we wanted to create something both powerful and ridiculously simple to use, even for non tech-friendly people.  \n\n\
We designed 2 types of concepts : *devices* and *panels*. Panels are intelligently generated by the application given the number and types of devices owned by the user. For instance, if a user owns a TV and a DVD player, the app will automatically generate a \"Watch a Movie\" panel. Dead simple. \n\n\
The user can modify a pannel. He can add, move or remove widgets that can control one or more devices. If he wants a single button to set his TV on, start his DVD player and dim his connected lights, he can easily add one with the built-in user-friendly macro editor.  \n\
![test](//thibaut.re/static/domorapp-full.jpg)\n\n\
# Designed for extensibility\n\n\
\
Open-source is rooted at the heart of Domora. \n\n\
Connected devices are booming. Every week, one or two kickstarters are successfully founded, featuring a brand new connected device. A Start-up can simply not afford to implement all the interfaces for this ever-growing tech field. So we made the choice to open-source our application, thus allowing coders and hackers to implement the smart objects they own, and making them available for every single Domora user.  \n\n\
The application is built with modularity in mind, using RequireJS and KnockoutJS' new Components system. Adding a widget for any objet means adding a HTML5 and a JS file. *Dead simple again*.  \n\n\
## Related\n\n\
- [Domora Website](/project/domora.com)\n\
- [Domora Crowdfunding clip](/project/domora_crowdfunding_clip)\n\
- [Domora 3D clip](/project/domora_3D_clip)\
",
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
        color: "#71d36a",
        thumb_url: "http://thibaut.re/static/thibautreweb.jpg",
        img_url: "http://thibaut.re/static/thibautreweb-full.jpg",
        description: "This very website. Its purpose is to display my different work, and optionnaly to show a demo of each work",
        article: "# Driven by cutting-edge technologies\n\n\
This whole website is powered entirely by Javascript, from the back-end to the front-end. A NodeJS process is running, which opens a server with the ExpressJS library. On production, an Nginx server is used as a reverse proxy to access the `3100` port opened by Express.    \n\n\
The server \"compiles\" templates `.jade` files, serving HTML files to the client, and also compiles `.styl` stylus files, serving CSS files to the client.    \n\n\
A MongoDB database is used to store and dynamically retrieve the features of all the projects (links, pictures, markdown-written articles...)    \n\n\
Don't forget to fork the [source code](//github.com/thibautre/thibaut.re) !    \n\n\
## Related\n\n\
- [Domora website](/project/domora.com)\n\
",
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
        img_url: "http://thibaut.re/static/go-raytracer-full.jpg",
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
        color: "#4a62f3",
        thumb_url: "http://thibaut.re/static/domora3d.jpg",
        img_url: "http://thibaut.re/static/domora3d-full.jpg",
        description: "A short advertising clip made for my Start-up, Domora. I wanted a dynamic movie clip to explain the features of our product.",
        article: "# Art and scripts\n\n\
Blender has always been my favourite software since I'm 14. It is at the edge of 2 different worlds : art and programming. Indeed, its main goal is to produce 3D images or movies, but you can also make your own Python scripts to automate some tasks (one major exemple could be creating a fractal shape).\n\n\
Because of the bilateral nature of this software, I ended up grewing in *both* worlds : art __and__ programming.\n\n\
In this video, Python scripts were used to produce automatic mechanical animations, like the floor at the very beginning, the walls during the scene transitions and the last building creation and destruction.\n\n\
<iframe src=\"https://www.youtube.com/embed/N-XmCWkpoH4\" class=\"video\" allowfullscreen></iframe>\n\n\
# Featured in an exhibit show\n\n\
There is no sound because this video was featured during an exhibit show, where sound was useless. That's also the reason why a high focus on subtitles has been made.\n\n\
![Pierre and Nils exhibiting the features of Domora's product to Jean-Paul Huchon, president of Ile-de-France Region](//thibaut.re/static/article/domora3d.jpg)\n\n\
Also, because in an exhibit show, people went by and wander around trying to find a cool product, we, as a Start-up, had to focus their attention on *our* stand. That was actually the main purpose of this clip : focusing random people's attention in a highly competitive environnement. For this reason, the clip is voluntarily dynamic, with a lot of elements moving on the screen to catch the eye of the audience.\n\n\
The whole video has been made in a week.\n\n\
## Related\n\n\
- [Domora Crowdfunding clip](/project/domora_crowdfunding_clip)\n\
- [Domora website](/project/domora.com)\n\
",
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
        color: "#f3b44a",
        thumb_url: "http://thibaut.re/static/domoracrowd.jpg",
        img_url: "http://thibaut.re/static/domoracrowd-full.jpg",
        description: "The Crowdfunding clip for my Start-up, Domora. We wanted something fresh and easy to understand. My job, aside from designing the content and the story of the clip, was to film and edit the video, adding some 3D effects and nice background music.",
        article: "# Homemade studio quality clip\n\n\
At Domora, we like to have full control over the things we produce. Creating a crowdfunding clip by ourselves was risky but we ended up learning a lot of things on subjects we ignored.\n\n\
<iframe class=\"video\" src=\"https://player.vimeo.com/video/113258176\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n\n\
The whole video has been shot in 2 days with professional tools. The clip mounting and editing took 3 days (this include color corrections, music timing and 3D overlay effects), and has exclusively been made with Blender's VSE (Video Sequence Editing).\n\n\
When we released the video for our crowdfunding campaign, the audience was amazed by the quality of the video, and it definitively helped our communication.\n\n\
## Related\n\n\
- [Domora 3D clip](/project/domora_3D_clip)\n\
- [Domora website](/project/domora.com)\n\
",
        technologies: [
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