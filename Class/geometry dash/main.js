var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var backgroundX = 0; 

background = new Image();
background.src = "/images/background_1.png";
ctx.drawImage(background, backgroundX, 0, canvas.width, canvas.height);

var background2X = canvas.width;

background2 = new Image();
background2.src = "/images/background_2.png";
ctx.drawImage(background2, background2X, 0, canvas.width, canvas.height);

platform = new Image();
platform.src = "images/platform.png";
ctx.drawImage(platform, 300, 250, 60, 60);
platformX = canvas.width

spike = new Image();
spike.src = "/images/spike.png";
ctx.drawImage(spike, 300, 390, 40, 60);
spikeX = canvas.width+spike.width;

player = new Image();
player.src = "/images/player.png";
ctx.drawImage(player, 200, 350, 70, 70);
playerY = 370;

floor = new Image();
floor.src = "/images/floor.png";
ctx.drawImage(floor, 0, 450, canvas.width, 50);



function update() {
    backgroundX -= 1;
    background2X -= 1;
    platformX -= 4;
    spikeX -= 3;
    if (spikeX < 0 - spike.width) {
        spikeX = canvas.width;
    };
    if (platformX < 0 - platform.width) {
        platformX = canvas.width;
    };
    if (backgroundX < 0 - backgroundX.width) {
        backgroundX = canvas.width;
    };
    
    if (background2X < 0 - background2X.width) {
        background2X = canvas.width;
    }
    
        

}

function draw() {
    if (background.complete && background2.complete, platform.complete &&    
          spike.complete && player.complete && 
          floor.complete) {

        ctx.drawImage(background, backgroundX, 0, 
                      canvas.width, 
                      canvas.height);
        ctx.drawImage(background2, background2X, 0, 
                      canvas.width, 
                      canvas.height);
        ctx.drawImage(platform, platformX, 240,
                      platform.width/2,
                      platform.height/2);
        ctx.drawImage(spike, spikeX, 385,
                      spike.width/2,
                      spike.height/2);

        ctx.drawImage(player, 200, playerY, 
                      player.width/3,
                      player.height/3);
        ctx.drawImage(floor, 0, 460, canvas.width, 50);

    }

 };

jumpHeight = 13;
jumpVol = 0;
jumping = 0;
up = 0;
down = 0;

function jump() {
    while (i < 10) {
        playerY -= 1;
        i++;
    }
    
    
    
    
    /*jumping = 1;
    jumpVol = jumpHeight;
    while (jumping == 1) {
        if (jumpVol < 1 && up == 1) {
            up = 0;
            down = 1;
        } else if (playerY > 370 && down == 1) {
            up = 0;
            down = 0;
            jumping = 0;
        }
        
        if (up == 1) {
            playerY -= jumpVol;
            jumpVol -= 0;
        }
        
        if (down == 1) {
            jumpVol += 0;
            playerY += jumpVol;
        }
        
        
        
    } */
    
    
    
    
    
    
    
    
    /*jumping = true;
    up = true;
    jumpVol = jumpHeight;
    while (jumping) {
        if (up == true) {
            playerY -= jumpVol;
            jumpVol -= 1;
            
            if (jumpVol < 1) {
                up = false;
                down = true;
            }
        } else if (down == true) {
            jumpVol += 1;
            playerY += jumpVol;
            
            if (playerY > 370) {
                jumping = false;
                up = false;
                down = false;
            }
        }
    } */
}




//key handler 
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 32) {
            //jump();
            i = 0 
            while (i < 10) {
                playerY -= 1;
                i++;
            } 
            console.log(jumpVol);
    }
})

function gameLoop() {
    update();
    draw();
}

background.onload = draw;
background2.onload = draw;
platform.onload = draw;
spike.onload = draw;
player.onload = draw;
floor.onload = draw;

setInterval(gameLoop,20)