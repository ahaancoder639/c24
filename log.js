class Log {
    constructor(x,y,width,height){
    
    
    
    
    
    
    
    this.body = Bodies.rectangle(x,y,width,height)
    this.width = width;
    this.height = height;
    Matter.Body.setAngle(this.body,45)
    World.add(world,this.body)
    }
    display(){
    
    var pos = this.body.position;
    rectMode(CENTER);
    fill ("brown");
    push ()
translate (pos.x,pos.y);
    rotate (45);
    rect(0,0,this.width,this.height);
    pop ()
    
    
    
    }
    
    
    
    }