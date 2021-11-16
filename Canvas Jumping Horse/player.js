class Player {

    constructor() 
    {

        this.position = {
            x: 100,
            y: 600
        }

        this.width = 100;
        this.height = 100;

        this.gravity = 10;

        this.speed = {
            x: 0,
            y: 0 
        }
        this.maxSpeed = 10;
        this.maxJumpHeight = 30;

        //do wyjebania jumping jak mi sie bd chcialo
        this.jumping = false;
        this.grounded = false;

        //sprite postaci
        this.spritesheet = document.querySelector('#horse');
        this.sprite = this.spritesheet;
        this.sprite.onload = function(){};
         
        this.sprite.frameSheet = {
            x: 0,
            y: 0
        }
        this.sprite.direction = 1;

    }

    move(direction)
    {
        this.speed.x = this.maxSpeed * direction;

        //animacja konia
        if(direction == 1)
        {
            this.sprite.direction = 1;
        }
        else
        {
            this.sprite.direction = -1;
        }
    }
    
    stop()
    {
        this.speed.x = 0;
    }
    
    jump()
    {
        if(this.jumping == false && this.grounded == true)
        {
            this.speed.y = -this.maxJumpHeight;

            this.jumping = true;
        }
    }

    land()
    {
        this.jumping = false;
        this.grounded = true;
    }

    animate()
    {
        if(this.sprite.direction == 1) 
        {
            if(this.jumping == true || this.grounded == false) 
            { 
                this.sprite.frameSheet.x = 300; 
            }
            else 
            {  
                this.sprite.frameSheet.x = 100; 

            }
        }
        else
        {
            if(this.jumping == true || this.grounded == false)
            {
                this.sprite.frameSheet.x = 200;
            }
            else
            {
                this.sprite.frameSheet.x = 0;
            }
        }
    }

    draw()
    {
        
        if(checkBorderCollision(this))  player.stop();

        //sprawdzenie czy postac stoi na jakiejs z platform
        plates.forEach((plates) => {
            if(collisionPlates(this,plates) == false)
            {
                this.grounded = false;
            }
            else
            {
                this.grounded = true;
            }
        });

        //movement
        this.position.x = this.position.x + this.speed.x;
        this.position.y = this.position.y + this.speed.y;

        //grawitacja
        if(this.grounded == false)
        {
            this.position.y += this.gravity;
        }

        //skok
        if(Math.floor(this.speed.y) != 0 && this.speed.y >= -this.maxJumpHeight )
        {
            this.speed.y += this.maxJumpHeight/45;
            
        }

        //kolizje z plates
        plates.forEach((plates) => {
            collisionPlates(this,plates);
        })

        if(checkBottomBorderCollision(this)) 
        {
            this.position.y = 800-this.height;
            this.land();
        }
        if(checkTopBorderCollision(this))
        {
            level.levelUp();
        }

        this.animate();

        //render postaci
        ctx.drawImage(this.sprite, this.sprite.frameSheet.x, this.sprite.frameSheet.y, this.width, this.height, this.position.x, this.position.y, this.width, this.height)

    }

}