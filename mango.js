class mango{
    constructor(x,y,diameter){
     var options = {
         isStatic:true,
         restitution:0,
         friction: 1
    }

     this.x = x;
     this.y = y;
     this.diameter = diameter;
     this.body = Bodies.circle(x,y,(diameter)/2,options);
     World.add(world,this.body);
     this.image = loadImage("mango.png");
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.diameter,this.diameter);
    }
}