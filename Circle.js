class Circle {
    radius;
    color;
    constructor(radius) {
        this.radius = radius;
    }
    getRadius = function () {
        return this.radius;
    }
    getArea = function () {
        return Math.PI * radius * radius;
    }
}
let circle = new Circle(6);
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius: " + radius + "; area: " + area);
