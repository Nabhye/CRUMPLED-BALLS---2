class BallObject{
    constructor(x,y,r){
  
  var options={
    isStatic:false,
    restitution:0.9,
    frictin:0.8,
    density:1.2,


   }
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,options);
World.add(world, this.body);

    
}

display(){

        var parperpos=this.body.position;

        push()
        translate(parperpos.x, parperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("green");
        fill("green");
        ellipse(0,0);
        pop()


}
};
