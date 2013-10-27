function GameWrapper() {

    var socket = io.connect('http://localhost:8081');

    socket.on('update',function(data){
        console.log("update");
        console.log(data);
    })

    this.init = function() {
        socket.emit('init',1);
    }

    this.send_click_from_player = function (player_id,x,y) {
        socket.emit('click_from_player',{player_id : player_id, x: x, y: y});
    }


}