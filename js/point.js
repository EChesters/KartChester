function Point(x,y) {
    this.x = x;
    this.y = y;
}

function distance_between_points(one_point, another_point){
    return Math.sqrt((one_point.x-another_point.x)*(one_point.x-another_point.x) + (one_point.y-another_point.y)*(one_point.y-another_point.y))
}
