describe("Board Resizer", function() {
	var game;
	var front;

	var window_width;
	var window_height;

    var board_width;
    var board_height;

	beforeEach(function(){
		game = new Game(1);
		front = new Frontend(game);
	});

    it("should set the width of the board to be the window width if the board is wide", function() {
        window_width = 2000;
        window_height = 1500;

        board_width = 1000;
        board_height = 500;

        var size = front.calculate_size(window_height, window_width, board_height, board_width);

        expect(window_width).toEqual(size[1]);
    });

    it("should set the height of the board to be the window height if the board is tall", function() {
    	window_width = 2000;
    	window_height = 1500;

    	board_width = 500;
    	board_height = 1000;

    	var size = front.calculate_size(window_height, window_width, board_height, board_width);

    	expect(window_height).toEqual(size[0]);
    });

    it("should return (4,8) when grid size is originally (2, 4)", function() {
        window_width = 8;
        window_height = 8;

        board_width = 4;
        board_height = 2;

        var size = front.calculate_size(window_height, window_width, board_height, board_width);

        expect(size[1]).toEqual(window_width);
        expect(size[0]).toEqual(4);
    });
});