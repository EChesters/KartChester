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
         if (distance_between_points(nodes[index],point) < distance_between_points(closest_node,point))
	     {
	            closest_node = nodes[index];
	      }
      }
    }

    return closest_node;
  }
}
