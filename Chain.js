class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.5
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var pos1 = this.chain.bodyA.position
        var pos2 = this.chain.bodyB.position
        push ()
        strokeWeight(5)
        stroke("black")
        line(pos1.x,pos1.y,pos2.x,pos2.y)
        pop ()
    }
}