var pkg = require('./package.json');
var version = pkg.version;

module.exports = function help() {
  var output = 'NBA CLI Tool\n';
  output += 'Version ' + version + '\n\n';
  output += 'Commands:\n';
  output += '\tnba - Display\'s the scores and schedule for today\n';
  output += '\tnba yesterday - Display\'s the scores and schedule for yesterday\n';
  output += '\tnba tomorrow - Display\'s the scores and schedule for tomorrow\n';
  output += '\tnba date YYYY-MM-DD - Display\'s the scores and schedule for a specific date\n';

  console.log(output); 
};