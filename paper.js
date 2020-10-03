class paper{
    constructor(r){
        var options={
            
            restitution:0.3,
            friction:0.5,
            density: 1.2
        }
        
        this.body= Bodies.circle(200,200,r,options);
        this.image=loadImage("sprites/paper.png");
        this.r=r;

        World.add(world, this.body);
    }
    display(){
        
        circle(200,200,this.r);
        image(this.image, 200, 200);
    }
}