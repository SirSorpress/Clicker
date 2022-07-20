
var count = 1;
var money = 0;
var flag = [false,false,false,false,false];

window.onload = function(){
    ;
    document.getElementById("btnClicker").onclick = function(){
        countClick();
        economy();
    };
    document.getElementById("+5").onclick= ()=>{
        powerup(5,"+5",0);
        colorShow(0); 
    };
    document.getElementById("+10").onclick= ()=>{
        powerup(10,"+10",1);
        colorShow(1); 
    };
    document.getElementById("+50").onclick= ()=>{
        powerup(50,"+50",2);
        colorShow(2); 
    };
    document.getElementById("+100").onclick= ()=>{
        powerup(100,"+100",3);
        colorShow(3); 
    };
    document.getElementById("epi").onclick= ()=>{
        powerup(200,"epi",4);
        colorShow(4); 
    };
}

function countClick(){
    let showCount = document.getElementById("showCount");
    console.log(count);
    showCount.innerHTML = count;
    count++;
}



function economy(){
    let showMoney = document.getElementById("money");
    if((count % 2) == 0){
        money++;
    }
    showMoney.innerHTML = "$"+money;
}

function powerup(amount,slect,positionFlag){
    let showMoney = document.getElementById("money");
    let addBtn = document.getElementById(slect);
    let alertShow = document.getElementById("alertShow");

    console.log(amount);
    if(flag[positionFlag] != true){
        if(amount <= money){
            money-=amount;
            addBtn.style.backgroundColor="#26798E";
            setInterval(()=>{
                money+=amount;
                showMoney.innerHTML = "$"+money;
            },1000);
            flag[positionFlag] = true;
        }
        else{
            alertShow.innerHTML= "El precio es $"+amount;
            alertShow.style.display = "flex";
            setTimeout(()=>{
                alertShow.style.display = "none";
            },1000);
        }
    }

    showMoney.innerHTML = "$"+money;
}

function colorShow(positionFlag){
    let color = switchC(positionFlag);
    let showContainer = document.getElementById("showContainercolor");
    if(positionFlag == 4 && flag[positionFlag] == true){
        setInterval(() => {
            let random = getRandomInt(5);
            let randomcolor = switchC(random);
            showContainer.style.backgroundColor = randomcolor;
        }, 200);
    }
    else if(flag[positionFlag] == true){
    showContainer.style.backgroundColor = color;
    }
}


function switchC(positionFlag){
    let color=""; 
    switch(positionFlag){
        case 0:
            color="#22B472";
            break;
        case 1:
            color="#CBC80C";
            break;
        case 2:
            color="#FF9E00";
            break;  
        case 3:
            color="#FF3E00";
            break;
        case 4:
            color ="#FF00E8";
            break; 
    }
    return color;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }