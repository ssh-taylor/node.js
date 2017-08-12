/**
 * Created by Administrator on 2017/8/11.
 */
//console.log(process.argv);

var an = 0;
for(var i=2;i<process.argv.length;i ++)
      an += + process.argv[i]
console.log(an)

