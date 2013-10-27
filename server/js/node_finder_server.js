var Point = require('./point_server.js');

function NodeFinder(nodes) {
  this.get_closest_node_to = function(point) {
    if (nodes.length === 0)
    {
      return null;
    }
    else
    {
      var closest_node = nodes[0];

      for (var index = 1; index < nodes.length; index++)
      {
         if (nodes[index].distance_to_other_point(point) < closest_node.distance_to_other_point(point))
	     {
	         closest_node = nodes[index];
	     }
      }
    }

    return closest_node;
  }
}

module.exports = NodeFinder;