class Pig{
constructor(x,y){







this.body = Bodies.rectangle(x,y,40,40)
World.add(world,this.body)
}
display(){

var pos = this.body.position;
rectMode(CENTER);
fill ("green");
rect(pos.x,pos.y,40,40);




}



}