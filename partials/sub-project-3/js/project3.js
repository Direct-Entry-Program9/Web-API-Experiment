const earth = document.querySelector('#earth');
const jupiter = document.querySelector('#jupiter');

let startPoint =0;
let startPoint1 =0;

setInterval(()=>{

    x = 200*Math.sin((startPoint++)/180);
    y = 200*Math.cos((startPoint++)/180);

    earth.style.left = `${innerWidth/2+x}px`;
    earth.style.top = `${innerHeight/2+y}px`;
    
},10);

setInterval(()=>{

    x = 250*Math.cos((startPoint1++)/180);
    y = 250*Math.sin((startPoint1++)/180);

    jupiter.style.left = `${innerWidth/2+x}px`;
    jupiter.style.top = `${innerHeight/2+y}px`;
    
},30);