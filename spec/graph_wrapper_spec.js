describe("Graph Wrapper", function() {
    it("should return the connected edges for an edge identified by an id", function() {
        var graph_json = sample_data_graph;
        var graph_wrapper = new GraphWrapper(graph_json);
        var id_to_look_for = 2;
        var expected_list_of_ids = [1,3]
        expect(graph_wrapper.get_connected_edges_ids(id_to_look_for)).toEqual(expected_list_of_ids);
    });

    it("should return an current_segment for an id", function(){

        var graph_json = sample_data_graph;
        var graph_wrapper = new GraphWrapper(graph_json);
        var id = 1;

        var expected_segment = new Segment("1", new Point(100,100),new Point(200,200))

        expect(graph_wrapper.get_segment_for_id(id).start_point).toEqual(expected_segment.start_point);
        expect(graph_wrapper.get_segment_for_id(id).end_point).toEqual(expected_segment.end_point);

    });

    it("should return a list of all segments in the map", function() {
        var graph_json = sample_data_graph;
        var graph_wrapper = new GraphWrapper(graph_json);

	var expected_segments = [new Segment(1, new Point(100, 100), new Point(200, 200)),
                                 new Segment(2, new Point(200, 200), new Point(300, 200)),
                                 new Segment(3, new Point(300, 200), new Point(400, 100)),
	                         new Segment(4, new Point(300, 200), new Point(400, 300))];

        var segments = graph_wrapper.get_all_segments();
        expect(segments.length).toEqual(4);
	expect(segments[0].id).toEqual(1);
	expect(segments[1].id).toEqual(2);
	expect(segments[2].id).toEqual(3);
	expect(segments[3].id).toEqual(4);
    });

});
