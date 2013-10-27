function PositionCalculator(increment) {
  this.increment = increment;

  this.get_next_position = function(current_position, target_node) {
    var y_difference = Math.abs(current_position.y - target_node.y);
    var distance_to_target_node = distance_between_points(current_position, target_node);

    var gradient_to_node = Math.asin(y_difference / distance_to_target_node);

    var x_change = this.increment * Math.cos(gradient_to_node);
    var y_change = this.increment * Math.sin(gradient_to_node);

    var sign_y = current_position.y < target_node.y ? 1 : -1;
    var sign_x = current_position.x < target_node.x ? 1 : -1;

    var new_position = new Point(current_position.x + (sign_x * x_change), current_position.y + ( sign_y * y_change), 1);

    if (distance_between_points(current_position, new_position) > distance_between_points(current_position, target_node))
    {
        new_position = target_node;
    }

    return new_position;
  }
}
