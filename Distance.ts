class Circle {
    radius: number
    constructor(radius: number) {
        this.radius = radius
    }
}
function distance(big_radius, small_radius): number {
    let dist = Math.sqrt((big_radius - small_radius)**2 + 24**2)
    return dist
}
let big = new Circle(9)
let small = new Circle(5)
console.log(distance(big.radius, small.radius))