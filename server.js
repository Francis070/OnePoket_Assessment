const express = require("express");
const port = 3000;

const app = express();

app.get("/", (_, res)=>{
    res.send("Hello World!")
});

app.listen(port , ()=>{
    console.log(`Server is listening on ${port}`);
})
