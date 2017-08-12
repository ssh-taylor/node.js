/**
 * Created by Administrator on 2017/8/12.
 */
var fs = require('fs')
console.log('查看目录')
fs.readdir('world',function(err,files){
    if(err){
        return console.error(err)
    }
    files.forEach(function (file) {
        console.log(file)
    })
})