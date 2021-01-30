class Ground {
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.w = w
        this.h = h
    }
    display(){
      var pos = this.body.position
      push ()
      rectMode(CENTER)
      rect(pos.x,pos.y,this.w,this.h    )
      pop ()
     }
}