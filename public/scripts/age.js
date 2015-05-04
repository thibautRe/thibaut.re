var Age = function(bornDate, precision) {
    this.bornDate = bornDate;
    this.precision = precision || 1000000000;
};

Age.prototype.calculate = function() {
    var now = new Date();
    var diff = now - this.bornDate;
    var fac = 1000*60*60*24*365;
    return Math.round(diff/fac*this.precision)/this.precision;
};