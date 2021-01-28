class stone{
    constructor(x,y,diameter){
     var options = {
         isStatic:false,
         restitution:0,
         friction: 1,
         density:1.2
        }
        this.diameter = diameter;
        this.x = x;
        this.y = y;
     this.body = Bodies.circle(this.x,this.y,(diameter)/2,options);
     
     World.add(world,this.body);
     this.image = loadImage("stone.png");
    }

    
     

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.diameter,this.diameter);
        pop();

    }
}