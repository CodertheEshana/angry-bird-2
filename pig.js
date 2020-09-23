class Pig extends Base{
    constructor(x, y, width, height) {
      super(x,y,width,height)
        this.image=loadImage("attachments/enemy.png")
       
      }
      display(){
        super.display()
      }
}