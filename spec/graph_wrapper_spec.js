describe("Graph Wrapper", function() {
    it("should return the connected edges for an edge identified by an id", function() {
        var graph_json = sample_data_graph;
        var graph_wrapper = new GraphWrapper(graph_json);
        var id_to_look_for = 2;
        var expected_list_of_ids = [1,3]
        expect(graph_wrapper.get_connected_edges_ids(id_to_look_for)).toEqual(expected_list_of_ids);
    });

    it("should return an edge object as described in the sample json for an id", function(){

        var graph_json = sample_data_graph;
        var graph_wrapper = new GraphWrapper(graph_json);
        var id = 1;
        var expected_edge =
        {
            "id": "1",
            "start_x": 100,
            "start_y": 100,
            "end_x": 200,
            "end_y": 200,
            "connected_edges": [2]
        };

        expect(graph_wrapper.get_edge_for_id(id)).toEqual(expected_edge);

    })

});
