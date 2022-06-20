var mymodule=require('./mymodule')
var directory=process.argv[2]
var ext= process.argv[3]
var callback=function(err,data){
    if (err) throw err
    else{
        data.forEach(file=>console.log(file))
    }
}
mymodule(directory,ext,callback)