const item = document.getElementsByClassName("item"); 
const open = document.getElementsByClassName("open"); 
const close = document.getElementsByClassName("close"); 


for(let i = 0 ; i<item.length; i++){
    close[i].style.display = "none"; 

    item[i].addEventListener("click", ()=>{

        const result = item[i].classList.toggle('active'); 

        if(result){
            close[i].style.display='block'; 
            open[i].style.display = "none"; 
        }
        else{
            close[i].style.display='none'; 
            open[i].style.display = "block"; 
        }
    })
}