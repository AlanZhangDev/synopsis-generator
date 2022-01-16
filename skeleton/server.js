const express = require("express")
const app = express()
const path = require('path');
var https = require("https");

// called when visitor visits site, loads ./resouces/index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname+'/resources/index.html'))
    console.log("Recieved request from: " + req.ip)
})

// called when index.html is loaded, sends ./resouces/index.js to index.html
app.get("/index.js", function(req, res) {
    res.sendFile(path.join(__dirname+'/resources/index.js'))
    console.log("Recieved request from: " + req.ip)
})

// Ajax request response to header I-Want
app.get("/I-Want/:info", function(req, res)
{
	const infos = req.params.info.split("&");
    let str1 = infos[0]
    let str2 = infos[1]
	res.send("You get " + str2 + " " + str1);
});

// Request to open ai example
app.get("/openai/:prompt", function(req, res)
{
    const options = 
    {
        hostname: 'api.openai.com',
        path: '/v1/engines/davinci/completions',
        method: 'POST',
        headers: 
        {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        }
    };

    const data = new TextEncoder().encode(
        JSON.stringify({
            "prompt": req.params.prompt, 
            "max_tokens": 100,
            "temperature": 0.7
        }))

    const reqs = https.request(options, (ress) => {
        ress.on('data', (d) => {
            response_from_openai = JSON.parse(new Buffer.from(d).toString())["choices"][0]["text"]
            res.send(response_from_openai)
        });
    });

    reqs.write(data)
    reqs.end()
});


// Starts the server on port 5000 if available
// To test server locally visit localhost:5000 in web browser 
let server = app.listen(process.env.PORT || 5000, () => {
    console.log('Listening on address: ' + server.address().address + ":" + server.address().port)
  })