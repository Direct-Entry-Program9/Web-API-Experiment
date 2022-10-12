const circle = document.getElementById('cursor');
let tmrId = null;


addEventListener('mousemove',(eventData)=>{
    if (tmrId!=null){
        clearTimeout(tmrId);
        tmrId = null;
    }

    circle.style.left = `${eventData.pageX}px`;
    circle.style.top = `${eventData.pageY}px`;
    
    circle.style.opacity=1;
    setTimeout(()=>{
        circle.style.opacity= 0; 
    },2000);
})

document.body.addEventListener('mouseleave',()=>{
    circle.style.opacity = 0;
})


document.body.addEventListener('mouseenter',()=>{
    circle.style.opacity = 1;
})


// const tmrId1 = setInterval(()=>{
//     console.log("print this...!");
// },500);

// const btnStopTimer1 = document.querySelector("#btnStopTimer1");
// btnStopTimer1.addEventListener("click",()=> clearInterval(tmrId1));

// const tmrId2 = setTimeout(()=>{
//     console.log("Bombe Pipuruwooo..!");
// },2000);

// const btnStopTimer1 = document.querySelector("#btnStopTimer1");
// btnStopTimer1.addEventListener("click",()=> {
//     clearTimeout(tmrId2);
//     console.log("Nishkriya kala...")
// });