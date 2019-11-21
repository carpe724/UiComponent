var url = "https://node2.feed43.com/7542322168855857.xml";

var xml2js = require('xml2js');
var parser = new xml2js.Parser({
    explicitArray : false
});
var request = require('request');


var requestRss = request.get({
    url: url,
    rejectUnauthorized: false,//add when working with https sites
    requestCert: false,//add when working with https sites
    agent: false,//add when working with https sites
}, function(err, res, data){
    if(!err && res.statusCode == 200){
        parser.parseString(data, function(err, result){
            console.log(result.rss.channel.item);
        })
    }else{
        console.error(err);
    }
  });
