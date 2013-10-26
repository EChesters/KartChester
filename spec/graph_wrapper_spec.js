describe("Graph Wrapper", function() {
    it("should return the connected edges for an edge identified by an id", function() {
        graph_json = sample_data_graph
        graph_wrapper = new graph_wrapper(graph_json);
        id_to_look_for = 2;
        expected_list_of_ids = [1,3]
        expect(graph_wrapper.get_connected_edges_ids(id_to_look_for)).toEqual(expected_list_of_ids)
    });


});
