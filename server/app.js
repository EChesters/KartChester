var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)
    , fs = require('fs')

var GameServer = require('./js/game_server.js')

var game_server;
app.listen(8081);

function init_game(){
    game_server =  new GameServer();
    game_server.init();
}

init_game();

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
    socket.on('init', function (player_id) {
        console.log("init");
        console.log(player_id);
        var player = game_server.create_player_with_id(player_id);
        game_server.add_player(player);
        console.log(game_server.players);
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

