class signalHandler {

    constructor() 
    {

        document.addEventListener('keydown', (event) => {
            switch(event.keyCode)
            {
                case 37:
                case 65:
                    player.move(-1);
                    break;

                case 39:
                case 68:
                    player.move(1);
                    break;

                case 32:
                case 38:
                case 87:
                    player.jump();
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch(event.keyCode)
            {
                case 37:
                case 65:
                    if(player.speed.x < 0) player.stop();
                    break;
                
                case 39:   
                case 68:
                    if(player.speed.x > 0) player.stop();
                    break;
            }
        });

    }

}