$(document).ready(function() {

});

server_ip_root = 'http://213.5.93.253:9292/';
server_ip_init = server_ip_root + 'init';
server_ip_update = server_ip_root + 'update';
server_ip_players_position = server_ip_root + 'players-position';

function start_game() {
	
	var game = new Game();

	var frontend = new Frontend(game);

	var window_width = $(window).width();
	var window_height = $(window).height();

	var map_width = $('#map').width();
	var map_height = $('#map').height();

	var maximised_map_size = frontend.calculate_size(window_height, window_width, map_height, map_width);

	$('#map').width(maximised_map_size[1]).height(maximised_map_size[0]);
	$('#board').width(maximised_map_size[1]).height(maximised_map_size[0]);

	game.init();
	setInterval(function(){game.update(frontend);},1000);
}

window.setTimeout(start_game, 300);

var Game = function() {

	this.init = function(){
		$.get(server_ip_init);
	}; 
	this.update = function(frontend) {
		$.get(server_ip_update, function(data) {
			frontend.update(data);
		});
	};

	this.screen_click_from_player = function(player_id, posx, posy) {
		alert('hello!');
		// $.post(server_ip_players_position, { player_id: player_id, posx: posx; posy: posy });
	}
}