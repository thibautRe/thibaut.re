var Carrousel = function(elmt) {
    this.elmt = elmt;

    // Initialisation
    this.options = {};
    this.words = [];
    this._currentIndex = 0;
    this.setSpeed(1);
};

Carrousel.prototype.setWords = function(words) {
    this.words = words;
};

Carrousel.prototype.setInitialSpeed = function(speed) {
    this.options.initialSpeed = speed;
};

Carrousel.prototype.setFinalSpeed = function(speed) {
    this.options.finalSpeed = speed;
};

Carrousel.prototype.setSpeed = function(speed) {
    this.setInitialSpeed(speed);
    this.setFinalSpeed(speed);
};

Carrousel.prototype.setFinalCallback = function(callback) {
    this.finalCallback = callback;
};

Carrousel.prototype.run = function() {
    if (this._currentIndex >= this.words.length) {
        if (typeof this.finalCallback == "function") {
            this.finalCallback();
        }
        if (this.options.runOnce) {
            return;
        }
        this._currentIndex = 0;
    }

    this.elmt.innerHTML = this.words[this._currentIndex];

    var carrousel = this;
    setTimeout(function() {
        carrousel.run();
    }, this._getCurrentSpeed());
    this._currentIndex++;
};

Carrousel.prototype._getCurrentSpeed = function() {
    var fac = this._currentIndex/(this.words.length - 1);
    var init = Math.log(this.options.initialSpeed);
    var end = Math.log(this.options.finalSpeed);
    var speed = Math.pow(Math.E, init*(1-fac) + end*fac);
    console.log(speed);
    return speed;
};