describe("Edge calculator", function() {
    it("should compute the distance from a point to a edge when the point is not on the edge", function() {
        var player_position = new Point(0.1, 0.1);
        var edge_start_point = new Point(0, 0);
        var edge_end_point = new Point(0, 0.5);
        var edge = new Segment(edge_start_point, edge_end_point);
        expect(edge.distance_from_point(player_position)).toBe(0.1);
    });

    it("should compute the distance from a point to a edge when the point is on the edge", function() {
        var player_position = new Point(0, 0.1);
        var edge_start_point = new Point(0, 0);
        var edge_end_point = new Point(0, 0.5);
        var edge = new Segment(edge_start_point, edge_end_point);
        expect(edge.distance_from_point(player_position)).toBe(0);
    });

    it("should compute the distance from a point to a edge when the point is on the edge - extreme example", function() {
        var player_position = new Point(0.5, 1.5);

        var edge_start_point = new Point(2, 1);
        var edge_end_point = new Point(1, 0);

        var edge = new Segment(edge_start_point, edge_end_point);
        expect(edge.distance_from_point(player_position)).toBe(1.41);
    });
});
