let express = require('express');
const app = express();
 
app.get('/status', function (req, res ){ 
    res.send('Hello nodejs server');
})

 app.get('/hello/:person',function (req,res){
    console.log('hello - '+ req.params.person)
    res.send('say hello with '+ req.params.person)
 })
 
let port = 8080
 
app.listen(port, function () {
    console.log('server running on '+ port)
});
 