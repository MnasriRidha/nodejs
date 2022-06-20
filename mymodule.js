var fs=require('fs')
var path=require('path')
module.exports=function(directory,ext,callback){
  fs.readdir(directory,function(err,data){
    if(err) callback(err)
    else 
      { data=data.filter(file => {
        if (path.extname(file)==='.'+ext)
          return true})
        callback(null,data)
        
      }
  })
}