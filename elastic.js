class elastic{
    constructor(bodyA,pointB){
       
      // this.offsetX=offsetX;
      // this.offsetY=offsetY;

        var options = {
           bodyA: bodyA,
           pointB: pointB,
           stiffness:0.004,
           length: 1
           
       }

       this.bodyA = bodyA;
       this.pointB = pointB;
       this.elastic = Constraint.create(options);
       World.add(world, this.elastic);
        } 

        fly(){
           this.elastic.bodyA = null;
       }

       attach(body){
           this.elastic.bodyA = body;
       }

        display(){
            if(this.elastic.bodyA){
               var pointA = this.elastic.bodyA.position;
               var pointB = this.pointB;
               //var pointBX = this.elastic.bodyB.position.x+this.offsetX;
               //var pointBY = this.elastic.bodyB.position.y+this.offsetY;

               strokeWeight(2);
               line(pointA.x,pointA.y,pointB.x,pointB.y);
           
            }
           
          
        }
    
}
