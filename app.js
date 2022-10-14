const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title> Enter Me </title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> Enter Me </title></head>');
  res.write('<body><p>Hello</p></body>');
  res.write('</html>');
  return res.end();
});

server.listen(3000);
