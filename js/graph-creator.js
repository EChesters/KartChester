$(document).ready(function() {

	var node_selected = null;

	var connected_nodes = Array();

	$('#map').click(function(e) {
		var offset = $(this).offset();
	    var posx = (e.clientX - offset.left);
	    var posy = (e.clientY - offset.top);

	    if (typeof connected_nodes !== 'undefined' && connected_nodes.length > 0) {
	    	var nodeid = connected_nodes.length; 
	    }
	    else {
	    	var nodeid = 0;
	    } 

	    position = normalise(posx, posy);

	    var node = new Node(nodeid, position[0], position[1], Array());
	    connected_nodes.push(node);

	    $('#map').after( "<a href='#' data-id=" + nodeid + " class='node' style='top: " + (posy-10) +"px; left: "+ (posx-25) +"px '>node" + nodeid +"</a>");

	    node_selected = null;

	    //update textarea
		$('#result-json').val(JSON.stringify(connected_nodes));

	});

	$(document).on('click', '.node', function(){

		if (node_selected == null) {
			$(this).css('background', 'red');
			node_selected = $(this).data('id');
		}
		else {
			$('.node').css('background', 'white');
			connected_nodes[$(this).data('id')].connected_nodes.push(node_selected);
			connected_nodes[node_selected].connected_nodes.push($(this).data('id'));
			node_selected = null;
		}

		for (var i = 0; i < connected_nodes.length; i++) {
			uniqueconnected_nodes = [];
			$.each(connected_nodes[i].connected_nodes, function(i, el){
    			if($.inArray(el, uniqueconnected_nodes) === -1) uniqueconnected_nodes.push(el);
			});
			connected_nodes[i].connected_nodes = uniqueconnected_nodes;
		}

		//update textarea
		$('#result-json').val(JSON.stringify(connected_nodes));

	});	

});

function normalise(posx, posy) {
	return [
		(posx * 100) / $('#map').height(), 
		(posy * 100) / $('#map').width()
		];
}

function Node(id, posx, posy, connected_nodes) {
	this.id = id;
	this.x = posx;
	this.y = posy;
	this.connected_nodes = connected_nodes;
}