class Boy{
    constructor(x,y,width,height){
     var options = {
         isStatic: true,
        restitution:0.2,
        friction:0.3,
        density:1.0
        }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height =height;
     World.add(world,this.body);
     this.image = loadImage("boy.png");
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}