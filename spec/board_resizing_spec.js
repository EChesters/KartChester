describe("Board Resizer", function() {
	var game;
	var front;

	beforeEach(function(){
		game = new Game(1);
		front = new front-end(game);
	};

    it("should set the width of the board to be the window width if the board is wide", function() {
        var window_width = 2000;
        var window_height = 1500;

        var board_width = 1000;
        var board_height = 500;

        front.calculate_size(window_width, window_height, board_height, board_width);

        expect(window_width).toEqual(board_width);
    });
});