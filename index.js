const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

//MiddleWere
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Coffee making server is running')

})

app.listen(port, () =>{
    console.log(`coffee making server port: ${port}`)
})
