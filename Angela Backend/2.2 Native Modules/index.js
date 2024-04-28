const fs= require("fs");
fs.writeFile("message.text", "hello from nodeJs!", (err)=> {
    if (err) throw erro;
     console.log("This file has been saved!"); 
});