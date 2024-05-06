
let pages = document.querySelectorAll(".pages");
let btns = document.querySelectorAll(".btn");
let index = 0;
/**All Function */
function pagesHide(){
    pages[index].classList.add("pages-rotation");
    btns[0].disabled = false;
}

function rightSlide(){
    pagesHide();
    index += 1;
    if(index >= pages.length){
        index = 0;
        btns[1].disabled = true;
    }
    
}
function leftSlide(){
    index -= 1;
    if(index <= -1){
        index = pages.length - 1;
    }
    if (index === 0) {
        btns[0].disabled = true;
    }
	pages[index].classList.remove("pages-rotation");
}
/**Actions And Events */
btns[0].disabled = true;
btns[1].addEventListener("click",(e)=>{
    console.log(index);
    rightSlide();
    
});

btns[0].addEventListener("click",(e)=>{
    console.log(index);
    btns[1].disabled = false;
	leftSlide();
   
});