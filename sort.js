var canvas,ctx;
var widhth= 1205, height= 450;
const barWidth= 35;
const barPadd= 5;
var len= 30;
const maxEle= 50;
const elementHeight= 8;
const extraHeight= height- maxEle*elementHeight;
var arr=[len];

draw();
// genArray();
function draw() {
    canvas= document.getElementById('graph');
    if (canvas.getContext) {
        ctx= canvas.getContext("2d");
    }
}

function genArray() {
    ctx.fillStyle="purple";
    for (let i=0;i<len;i++) {
        ctx.clearRect(i*(barWidth+barPadd)+barPadd,0,barWidth,height);
    }
    for(let i=0;i<len;i++) {
        arr[i]=Math.ceil(Math.random()*(maxEle-1));
        ctx.fillRect(i*(barWidth+barPadd)+barPadd,0,barWidth,height);
        ctx.clearRect(i*(barWidth+barPadd)+barPadd,0,barWidth,(maxEle-arr[i])*elementHeight+extraHeight);
    }
    console.log(arr);
}

var genButton= document.querySelector("button");
console.log(genButton);
genButton.addEventListener("click",genArray);

// ctx.fillStyle= "green";
// ctx.fillRect(0,0,barWidth,100);