var fs=require('fs')
var path = require('path');
var directory=process.argv[2]
var ext='.' + process.argv[3]
fs.readdir(directory,function(err,fileslist){
    if(err)
        {throw(err);}
    fileslist.forEach(el => {
            var fileExt=path.extname(el)
            if (fileExt===ext)
            {console.log(el)}
        })
});