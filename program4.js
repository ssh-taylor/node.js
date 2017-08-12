/**
 * Created by Administrator on 2017/8/12.
 */
var fs = requrie('fs')
var filename = process.argv[2]
var str = fs.readfileSync(filename).toString()
varnum = str.split('\n').length-1
console.log(num)