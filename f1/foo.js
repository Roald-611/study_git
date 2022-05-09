const express = require('express');

const app = express();

const port = process.env.PORT || 3100;

app.get('/', (req, res) => {
    console.log("this is get reqvest");
    res.render("get reqvest");
})

app.listen(port, () => {
    console.log(`server listning on port: ${port}`)
}) 