var StickyHeader = function(elmt, scrollLimit) {
    this.elmt = elmt;
    this.scrollLimit = scrollLimit;
    this._stickyClassName = "is-sticky";
};

StickyHeader.prototype.run = function() {
    var stickyHeader = this;
    window.onscroll = function() {
        stickyHeader.check();
    };
};

StickyHeader.prototype.check = function() {
    var height = document.documentElement.scrollTop || document.body.scrollTop;
    if (height > this.scrollLimit) {
        this._stick();
    }
    else if (height < this.scrollLimit) {
        this._unstick();
    }
};

StickyHeader.prototype._stick = function() {
    if (this.elmt.className.indexOf(this._stickyClassName) != -1) return;
    this.elmt.className += " " + this._stickyClassName;
};

StickyHeader.prototype._unstick = function() {
    if (this.elmt.className.indexOf(" "+this._stickyClassName) == -1) return;
    this.elmt.className = this.elmt.className.split(" "+this._stickyClassName).join("");
};