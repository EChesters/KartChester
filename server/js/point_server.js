var just_2_decimals = require('./numbers_server.js');
function Point(x, y, id) {
    this.id = id;
    this.x = just_2_decimals(x);
    this.y = just_2_decimals(y);

    this.distance_to_other_point = function(another_point) {
        return Math.sqrt((this.x-another_point.x)*(this.x-another_point.x) + (this.y-another_point.y)*(this.y-another_point.y))
    }
}

module.exports = Point;