
var fs = require('fs');       
var path = require('path')



// //exercise # FILTERED LS   //this was my original attempt to solve this problem, but the callback function wasn't working the way it was suppossed to...or i'm missing something..got some help off forums
// module.exports = function( directory, filter, callback) {
// 	fs.readdir(directory, function(error, list) {      //kinda had to hard code this out in an ugly way..but it works!
// 		if (error) return callback(error);
// 		for (i = 0; i < list.length; i++) {
// 			if (list[i].slice(-2) == process.argv[3].slice(-2) && list[i].slice(-3) != "md") {
// 				console.log(list[i]);
// 			}
// 		}
// 		callback(null, list);
// })
// }

module.exports = function(pathFile, ext, callback){
    ext = '.' + ext;

    fs.readdir(pathFile, function(error, list){
        if (error){
            return callback(error);
        }

        var filtered=[];
        list.forEach(function(file){
            if(path.extname(file) === ext){
                filtered.push(file);
            }
        });
        return callback(null, filtered);
    });
}