var fastIntro = true

var carrousel = new Carrousel(document.getElementById('js-carrousel-intro'));
carrousel.words = [
  "Thibaut",
  "an engineer",
  "a hacker",
  "a designer",
  "an entrepreuneur",
  "an explorer",
  "an artist",
  "a drawer",
  "a UX lover",
  "a musician",
  "a animation maker",
  "a coder",
  "a coffee drinker",
  "a web enthusiast",
  "a ninja",
  "Thibaut"
];
carrousel.options.runOnce = true;
carrousel.options.initialSpeed = 1000;
carrousel.options.finalSpeed = 100;

// Hide the intro, show the header
var introEnd = function() {
  var header = document.getElementById('js-header--main');
  var intro  = document.getElementById('js-intro');
  var content  = document.getElementById('js-content');
  header.className += " is-ready";
  setTimeout(function() {
    header.className += " is-visible";
    intro.className += " is-ready";
    content.className += " is-ready";
    setTimeout(function() {
      intro.className += " is-hidden";
      content.className += " is-visible";
      setTimeout(function() {
        content.className += " is-finished";
      }, 500);
    }, 500);

  }, 1500);
};

if (fastIntro) {
  introEnd();
}
else {
  carrousel.setFinalCallback(introEnd);
  setTimeout(function() {
    carrousel.run();
  }, 3200);
}

// Age
var myAge = new Age(new Date("1991-09-21"));
var myAgeStat = new Stat(document.getElementById("js-age"), 100);
myAgeStat.calculateFunction = function() {
  return myAge.calculate();
};
myAgeStat.run();

// Lines of code
var codelinesStat = new Stat(document.getElementById("js-codelines"));
codelinesStat.calculateFunction = function(oldValue) {
  oldValue = parseFloat(oldValue);
  return oldValue + Math.round(Math.random()*3-1);
};
codelinesStat.run();

// coffees
var coffeesStat = new Stat(document.getElementById("js-coffees"), 5000);
coffeesStat.calculateFunction = function(oldValue) {
  oldValue = parseFloat(oldValue);
  return (10*oldValue + Math.floor(Math.random()*1.2))/10
};
coffeesStat.run();


// Sticky header
var stickyHeader = new StickyHeader(document.getElementById("js-header-nav"), 200);
stickyHeader.run();