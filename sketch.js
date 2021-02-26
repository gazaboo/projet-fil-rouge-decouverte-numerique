var capture;
var color_clicked;
var img; 
var w = 640; 
var h = 480;
var slider; 


function setup() {
    createCanvas(w, h);
    capture = createCapture(VIDEO);
    capture.hide();
    img = loadImage('assets/time.jpg'); 
    slider = createSlider(0, 200, 20, 1); 
    slider.position(10,10); 
    slider.style('width', '80px'); 
}

function draw() {
    image(capture, 0, 0, w, h);
    img.loadPixels();
    loadPixels();
    if (color_clicked != undefined){
        print(color_clicked)
        for (let i = 0; i < w*h*4; i += 4) {
            let c = [pixels[i], pixels[i+1], pixels[i+2], pixels[i+3]];  
            let d = distance_color(color_clicked, c); 
            if (d < slider.value()){
                pixels[i]   = img.pixels[i];
                pixels[i+1] = img.pixels[i+1];
                pixels[i+2] = img.pixels[i+2]; 
            }
        }    
    }
    updatePixels(); 
}

function mouseClicked() {
    color_clicked = get(mouseX, mouseY);
}

function distance_color(c1, c2){
    let d = 0; 
    for (let i = 0; i < 4; i ++) {
        d = d + Math.pow(c1[i] - c2[i], 2); 
    }
    return Math.sqrt(d);   
} 