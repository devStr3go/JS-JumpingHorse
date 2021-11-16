class Plate{

    constructor(posX, posY, speed)
    {
        
        this.position = {
            x: posX,
            y: posY
        }

        this.width = 200;
        this.height = 20;

        this.speed = speed;
    }

    draw()
    {
        
        this.position.x = this.position.x + this.speed;

        if(checkBorderCollision(this) == true)
        {
            this.speed = -this.speed;
        }

        ctx.fillStyle = "blue";

        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}