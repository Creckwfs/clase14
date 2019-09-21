const express = require('express')
const app = express()
const port = 9000

//usuario
app.get('/', function (req,res){
    res.send('Hello World')
})

app.post('/post-route', function (req,res){
    res.send('Hello desde la ruta post World')
})

app.put('/put-route', function (req,res){
    res.send('Hello desde la ruta put World')
})

app.delete('/delete-route', function (req,res){
    res.send('Hello World')
})


app.listen(port, function(){
    console.log('Example app listening on port ${port}!')
})