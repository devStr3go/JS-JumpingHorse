class MapLevel {

    constructor()
    {
        this.level = 1;

        this.difficulty = {
            easy: 7,
            medium: 12,
            hard: 17
        }

        this.height = {
            top: 200,
            middle: 400,
            bottom: 600
        }

        this.maxPlatesSpeed = this.difficulty.easy;
        this.minPlatesSpeed = 0;

        document.querySelector('#blocks').innerHTML += '<div id="score-panel"></div';
        document.querySelector('#score-panel').innerHTML = 'Level ' + this.level;

        document.querySelector('#blocks').innerHTML += '<div id="difficulty-panel"></div>';
        document.querySelector('#difficulty-panel').innerHTML += '<p>Difficulty:</p>';
        document.querySelector('#difficulty-panel').innerHTML += '<h3>Easy</h3>';
        document.querySelector('#difficulty-panel').style.color = 'Green';

    }
    
    levelUp()
    {

        this.level++;

        if(this.level == 5)
        {
            this.maxPlatesSpeed = this.difficulty.medium;
            this.minPlatesSpeed = this.difficulty.easy;

            document.querySelector('#difficulty-panel h3').innerHTML = 'Medium';
            document.querySelector('#difficulty-panel').style.color = 'Yellow';
        }
        else if(this.level == 10)
        {
            this.maxPlatesSpeed = this.difficulty.hard;
            this.minPlatesSpeed = this.difficulty.medium;

            document.querySelector('#difficulty-panel h3').innerHTML = 'Hard';
            document.querySelector('#difficulty-panel').style.color = 'Red';
        }

        document.querySelector('#score-panel').innerHTML = 'Level ' + this.level;

        player.position = {
            x: 400 - player.width/2,
            y: 800
        }

        plates = [];

        plates.push(new Plate(400, this.height.bottom, Math.floor(Math.random() * (this.maxPlatesSpeed-this.minPlatesSpeed) + this.minPlatesSpeed)));
        plates.push(new Plate(400, this.height.middle, Math.floor(Math.random() * (this.maxPlatesSpeed-this.minPlatesSpeed) + this.minPlatesSpeed)));
        plates.push(new Plate(400, this.height.top, Math.floor(Math.random() * (this.maxPlatesSpeed-this.minPlatesSpeed) + this.minPlatesSpeed)));

        plates.forEach((plates) =>{
            if(plates.speed == player.maxSpeed){
                plates.speed++;
            }
        })
    }
}