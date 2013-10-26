function Frontend() {

	this.normalize_to_screen = function normalize_to_screen(normalize_position) {
		return Array(
			(normalize_position[0] * $('#map').width()) / 100,
			(normalize_position[1] * $('#map').height()) / 100
			);
	} 

	this.update = function update(players_positions) {
	    for (var i = 0; i < players_positions.length; i++) {
	    	size_normalized = this.normalize_to_screen(players_positions[i][0]);
	    	console.log(size_normalized);
	    	$('#player'+ (i+1).toString()).css('left', size_normalized[0]);
		    $('#player'+ (i+1).toString()).css('top', size_normalized[1]);
	  	}
  	}		
};