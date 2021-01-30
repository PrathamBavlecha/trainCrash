class Boggie {
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution: 0.3
        }
        this.body = Bodies.rectangle(x,y,70,50,options)
        this.image = loadImage("images/coach.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push ()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,70,50)
        pop ()
    }
}