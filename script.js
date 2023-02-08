const maxHealth = {
  player: 500,
  robot: 500,
};

const start = document.getElementsByClassName("str-btn")[0];
//console.log(start);
const attack = document.getElementsByClassName("att-btn")[0];
//console.log(attack);
const reset = document.getElementsByClassName("re-btn")[0];
let playerHealth = document.getElementById("player_health_status").value;
//console.log(playerHealth);
let robotHealth = document.getElementById("robot_health_status").value;

//event done by clicking start button
function clickedStart() {
  if (attack.style.display == "none") {
    attack.style.display = "block";
    start.style.display = "none";
  }
}
start.addEventListener("click", clickedStart);

//console.log(document.getElementById("player_health_status"))
//setting attribute

document.getElementById("player_health_status").setAttribute("max", maxHealth.player);

document.getElementById("player_health_status").setAttribute("value", maxHealth.player);

document.getElementById("robot_health_status").setAttribute("max", maxHealth.robot);

document.getElementById("robot_health_status").setAttribute("value", maxHealth.robot);

//try to get progress value
function handleAttack() {
    const playerHealth = document.querySelector('progress[id="player_health_status"]'); 
    const robotHealth = document.querySelector('progress[id="robot_health_status"]');
    let  currentPlayerHp = playerHealth.value;
    let  currentRobotHp = robotHealth.value;

   
    const playerDamage = Math.ceil((Math.random() * 100)/ 2);

    if(playerDamage >= 500){
        return false;
     }

    const playerHpAfterAttack = currentPlayerHp > playerDamage ? currentPlayerHp - playerDamage : 0;
     //re-assign
    playerHealth.value = playerHpAfterAttack;
    currentPlayerHp = playerHpAfterAttack;
    
     document.getElementById("playerHp").innerHTML = `${playerHealth.value}/500Hp`;

    const robotDamage = Math.ceil((Math.random() * 100)/ 2); 
    if(robotDamage >= 500){
        return false;
    }
    const robotHpAfterAttack = currentRobotHp > robotDamage ? currentRobotHp - robotDamage : 0;
    robotHealth.value = robotHpAfterAttack;
    currentRobotHp = robotHpAfterAttack;
    document.getElementById("robotHp").innerHTML = `${robotHealth.value}/500Hp`;
      //condition after attack
    if(currentPlayerHp==0 && currentRobotHp ==0){
        attack.style.display = "none";
        reset.style.display = "block";
        document.getElementById("draw").innerText = "GAME DRAW";
         document.getElementById("msg").innerHTML = "";
    } else if(currentPlayerHp ==0){
        attack.style.display = "none";
        reset.style.display = "block";
        document.getElementById("player").innerText = "Player won";
         document.getElementById("msg").innerHTML = "";
    }else if(currentRobotHp==0){
        attack.style.display = "none";
        reset.style.display = "block";
        document.getElementById("robot").innerText = "robot won";
         document.getElementById("msg").innerHTML = "";
   }  
   // Display message in every  attack button click.
   if(currentPlayerHp && currentRobotHp !== 0){
   const node = document.createElement("li")
    const messageAfterClick = document.createTextNode(`Player Damage :${playerDamage} and Robot Damage :${robotDamage}`);
    node.appendChild(messageAfterClick);
    document.getElementById("msg").appendChild(node);
   }else if(currentPlayerHp || currentRobotHp == 0){
    document.getElementById("msg").appendChild(node)="";
   }
    

  }
  //reset button
  function resetButton(){
   if( attack.style.display = "none"){
    reset.style.display = "none";
    start.style.display = "block";
    //render progress message
    document.getElementById("draw").innerText = "";
    document.getElementById("player").innerText = "";
    document.getElementById("robot").innerText = "";
    //reset players health 
    document.getElementById("player_health_status").setAttribute("value",500);
    document.getElementById("robot_health_status").setAttribute("value", 500);

    document.getElementById("playerHp").innerHTML = `500/500Hp`;
    document.getElementById("robotHp").innerHTML = `500/500Hp`;
    // reset log
    document.getElementById("msg").textContent = "";


    // document.getElementById("message").innerHTML = "";
   }
  }

attack.addEventListener("click", handleAttack);
reset.addEventListener("click",resetButton);
 