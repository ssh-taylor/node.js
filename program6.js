/**
 * Created by Administrator on 2017/8/12.
 */
function bar (callback){
    foo(function(err,date){
        if(err)
            return callback(err)
        callback(null,data)
    })
}