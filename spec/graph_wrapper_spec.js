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

    })

});
