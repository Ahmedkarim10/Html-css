const btnAdd=document.querySelector(".plus");
const btnMinus=document.querySelector(".minus");
const btnReset=document.querySelector(".reset");
const count=document.querySelector(".count-value");

btnAdd.addEventListener("click",function(){
    let cnt=parseInt(count.innertext);
    cnt++;
    count.innertext=cnt;
    
    
    });

    btnMinus.addEventListener("click",function(){
        let cnt=parseInt(count.innertext);
        cnt--;
        count.innertext=cnt;
        
        
        });