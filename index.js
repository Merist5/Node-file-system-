var fs = require('fs');
var StatMode = require('stat-mode');

fs.readdir('../Nodejs-task-13.7', 'utf-8', function(err, data) {
  if (err) throw err;
  console.log(data);
  fs.writeFile('text.txt', data, function(err, data) {
    if (err) throw err;
    console.log('Saved!');
  });
});