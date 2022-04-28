const express = require('express');
const app = express();


app.get('/',(req,res)=> {
    res.send('response');
})


app.listen(PROCESS.ENV.PORT, ()=> {
    console.log('server started');
})

