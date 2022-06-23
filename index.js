const superMario = document.querySelector("#super-mario");
const pipe = document.querySelector("#pipe-game");
const clouds = document.querySelector("#clouds-game");


//Creating the jump function
    const jump = () => {
        superMario.classList.add("jump-mario");
        
        setTimeout(() => {
            superMario.classList.remove("jump-mario");
        }, 500);

    }

//Implementing the score
    var point = 0;
    
    function counterVal(){
        point += 1;
        updateDisplay(point);
    }

    function updateDisplay(val) {
        document.querySelector(".score").innerHTML = val;
}

    const score = setInterval(counterVal,1500);


//Creating a function with the conditions for the game to stop 

    const loopgame = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
            
        const superMarioPosition = +window
            .getComputedStyle(superMario)
            .bottom.replace("px","");

            if(pipePosition <= 120 && pipePosition > 0 && superMarioPosition < 80) {
                pipe.style.animation = "none";
                pipe.style.left = `${pipePosition}px`;

                superMario.style.animation = "none";
                superMario.style.bottom = `${superMarioPosition}px`;

                superMario.src="./Images/mario-game-over.png";
                superMario.style.width = "75px";
                superMario.style.marginLeft = "35px";

                clouds.style.display = "none";

                clearInterval(loopgame);

                clearInterval(score);

                disableAutoplay() 

                enableGameOver()

                restartButton();
                }
        
    },10);

    document.addEventListener("keydown", jump);


//Function related  to the restart button
    const restartButton = () => {
        const button = document.createElement("button");
        button.innerHTML = "RESTART";
        button.classList.add("addRestartButton");

        const btn = document.querySelector(".restartButton");
        btn.appendChild(button)

        button.addEventListener("click", ()=>{location.reload()});
    }



//Setting the "game over" sound and the final alert

    let gameOver = document.querySelector("#game-over");

    function enableGameOver() { 
        gameOver.autoplay = true;
        gameOver.load();

        alert("GAME OVER \n \n Click on RESTART to play again.");
    }

 //Function to start/pause audio

 let superMarioSong = document.querySelector("#superMarioSong");

 function disableAutoplay() { 
     if(superMarioSong.autoplay = true){
     superMarioSong.autoplay = false;
     superMarioSong.load();
     }
 }

 function enableAutoplay() { 
     superMarioSong.autoplay = true;
     superMarioSong.load();
 }
