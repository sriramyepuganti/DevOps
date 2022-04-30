const express = require('express');
const app = express();


app.get('/',(req,res)=> {
    res.send('response');
})


app.listen(process.env.PORT, ()=> {
    console.log('server started');
})

