let userscore=0;
let compscore=0;
let userscorepara=document.querySelector("#user")
let compscorepara=document.querySelector("#cpu")
let msg=document.querySelector("#msg");
let reset=document.querySelector("#rst");
let choicejs=document.querySelectorAll(".choice");
reset.addEventListener("click",()=>{
    userscore=0;
    userscorepara.innerText=userscore;
    compscore=0;
        compscorepara.innerText=compscore;
        msg.innerText="Play Your Move";
        msg.style.backgroundColor="darkblue"
})
const getcompchoice=()=>{
    const arr=["rock","paper","scissor"]
    let ranidx=Math.floor(Math.random()*3);
    let cpuchoice=arr[ranidx];
    return cpuchoice;
}
const showinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
       msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`
       msg.style.backgroundColor = "green";

    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose")
        msg.innerText=`You Lose!  ${compchoice} beats Your ${userchoice}`
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice)=>{
    
    let compchoice=getcompchoice();
    console.log(userchoice,compchoice);
    if(userchoice===compchoice){
        console.log("draw game")
        msg.innerText=`Game Draw.Play Again`
        msg.style.backgroundColor = "darkblue";
    }
    else{ let userwin=true;
        if(userchoice==="rock"){
            userwin = compchoice ==="paper" ? false:true;
        }
        else if(userchoice==="paper"){
            userwin= compchoice==="scissor"? false:true;
        }
        else{//scissor
            userwin= compchoice==="rock"? false:true;
        }
        showinner(userwin,userchoice,compchoice);
      
    }

}
choicejs.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       playgame(userchoice);
    })
})
