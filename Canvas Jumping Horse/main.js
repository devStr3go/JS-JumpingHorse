let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const gameWidth = 800;
const gameHeight = 800;

let player = new Player();

//platformy
let plates = [new Plate(300, 400,0)];
plates.push(new Plate(100,600,0));
plates.push(new Plate(500, 200,0));

new signalHandler();
let level = new MapLevel();

function main(){

    ctx.clearRect(0,0,gameWidth,gameHeight);
    
    plates.forEach((plates) =>{
        plates.draw();
    })
    
    player.draw();

}

setInterval(main,1000/60);