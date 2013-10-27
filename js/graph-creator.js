$(document).ready(function() {

	var node_selected = null;

	var nodes = Array();

	$('#map').click(function(e) {
		var offset = $(this).offset();
	    var posx = (e.clientX - offset.left);
	    var posy = (e.clientY - offset.top);

	    if (typeof nodes !== 'undefined' && nodes.length > 0) {
	    	var nodeid = nodes.length; 
	    }
	    else {
	    	var nodeid = 0;
	    } 

	    position = normalise(posx, posy);

	    var node = new Node(nodeid, position[0], position[1], Array());
	    nodes.push(node);

	    $('#map').after( "<a href='#' data-id=" + nodeid + " class='node' style='top: " + (posy-10) +"px; left: "+ (posx-25) +"px '>node" + nodeid +"</a>");

	    node_selected = null;

	    //update textarea
		$('#result-json').val(JSON.stringify(nodes));

	});

	$(document).on('click', '.node', function(){

		if (node_selected == null) {
			$(this).css('background', 'red');
			node_selected = $(this).data('id');
		}
		else {
			$('.node').css('background', 'white');
			nodes[$(this).data('id')].nodes.push(node_selected);
			nodes[node_selected].nodes.push($(this).data('id'));
			node_selected = null;
		}

		for (var i = 0; i < nodes.length; i++) {
			uniqueNodes = [];
			$.each(nodes[i].nodes, function(i, el){
    			if($.inArray(el, uniqueNodes) === -1) uniqueNodes.push(el);
			});
			nodes[i].nodes = uniqueNodes;
		}

		//update textarea
		$('#result-json').val(JSON.stringify(nodes));

	});	

});

function normalise(posx, posy) {
	return [
		(posx * 100) / $('#map').height(), 
		(posy * 100) / $('#map').width()
		];
}

function Node(id, posx, posy, nodes) {
	this.id = id;
	this.x = posx;
	this.y = posy;
	this.nodes = nodes;
}