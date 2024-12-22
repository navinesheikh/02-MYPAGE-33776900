var http = require("http");

const port = 8000;

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Page</title>
        </head>
        <body>
            <h1>Welcome to My Page!</h1>
            <h2>About Me</h2>
            <p>Hi, I'm Navine. I love web development!</p>
        </body>
        </html>
    `);
}).listen(port, function () {
    console.log(`Node server is running on port ${port}...`);
});