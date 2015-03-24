var exec = require('child_process').exec;

exec('jade views/index.jade --out public');
