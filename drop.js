class Drop {
    constructor (){
      this.x = random(0,1350);
      this.y = random(-1000,0);
      this.speed = random(7,20);
    }

    fall(){
      this.y = this.y + this.speed;

      if (this.y > 600) {
        this.y = random(-1000,0);
      }
    }

    display() {
      line(this.x,this.y,this.x,this.y+20);
      stroke("yellow");
    }
  };