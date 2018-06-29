var express = require('express');
var app = express();
var router = express.Router();
const line = require('@line/bot-sdk');
const config = {
    channelAccessToken: 'YK5lY1ENWJrMjMJMfDOs+rNt6EZr7Nt+GfGaE3rdF6pI3f9ad8dMQl2QwqGWHGFq4NMMeDfIxR2xiAnCLZjrISgh1uPUM/8QAUWS+yjCyt9lC1n3RrnCKuPv+sI+8rRXANGEGSfYUtyvlSwvAm2JYQdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'e6bf61f0b90c3e597c44bac095f30d88'
};

const client = new line.Client(config);

app.get('/test', function(req, resp){
    var message = '';
    client.pushMessage('tmjpofficial', message)
    .then((data) => {
        console.log("data", data);
    })
    .catch((error) => {
        console.log('error', error.stack);
    });

    return 'test'
});
app.listen(8080, function(){
    console.log('listening');
});