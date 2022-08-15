class Bird{
constructor(x,y,r,color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
}

show(){
    fill(this.color)
    circle(this.x,this.y,this.r)
}


}