class Paper {
    constructor(x, y, r) {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
            isStatic: false
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        this.image = loadImage("Sprites/paper.png")
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill("pink");
        image(this.image, 0, 0, 50, 50);
        pop();
    }
}