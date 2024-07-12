const exp = require('express');

const web = exp();
web.get('/',(req,res) =>{
    res.send('Javascript')
});

web.listen(3000);

//Used node index.js to run the application