var Stat = function(elmt, time) {
    this.elmt = elmt;
    this.time = time || 1000

    var stat = this;
    this.calculateFunction = function() {
        return stat.elmt.innerHTML;
    };
};

Stat.prototype.run = function() {
    this.elmt.innerHTML = this.calculateFunction(this.elmt.innerHTML);
    var stat = this;
    setTimeout(function() {
        stat.run();
    }, this.time);
};
