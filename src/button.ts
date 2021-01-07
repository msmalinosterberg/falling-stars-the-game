class Button {
    x: number; 
    y:number; 
    r:number; 
    content: p5.Image | string; 
    type: 'image' | 'text'; 
    prevMouseIsPressed: boolean; 
    public poppinsBold: p5.Font;
    public poppinsLight: p5.Font;


    constructor(x: number, y:number, r: number, content: p5.Image|string, type:'image'|'text'){
        this.x = x; 
        this.y = y;  
        this.r = r; 
        this.content = content; 
        this.type = type; 
        this.prevMouseIsPressed = mouseIsPressed; 
        this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
        this.poppinsLight = loadFont('./assets/poppins/Poppins-Light.ttf');
    }

    update(){
        if(!this.prevMouseIsPressed && mouseIsPressed) { 
            let d = dist(mouseX, mouseY, this.x, this. y)
            if(d < this.r){
                console.log('restart game')
                //restart function() 
            }
        }
        this.prevMouseIsPressed = mouseIsPressed; 

    }

    draw(){
        push()
        this.circle();
        //Restart Game text 
        fill('white')
        textFont(this.poppinsLight); 
        textAlign(CENTER, CENTER)
        textSize(25)
    // const width = textWidth("Restart Game");
        text("Restart Game", this.x, this.y);
        pop()
    }

    circle(){
        noStroke();
        noFill(); 
        ellipse(this.x, this.y, this.r); 
        
    }

    
    
}
