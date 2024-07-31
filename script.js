var canvas = document.getElementById("myCanvas");
var brush = canvas.getContext("2d")
let num  = document.getElementById("num")


function add() {
    let b = canvas.width / num.value;  
    for (let index = 0; index < num.value; index++) {
        let x = index * b;
        let y = Math.random() *canvas.height; 
        let h = canvas.height - y;  
        let R = Math.random() * 255;
        let G = Math.random() * 255;
        let B = Math.random() * 255;
        let color = `rgb(${R},${G},${B})`;

        brush.fillStyle = color;
        brush.fillRect(x, y, b-3, h); 
      

    }
    
}