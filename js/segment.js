function segment(start_point, end_point) {

    this.start_point = start_point;
    this.end_point = end_point;
    this.len = distance_between_points(start_point,end_point);

    this.distance_from_point = function (a_point) {

        one_side_length = distance_between_points(a_point,start_point);
        the_other_side_length = distance_between_points(a_point,end_point);

        semi_perimeter = (one_side_length + the_other_side_length + this.len)*0.5

        area = Math.sqrt(semi_perimeter*(semi_perimeter - one_side_length)*(semi_perimeter - the_other_side_length)*(semi_perimeter - this.len))

        return just_2_decimals(2*area/this.len);
    }
}


