const superMario = document.querySelector("#super-mario");
const pipe = document.querySelector("#pipe-game");
const clouds = document.querySelector("#clouds-game");

    const jump = () => {
        superMario.classList.add("jump-mario");
        
        setTimeout(() => {
            superMario.classList.remove("jump-mario");
        }, 500);

    }

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

                restartButton();
                }
        
    },10);

    document.addEventListener("keydown", jump);


const restartButton = () => {
    const button = document.createElement("button");
    button.innerHTML = "RESTART";
    button.classList.add("restartButton");

    const btn = document.querySelector(".restartButton");
    btn.appendChild(button)

    button.addEventListener("click", ()=>{location.reload()});
}

var point = 0;

function counterVal(){
    point += 1;
    updateDisplay(point);
}


function updateDisplay(val) {
    document.querySelector(".score").innerHTML = val;
}
