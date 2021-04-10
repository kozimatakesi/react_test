const request = require('sync-request');
function myFunction() {
  var response = getContent('https://www.hareruyamtg.com/ja/');
  var myRegexp = /<title>([\s\S]*?)<\/title>/i;
  var match = myRegexp.exec(response);
  var title = match[1];

  title = title.replace(/(^\s+)|(\s+$)/g, '');
  return title;
}

function getContent(url) {
  var response = '';
  response = request('GET', url);
  return response.body;
}

console.log(myFunction());