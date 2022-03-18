let ball=$("#ball");
let ballShadow=$('#ballShadow');
ballWindow=document.getElementById("window");
dice=document.getElementById("dice");

let output=document.getElementById("output");

let ballPosX= ball.position()["left"];
console.log(ballPosX);

$("#ball").draggable(
    {
        start:()=>{
            $("#glass").animate({
                opacity:1
            },500);
          
            console.log("dragStart");

        },
        drag:()=>{
            $('#dice').css("display","none");
           
            
            ballShadow.css("left",ball.position()["left"]-450);
            console.log("dragging");
           
            
        },
        stop:()=>{
            $("#glass").animate({
                opacity:0
            },500);
            $('#dice').fadeIn(2000);
            console.log("dragEnd");
            
    

        }
       
    }
);




// ball.draggable="true";
// //window.addEventListener("dragover",()=>(console.log("dragOver")));

// ball.addEventListener("dragstart",ballDragStart);

// ball.addEventListener("dragend",ballDragEnd);
// /*ball.addEventListener("drag",ballDragStart);*/
// // ball.addEventListener("dragstart",ballDragStart,false);




// function dragStart(ev){
//     this.style.display="hidden";
   

// }

// function dragOver(ev){
//     ev.preventDefault();
    
// }

// function ballDragStart(ev){
//     // var ghostBall=this.cloneNode(true);
//     // ghostBall.style.display="none";
//     // document.body.appendChild(ghostBall);
//     // ev.dataTransfer.setDragImage(ghostBall,0,0);
//     dice.className="";
    
//     ball.style.visibility="hidden";
//     ballCopy=ball.cloneNode();
//     ballCopy.id="ballCopy";
//     ballCopy.style.visibility="visible";
//     container.append(ballCopy);
// }

// function ballDragEnd(ev){
//     const answers=["yes","no","maybe","definitely","probably","possibly", "reply hazy, try again later","of course","never","sure why not","what do you think?"];
//     let randomNum=Math.floor(Math.random()*answers.length);
//     console.log(randomNum);
//     let answer=answers[randomNum];
//     output.innerHTML=answer;
//     ball.style.visibility="visible";
//     dice.className="fadeIn";

   
// }