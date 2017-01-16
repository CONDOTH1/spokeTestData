var http = require('http');
var url = require('url');
var person = require('./lib/person');
var body = [];
var profiles = [];
var iterator = 0;
var port = process.env.PORT || 8080;


this.server = http.createServer(function(req, res) {

  var parsedURL = url.parse(req.url);


  var parseRequest = function(body){
    var number = Buffer.concat(body).toString();
    var strNmb = number.replace('profiles=', '');
    return strNmb - 0
  }

  var recordPostData = function(){
    req.on('error', function(err) {console.error(err)});
    req.on('data', function(chunk) {body.push(chunk)});
  }

  var iterateAndSend = function(){
    req.on('end', function() {
      var numberOfProfiles = parseRequest(body)
      getUserProfiles(numberOfProfiles).then(function(){
        sendResponse(res, req.headers, req.method, req.url);
      });
    });
  }

  var sendResponse = function(res, headers, method, url){
    res.on('error', function(err) {console.error(err);});
    res.writeHead(200, {'Content-Type': 'application/json'});
    var resBody = {body: profiles, headers: headers, method: method, url:url};
    res.end(JSON.stringify(resBody));
  }

  var getUserProfiles = function(n){
    return new Promise(function(resolve, reject){
      for (var i = 0; i < n; i++) {
        person.setAddress().then(function(object){
          profiles.push(object);
          if (profiles.length === n) {
            resolve();
          }
        });
      }
    });
  }

  if (parsedURL.pathname === '/' && req.method === 'POST') {
    recordPostData();
    iterateAndSend();
  }

}).listen(port);
