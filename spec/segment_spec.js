describe("Segment", function(){

    it("should validate a point that is in bounds", function(){

        var segment = new Segment(1, new Point(0,0), new Point(100,100));
        var point = new Point(0, 10);

        expect(segment.is_point_around(point)).toBeTruthy();

    });


    it("should not validate a point that is not in bounds", function(){

        var segment = new Segment(1, new Point(0,0), new Point(100,100));
        var point = new Point(200, 200);

        expect(segment.is_point_around(point)).toBeFalsy();

    })

})