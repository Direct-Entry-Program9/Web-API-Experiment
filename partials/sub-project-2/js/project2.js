// console.log('ih',window.innerHeight);
// console.log('oh',window.outerHeight);

// console.log('iw',window.innerWidth);
// console.log('ow',window.outerWidth);

const boxElm = document.querySelector('#box');

/* Client height,width = padding box */
/* offset width,height = Border box */
// console.log(boxElm.clientWidth, boxElm.clientHeight);
// console.log(boxElm.offsetWidth, boxElm.offsetHeight);

// let topDistance = 0;
// let up = false;

// let tmrId1 = setInterval(()=>{
//     boxElm.style.top = `${topDistance}px`;
//     topDistance += !up? 5:-5;
//     if(topDistance >= innerHeight-80){
//         up =true;
//     }else if(topDistance <= 0){
//         up = false;
//     }
// },20);

let x=0;
const startY = (innerHeight - boxElm.offsetHeight)/2;

let tmrId1 = setInterval(()=>{

    const y = startY+ Math.sin(x++/180)*(startY);
    boxElm.style.top = `${y}px`;

},1);

let leftDistance=0;
let right = false;
// let timeInterval = (innerWidth/100);


let tmrId2 = setInterval(()=>{
    boxElm.style.left = `${leftDistance}px`;
    leftDistance += !right ? 1:-1; 
    if ((leftDistance + 80)>=innerWidth){
        right = true;
    }else if(leftDistance <= 0){
        right = false;
    }
},10);

// let tmrId2 = setInterval(()=>{
//     topDistance=topDistance-1;
//     boxElm.style.top = `${topDistance -1}px`;
//     if(topDistance == 0){
//         clearInterval(tmrId2);
//     }
// });