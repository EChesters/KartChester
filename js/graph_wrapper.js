function graph_wrapper(graph_json) {
    this.graph_json = graph_json;
    this.get_connected_edges_ids = function (id_to_look_for) {
        for (var i=0; i<this.graph_json.length; i++) {
            edge = this.graph_json[i];
            console.log(edge);
            if (edge.id == id_to_look_for ) {
                return edge.connected_edges;
            }
        }
        return [];
    }
}