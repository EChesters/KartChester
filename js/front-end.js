function Frontend() {

	this.update = function update(players_positions) {
	    for (var i = 0; i < players_positions.length; i++) {
		    $('#player'+ (i+1).toString()).css('top', players_positions[i][0][0]);
		    $('#player'+ (i+1).toString()).css('left', players_positions[i][0][1]);
	  	}
  	}		
};