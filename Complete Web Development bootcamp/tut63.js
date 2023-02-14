const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Developer tools</title>
      <style>
          p{
              color:purple;
              font-style:italic;
              background-color: sandybrown;
          }
          .bgPrimary{
              background-color: yellow;
          }
  
      </style>
  </head>
  <body>
      <h4 class="bgPrimary">Developer tools tutorial</h4>
      <p>This is a tutorial for Chrome developer tools </p>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});