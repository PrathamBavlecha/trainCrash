class Rock {
    constructor(x,y){
        var options = {
            isStatic:false
        }
        this.body = Matter.Bodies.circle(x,y,100,options)
        this.image = loadImage("images/rock1.png")
        this.r = 100
        World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      push ()
      imageMode(RADIUS)
      image(this.image,pos.x,pos.y,this.r,this.r)
      pop ()
     }
}