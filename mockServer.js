/*jshint -W117*/
var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');
var root = '.';

module.exports = function (req, res, next) {
  if (req.method !== 'GET') {
    var url = parse(req.url);
    var path = join(root, url.pathname);
    var stream = fs.createReadStream(path);
    stream.on('data', function (chunk) {
      res.write(chunk);
    });
    stream.on('end', function () {
      res.end();
    });
  }
  else {
    next();
  }
};
