const slider = document.querySelector(".slider");
const image = document.querySelectorAll(".image");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let slideNumber = 1;


// right.addEventListener("click",() => {
//     if(slideNumber < image.length){
//     slider.style.transform = `translateX(-${slideNumber*500}px)`;
//     slideNumber = slideNumber + 1;
//     }
//     else{
//         slider.style.transform = `translateX(0px)`;
//         slideNumber = 1;
//     }
// });

// left.addEventListener("click",() => {
//     if(slideNumber > 1){
//     slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`;
//     slideNumber--;
//     }
//     else{
//         slider.style.transform = `translateX(-${(image.length -1)*800}px)`;
//         slideNumber = image.length;
//     }
// });


right.addEventListener("click",() => {
    if(slideNumber < image.length){
        slider.style.transform = `translateX(-${slideNumber*800}px)`;
        slideNumber++;
    }
    else{
        slider.style.transform = `translateX(0px)`;
        slideNumber = 1;
    }
});

left.addEventListener("click",() => {
    if(slideNumber > 1){
     slider.style.transform = `translateX(-${(slideNumber -2)*800}px)`;
     slideNumber--;
    }else{
        slider.style.transform = `translateX(-${(image.length -1)*800}px)`;
        slideNumber = image.length;
    }
});


// Create A Change Mode Btn Black Or Light

// let modebtn= document.querySelector("button");
// let body = document.querySelector("body");

// let currentmode = "light";

// modebtn.addEventListener("click",() => {
//     if(currentmode === "light"){
//         currentmode = "dark";
//         body.classList.add("black");
//         body.classList.remove("light")
//     }
//     else{
//         currentmode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//         }
//     console.log(currentmode);
// })


let modebtn = document.querySelector("button");
let body = document.querySelector("body");
let currentmode = "light";

modebtn.addEventListener("click",() => {
    if(currentmode === "light"){
        currentmode = "dark";
        body.classList.add("black");
        body.classList.remove("light");
    }
    else{
        currentmode = "light";
        body.classList.add("light");
        body.classList.remove("black");
    }
    // console.log(currentmode);
})
