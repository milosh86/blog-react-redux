# SocketIO setup
## Server setup
```javascript
// server.js
var app = express();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);

// don't listen on app, but on server object!!! server will provide client-side socket.io.js file
server.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at http://localhost:3000');
});

io.on('connection', socket => {
  console.log('WebSocket connection opened...');
  socket.on('action', data => {
    
    actionHandler(data);
    // send to other clients
    data.server = true;
    socket.broadcast.emit('action', data);
  });
});
```

# Client setup

```html
 <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv='Content-type' content='text/html; charset=utf-8'>
        <title>Blog App</title>
        <link rel="stylesheet" type="text/css" href="/static/styles.css" id="blog-server-styles" />
        <script src="/socket.io/socket.io.js"></script>
        <style>
          body {
            font-family: "Consolas", monospace;
          }
        </style>
      </head>
      <body>
        <h1>Blog App made with React and Redux (in progress)</h1>
        <div id="content">
          ${html}
        </div>

        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          let socket = io.connect('http://localhost:3000');
          socket.emit(...)
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
```