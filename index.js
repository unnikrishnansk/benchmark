const http = require('http');
const fs = require("fs");

const server = http.createServer((req,res) => {

    if(req.url === "/textsync")
    {
    res.write("Welcome ");
    const data = fs.readFileSync("./data.txt","utf-8");
    res.write(data);
    res.end(" Thankyou");
    }

    else if(req.url === "/textasync")
    {
    res.write("Welcome ");
    const data = fs.readFile("./data.txt","utf-8");
    res.end(data);
    res.write(" Your data is");
    }
});

server.listen(7000);