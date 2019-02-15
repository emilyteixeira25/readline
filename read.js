var fs = require('fs');

fs.readFile('data.txt', 'utf8' ,function(err, data) {
  if (err) throw err;
  //console.log(data);
  var arraydat = data.split('/n');
  for (var i = 0; i < arraydat.length; i++){
        console.log("The data on line", i+1, "is:", arraydat[i]);

  }
});
