const http = require("http");
const fs = require("fs");

const server= http.createServer((req, res)=> {

    console.log(req.url, req.method, req.headers);
        
    const url = req.url;
    const method = req.method

    if (url==="/"){
        res.write("<html>");
        res.write("<head><title>Enter a message</title></head>");
        res.write("<body><form action = /message method=POST> <input type=text name = message> <button type = submit>send</button></form></body>");
        res.write("</html>");
         return res.end();
    }

    if(url==="/message" && method=== "POST"){
        const body = [];
        res.on("data", (chunk)=>{
            console.log(chunk);
            body.push(chunk);

        });
        res.on("end", ()=>{
            const parsBody = Buffer.concat(body).toString();
            const mesasge = parseBody.split("=")[1];
            fs.writeFileSync("message.text", "message");
        }
    )

        
        res.statusCode= 302;
        res.setHeader("location", "/");


    }


        res.setHeader("content-type", "text/html")
        res.write("<html>");
        res.write("<head><title>my First page!!</title></head>")
        res.write("<body><h1>Hello From Node Server!! </h1></body>")
        res.write("</html>");
        res.end();
}); 

server.listen(3000);







