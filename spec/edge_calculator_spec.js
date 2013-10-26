describe("Edge calculator", function() {
    it("should compute the distance from a point to a edge when the point is not on the edge", function() {
        player_position = point(0.1,0.1);
        edge_start_point = point(0,0);
        edge_end_point = point(0,0.5);
        edge = new segment(edge_start_point,edge_end_point);
        expect(edge.distance_from_point(player_position)).toBe(0.1);
    });

    it("should compute the distance from a point to a edge when the point is on the edge", function() {
        player_position = point(0,0.1);
        edge_start_point = point(0,0);
        edge_end_point = point(0,0.5);
        edge = new segment(edge_start_point,edge_end_point);
        expect(edge.distance_from_point(player_position)).toBe(0);
    });

    it("should compute the distance from a point to a edge when the point is on the edge - extreme example", function() {
        player_position = point(0.5,1.5);

        edge_start_point = point(2,1);
        edge_end_point = point(1,0);

        edge = new segment(edge_start_point,edge_end_point);
        expect(edge.distance_from_point(player_position)).toBe(1.4);
    });
});