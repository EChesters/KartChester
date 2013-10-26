function point(x,y) {
    var new_point = {};
    new_point.x = x;
    new_point.y = y;
    return new_point;
}

function distance_between_points(one_point, another_point){
    return Math.sqrt((one_point.x-another_point.x)*(one_point.x-another_point.x) + (one_point.y-another_point.y)*(one_point.y-another_point.y))
}