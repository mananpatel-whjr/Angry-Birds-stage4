class Slingshot {
    constructor (bodyA,pointB) {
        var options = {

         bodyA:bodyA,
        pointB:pointB,
        stiffness:0.01,
        length:20
    }
    this.slingshot = Constraint.create(options);
    this.pointB=pointB
    World.add(world,this.slingshot)
    }
    display () {
        if (this.slingshot.bodyA) {
            var pointA=this.slingshot.bodyA.position
            var pointB=this.pointB
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        }
        
    fly() {
        this.slingshot.bodyA=null
    }
}
