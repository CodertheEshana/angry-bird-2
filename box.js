class Box extends Base { 
  constructor(x, y, width, height) {
    super(x,y,width,height)
   
    this.image=loadImage("attachments/wood1.png")
  }
  display(){
   super.display()
  }
};
