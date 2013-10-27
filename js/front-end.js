function Frontend(game) {

	this.game = game;


    this.board = $('#board');


    this.on_click_handler = function (e) {
        var posX = ($(this).offset().left);
        var boardWidth = ($(this).width()) / 100;
        var finalX = (e.pageX - posX)/boardWidth;

        var	posY = $(this).offset().top;
        var boardHeight = ($(this).height()) / 100;
        var finalY = (e.pageY - posY)/boardHeight;

         console.log("look at me!!!");
        game.screen_click_from_player(1,finalX, finalY);
        new GameWrapper().send_click_from_player(1,finalX,finalY);

    }

    this.board.click ( this.on_click_handler);


    this.normalize_to_screen = function normalize_to_screen(normalize_position) {
		return Array(
			(normalize_position.x * $('#map').width()) / 100,
			(normalize_position.y * $('#map').height()) / 100
			);
	};

	this.update = function update(players_positions) {
	    for (var i = 0; i < players_positions.length; i++) {
	    	size_normalized = this.normalize_to_screen(players_positions[i]);
	    	$('#player'+ (i+1).toString()).css('left', size_normalized[0]);
		    $('#player'+ (i+1).toString()).css('top', size_normalized[1]);
	  	}
  	};

  	this.calculate_size = function(windows_height, windows_width, board_height, board_width) {
		var result_map_width = windows_width;
		var result_map_height = (windows_width * board_height) / board_width;
		
		if (result_map_height <= windows_height && result_map_width <= windows_width) {
			return [result_map_height, result_map_width];
		}

		var right_result_map_height = windows_height;
		var right_result_map_width = (windows_height * board_width) / board_height;

		return [right_result_map_height, right_result_map_width];
	};

	this.calculate_proportion = function(windows_length, board_length) {
		return windows_length / board_length;
	};
};
