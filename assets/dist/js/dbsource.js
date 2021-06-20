var requestURL = "data/db/text.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    var textJson = request.response;
    
}

var blob = new Blob(['blaaaaat'], {type: 'text/plain'});

window.navigator.msSaveOrOpenBlob(blob, 'data/db/testfile.txt');
