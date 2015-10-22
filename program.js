var fs = require('fs');
var path = require('path');
var moduleFile = require('./mymodule');
var http = require('http');
var arg = process.argv[2];
// var newline = fs.readFile(process.argv[0]);
// var str = newline.toString();


// var newline = fs.readFileSync(process.argv[2]);  --for third challenge - rewriting it for fourth
// var str = newline.toString();
// console.log("HELLO WORLD");

// app.get("www.google.com", function(res) {
// 	console.log("Got response: " + res.statusCode);
// });

// var originalArray = process.argv;    //solution to process.argv
// var sliced = originalArray.slice(2);
// var sum = sliced.map(Number);
// var count = 0;
// for (i=0; i < sum.length; i++) {
// 	count += sum[i];
// }
// console.log(count);

// console.log(str.split('\n').length -1 );  //solution to "MY FIRST I/O"


// fs.readFile(process.argv[0], function callback(error, count) {      // answer to exercise #4
// 	if (error) return console.error(error);
// 	console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length -1 )
// })


// exercise # FILTERED LS
// fs.readdir(process.argv[2], function callback(error, list) {      //kinda had to hard code this out in an ugly way..but it works!
// 	if (error) return console.error(error);
// 	for (i = 0; i < list.length; i++) {
// 		if (list[i].slice(-2) == process.argv[3].slice(-2) && list[i].slice(-3) != "md") {
// 			console.log(list[i]);
// 		}
// 	}

// })



// moduleFile(process.argv[2], process.argv[3], function(err, data){  //exercise for "MAKE IT MODULAR"
//     data.forEach(function(file){
//         console.log(file);
//     });
// });


// http.get(process.argv[2], function(res) {   ///exercise 8
// 	res.setEncoding('utf8');
// 	res.on('error', function(error) {
// 		console.error(error)
// 	});
// 	res.on('data', function(alldata) {
// 		console.log(alldata);
// 	});
// });

// var http = require('http');   //exercise 8
// var bl = require('bl')

// http.get(arg, function(response) {
//     response.pipe(bl(function (error, data) {
//         if (error) return console.error(error);
//         var string = data.toString();
//         console.log(string.length);
//         console.log(string);
//     }))
// });


var http = require('http');
var bl = require('bl')
var allurls = process.argv.slice(2);



var allcontent = [];

function displayResult() {
    allurls.forEach(function(url) {
        console.log(allurls[url]);
    });
}

function doRequest(url, callback) {
    http.get(url, function(result) {
        result.pipe(bl(function (err, data) {
            if (err) return callback(err);
            allurls[url] = data.toString();
            return callback();
        }))
    });
}

async.each(listUrls, doRequest, function(err){
    if (err) return console.error(err);
    displayResult();
});
