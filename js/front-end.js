function Frontend(game) {

	this.game = game;

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
		return [1, 2];
	};		
};
