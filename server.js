const http = require('http');
const fs = require('fs');
const port = 1337;

function serveStaticFile(path, response) {
    let contentType = 'text/html';
  
    if (path.endsWith('.css')) {
      contentType = 'text/css';
    }
    else if (path.endsWith('.png')) {
      contentType = 'image/png';
    }
    else if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
      contentType = 'image/jpeg';
    }
    else if (path.endsWith('.gif')) {
        contentType = 'image/gif';
      }
  
    fs.readFile(path, function(error, data) {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('500 - Internal Server Error');
      }
      else {
        response.writeHead(200, {'Content-Type': contentType});
        response.end(data);
      }
    });
  }
  

http.createServer((request, response) => {
  const url = request.url.toLowerCase().split('?')[0].replace(/\/$/, '');

  switch (url) {
    case '':
      serveStaticFile('public/index.html', response);
      break;
    case '/index':
     serveStaticFile('public/index.html', response);
        break;
    case '/posts':
      serveStaticFile('public/posts.html', response);
      break;
    case '/contact':
      serveStaticFile('public/contact.html', response);
      break;
    case '/under-construction':
      serveStaticFile('public/under-construction.html', response);
      break;
    case '/images/logo.png':
      serveStaticFile('public/images/logo.png', response);
      break;
    case '/images/merch.png':
      serveStaticFile('public/images/merch.png', response);
      break;
    case '/images/x.png':
      serveStaticFile('public/images/x.png', response);
      break;
    case '/images/construction.png':
      serveStaticFile('public/images/construction.png', response);
      break;
    case '/images/blogging.png':
      serveStaticFile('public/images/blogging.png', response);
      break;
    case '/images/404bottom.gif':
      serveStaticFile('public/images/404bottom.gif', response);
      break;
    case '/images/404mid.gif':
      serveStaticFile('public/images/blogging.png', response);
      break;
    case '/images/404top_w.jpg':
      serveStaticFile('public/images/404top_w.jpg', response);
      break;
    case '/images/computer-typing.jpeg':
      serveStaticFile('public/images/computer-typing.jpeg', response);
      break;
      
    
    default:
      serveStaticFile('/404.html', response);
      response.statusCode = 404;
      break;
  }
}).listen(port);

console.log(`Server running at http://localhost:${port}/`);
