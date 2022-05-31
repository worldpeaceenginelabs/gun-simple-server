;(function(){
  var gun = require('gun/examples/http');
  if(!gun.back){ return } // http example auto spawns subprocess

  var fs = require('fs');
  var server = gun.back('opt.web');
  var route = server.route = {}

  fs.readdir('./route', function(err, dir){
      if(err || !dir){ return }
      dir.forEach(function(file){
          if(!file){ return }
          route[file.split('.')[0]] = require('./route/'+file);
      });
  });

  gun.get('test').on(data => console.log(data))

}());