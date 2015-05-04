var StickyHeader = function(elmt, scrollLimit) {
    this.elmt = elmt;
    this.scrollLimit = scrollLimit;
};

StickyHeader.prototype.run = function() {
    var stickyHeader = this;
    window.onscroll = function() {
        var height = document.documentElement.scrollTop || document.body.scrollTop;
        if (height > stickyHeader.scrollLimit) {
            stickyHeader._stick();
        }
        else {
            stickyHeader._unstick();
        }
    };
};

StickyHeader.prototype._stick = function() {
    this.elmt.dataset.sticky = true;
};

StickyHeader.prototype._unstick = function() {
    delete this.elmt.dataset.sticky;
};