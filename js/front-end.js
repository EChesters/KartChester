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


        game.screen_click_from_player(1,finalX, finalY);

    }

    this.board.click ( this.on_click_handler);


    this.normalize_to_screen = function normalize_to_screen(normalize_position) {
		return Array(
			(normalize_position.x * $('#map').width()) / 100,
			(normalize_position.y * $('#map').height()) / 100
			);
	} 

	this.update = function update(players_positions) {
	    for (var i = 0; i < players_positions.length; i++) {
	    	size_normalized = this.normalize_to_screen(players_positions[i]);
	    	$('#player'+ (i+1).toString()).css('left', size_normalized[0]);
		    $('#player'+ (i+1).toString()).css('top', size_normalized[1]);
	  	}
  	}

  	this.calculate_size = function(windows_height, windows_width, board_height, board_width) {
		// return board h and w
		return [windows_height, windows_width];
	};		
};
