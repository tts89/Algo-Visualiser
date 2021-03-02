var canvas,ctx;
var widhth= 1205, height= 450;
const barWidth= 35;
const barPadd= 5;
var len= 30;
const maxEle= 100;
const elementHeight= 4;
const extraHeight= height- maxEle*elementHeight;
var arr=[len];
var swapDuration= 50;

draw();
// genArray();
function draw() {
    canvas= document.getElementById('graph');
    if (canvas.getContext) {
        ctx= canvas.getContext("2d");
    }
}

function fillArrValue(i,num) {
    ctx.clearRect(i*(barWidth+barPadd)+barPadd,0,barWidth,maxEle*elementHeight+extraHeight);
    ctx.fillRect(i*(barWidth+barPadd)+barPadd,0,barWidth,height);
    ctx.clearRect(i*(barWidth+barPadd)+barPadd,0,barWidth,(maxEle-num)*elementHeight+extraHeight);
}

function genArray() {
    ctx.fillStyle="purple";
    for (let i=0;i<len;i++) {
        ctx.clearRect(i*(barWidth+barPadd)+barPadd,0,barWidth,height);
    }
    for(let i=0;i<len;i++) {
        arr[i]=Math.ceil(Math.random()*(maxEle-1));
        fillArrValue(i,arr[i]);
    }
    // console.log(arr);
    bubble();
    console.log(arr);
}

function swap(x,y) {
    let temp=arr[x];
    arr[x]= arr[y];
    arr[y]= temp;
}

function bubble() {
    let i=0;
    function firstLoop() {
        if(i===len) return;
        setTimeout(firstLoop,(len-i)*swapDuration);
        let j=0;
        function secondLoop() {
            setTimeout(secondLoop,swapDuration);
            if(j===len-i-1)  return;
            ctx.fillStyle="aqua";
            fillArrValue(j,arr[j]);
            fillArrValue(j+1,arr[j+1]);
            if(arr[j]>arr[j+1]) {
                // setTimeout(function () {
                    swap(j,j+1);
                //     ctx.fillStyle="purple";
                //     fillArrValue(j,arr[j]);
                //     fillArrValue(j+1,arr[j+1]);
                // },swapDuration/2);
            }//else{
                // setTimeout(function () {
                    ctx.fillStyle="purple";
                    fillArrValue(j,arr[j]);
                    fillArrValue(j+1,arr[j+1]);
                // },swapDuration/2);
            // }
            j++;
        }
        secondLoop();
        i++;
    }
    firstLoop();
}

var genButton= document.querySelector("button");
console.log(genButton);
genButton.addEventListener("click",genArray);

// ctx.fillStyle= "green";
// ctx.fillRect(0,0,barWidth,100);