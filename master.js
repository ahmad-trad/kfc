const slider = document.querySelectorAll(".img");
const prev = document.querySelector('.prev');
const naxt = document.querySelector('.next');

let i = 0;

function actionBack(n){
    slider.forEach((ele) =>{
        ele.classList.remove("active");
        slider[n].classList.add("active");
    })
}

prev.addEventListener('click' , () =>{
    if(i == 0){
        i = slider.length - 1;
        actionBack(i);
    } else{
        i--;
        actionBack(i);
    }
})

naxt.addEventListener('click' , () =>{
    if(i == slider.length - 1){
        i = 0;
        actionBack(i);
    } else{
        i++;
        actionBack(i);
    }
})

//menu events

const menu = document.querySelector(".menu");
const icons = document.querySelector(".menu i");
const nav = document.querySelector(".main header nav");


menu.addEventListener("click" , () =>{
    if(icons.className == "fa fa-bars"){
        icons.className = "fa fa-times";
        nav.classList.add("open");
    }else{
        icons.className = "fa fa-bars";
        nav.classList.remove("open");
    }
})
