function collisionPlates(obj1,obj2) 
{
    // warstwa dolna
    if(obj1.position.y <= obj2.position.y + obj2.height && 
        obj1.position.y >= obj2.position.y && 
        obj1.position.x >= obj2.position.x - obj1.width && 
        obj1.position.x <= obj2.position.x + obj2.width) 
    {

        obj1.position.y = obj2.position.y + obj2.height;

        return false;

    }
    
    // warstwa górna
    else if(obj1.position.y + obj1.height <= obj2.position.y+20 && 
        obj1.position.y + obj1.height >= obj2.position.y-10 && 
        obj1.position.x >= obj2.position.x - obj1.width
        && obj1.position.x <= obj2.position.x + obj2.width) 
    {

        obj1.position.y = obj2.position.y - obj1.height;

        obj1.land();

        //przekazywanie predkosci na gracza
        if(obj1.speed.x == 0 || obj1.speed.x == obj2.speed || obj1.speed.x == -obj2.speed)
        {
            //warunek tego by postaci gracza nie wywalalo poza mape
            if(checkBorderCollision(obj1) == false || checkBorderCollision(obj2) == true)
            {

                obj1.speed.x = obj2.speed;

            }

        }

        return true;

    }
    
    return false;
}

function checkBorderCollision(obj) 
{
    // działanie funkcji dla obiektów posiadających dwukierunkowe speed: speed.x i speed.y
    if(obj.speed.x) 
    {
        if(obj.position.x <= 0 && obj.speed.x < 0 || obj.position.x >= 800 - obj.width && obj.speed.x > 0) 
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    // działanie funkcji dla obiektów posiadających jednokierunkowe speed
    else 
    {
        if(obj.position.x <= 0 || obj.position.x >= 800 - obj.width) 
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
}

function checkBottomBorderCollision(obj) 
{
    if(obj.position.y + obj.height >= 800 )
    {
        return true;
    }
}

function checkTopBorderCollision(obj) 
{
    if(obj.position.y + obj.height <= 0 )
    {
        return true;
    }
}