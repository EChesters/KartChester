describe("Graph Wrapper", function() {
    it("should return the connected edges for an edge identified by an id", function() {
        var graph_json = sample_data_graph;
        var graph_wrapper = new GraphWrapper(graph_json);
        var id_to_look_for = 1;
        var expected_list_of_ids = [2,3]
        expect(graph_wrapper.get_connected_node_ids(id_to_look_for)).toEqual(expected_list_of_ids);
    });

    it("should return an node for an id", function(){

        var graph_json = sample_data_graph;
        var graph_wrapper = new GraphWrapper(graph_json);
        var id = 1;

        expect(graph_wrapper.get_node_for_id(id).x).toEqual(100);
        expect(graph_wrapper.get_node_for_id(id).y).toEqual(100);

    });

    it("should return a list of all nodes in the map", function() {
        var graph_json = sample_data_graph;
        var graph_wrapper = new GraphWrapper(graph_json);


        var nodes = graph_wrapper.get_all_nodes();
        expect(nodes.length).toEqual(3);
	expect(nodes[0].id).toEqual(1);
	expect(nodes[1].id).toEqual(2);
	expect(nodes[2].id).toEqual(3);
    });

});
