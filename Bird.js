class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.img2 = loadImage("sprites/smoke.png");
    this.ar1 = [];
  }

  display() {
    super.display();
    if(this.body.position.x > 200 && this.body.velocity.x > 10){
      var ar2 = [this.body.position.x, this.body.position.y];
      this.ar1.push(ar2);
    }
    

    for(var i = 0; i < this.ar1.length; i++){
      image(this.img2, this.ar1[i][0], this.ar1[i][1]);
    }
  }
}
