var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)
    , fs = require('fs')

app.listen(8081);

function handler (req, res) {
    fs.readFile(".." + req.url,
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.sockets.on('connection', function (socket) {
    socket.on('init', function (data) {
        console.log("init");
        console.log(data);
    });
    socket.on('send_click_from_player', function (data) {
        console.log("click_from_player");
        console.log(data);
    });

    function send_update() {
        socket.emit('update',[1,2,3]);
    }

    setInterval(send_update,2000);

});