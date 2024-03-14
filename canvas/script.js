const canvas = document.querySelector('.can');
const ctx = canvas.getContext('2d');

const block = 30;
const grid = 6;
let coord = {
    x: 0,
    y: 0
}

let layer = 0; // Для отслеживания текущего слоя

let int = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'orange';
    ctx.fillRect(coord.x, coord.y, block, block);
    
    coord.x += block;
    
    // Проверяем, достигли ли мы крайа текущего слоя
    if (coord.x >= canvas.width - block * (grid - layer)) {
        coord.x = 0;
        coord.y += block;
        
        // Проверяем, достигли ли мы конца области
        if (coord.y >= canvas.height - block * (grid - layer)) {
            coord.y = 0;
            layer = (layer + 1) % grid; // Переход на следующий слой
        }
    }
}, 100);

canvas.onmousedown = function() {
    canvas.onmousemove = function (event){
        ctx.fillRect(event.offsetX-4, event.offsetY-4, 15, 15)
    }
}

canvas.onmouseup = function(){
    canvas.onmousemove = null
}








// ctx.fillStyle = 'blue'
// x = Math.floor(event.offsetX / 30)* 30
    // y = Math.floor(event.offsetY / 30) * 30

// ctx.fillStyle = 'blue'
// ctx.fillRect(30, 30, 60, 60) //4 значения // (x, y, залив x, залив y)
// ctx.clearRect(60, 60, 60, 60)

// ctx.strokeStyle = 'green'
// ctx.lineWidth = '5'
// ctx.rect(150, 150, 30, 30)
// ctx.stroke()

// ctx.fillStyle = 'yellow'
// ctx.fill()
