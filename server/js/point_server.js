var just_2_decimals = require('./numbers_server.js');
function Point(x, y, id) {
    this.id = id;
    this.x = just_2_decimals(x);
    this.y = just_2_decimals(y);
}

function distance_between_points(one_point, another_point){
    return Math.sqrt((one_point.x-another_point.x)*(one_point.x-another_point.x) + (one_point.y-another_point.y)*(one_point.y-another_point.y))
}

module.exports = Point;