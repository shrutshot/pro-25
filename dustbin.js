class dust{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        this.x=x;
        this.y=y;
        World.add(world, this.body);
    }
    display(){
       rect(this.x,this.y,this.w,this.h) ;
       image(this.image, 0, 0, this.w, this.h);
    }
}