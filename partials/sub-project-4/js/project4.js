const carElm = document.querySelector('#myCar');
const roadElm = document.querySelector('#road');
const startWindow = document.querySelector('#start-page');
const btn = document.querySelector('#btn-play');
const police1 = document.querySelector('#police1');
const police2 = document.querySelector('#police2');
const car1 = document.querySelector('#car1');


btn.addEventListener('click',()=>{
    startWindow.style.opacity = "0";

    let leftMovement = 15;
    let topMovement = -200;
    let policeMove1 = -300;
    let policeMove2 = -150;
    let car1Move = -130;

    addEventListener('keydown', (event) => {
        if(event.key == 'ArrowRight'){
            if(leftMovement<77){
                leftMovement += 4;
            }
            carElm.style.left = `${leftMovement}%`;
        }else if(event.key == 'ArrowLeft'){
            carElm.style.left = `${leftMovement}%`;
            if(leftMovement>8){
                leftMovement -= 4;
            }
        }/* else if(event.key == 'ArrowUp'){
            if(topMovement > -20){
                topMovement = -200;
            }
            roadElm.style.top = `${topMovement}%`;
            topMovement+=2;
        } */
    });

    setInterval(()=>{
        if(topMovement > -20){
            topMovement = -200;
        }
        roadElm.style.top = `${topMovement}%`;
        topMovement+=1;
    },12);

    setInterval(()=>{
        if(policeMove1 > 120){
            policeMove1 = -300;
        }
        police1.style.top = `${policeMove1}%`;
        policeMove1+=1;
    },10);

    setInterval(()=>{
        if(policeMove2 > 120){
            policeMove2 = -150;
        }
        police2.style.top = `${policeMove2}%`;
        policeMove2+=1;
    },10);

    setInterval(()=>{
        if(car1Move > 120){
            car1Move = -130;
        }
        car1.style.top = `${car1Move}%`;
        car1Move+=1;
    },30);


});