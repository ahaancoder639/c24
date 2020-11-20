class Ground {
constructor(x,y)
{

    var optional = { 
        isStatic : true

    }

this.body = Bodies.rectangle(x,y,400,20,optional);
    World.add(world,this.body);

}
display()
{
var pos = this.body.position;
rectMode(CENTER);
rect(pos.x,pos.y,400,20);

}


}