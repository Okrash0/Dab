
var ant = 0;
var upgradeClick = 1;
var upcostClick = 50;
var upcostSpeed = 300;
var speed = 0;
var upcostSSpeed = 1000;
var Sspeed = 0;
var keyspace;
var test = true;
var totdab = 0;
var dabdir = -1;
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

setInterval(function update(){
  document.getElementById("poang").innerHTML= ant;
  document.getElementById("tdabs").innerHTML= totdab;
}, 1);

function keydown(){
  if(!keyspace && test){
    keyspace = true;
    test = false;
    ant+=upgradeClick;
    totdab+=upgradeClick;
    document.getElementById("DAB").setAttribute("style","transform: scaleX("+dabdir+");");
    dabdir*=-1;
  }
  
  else{
    keyspace = false;
  }
}

function keyup(){
  keyspace = false;
  test = true;
}

function clickbutt(){
  ant+=upgradeClick;
  totdab+=upgradeClick;
}

function up() {
  if (ant >= upcostClick){
    upgradeClick++;
    ant -= upcostClick;
    upcostClick *= 2;
  }
  document.getElementById("upcostC").innerHTML= upcostClick;
}

function speedClick(){
  if (ant >= upcostSpeed){
    if (speed < 1){
      speed += 2;
      ant -= upcostSpeed;
      upcostSpeed *= 2;
    }
    else {
    speed *= 2;
    ant -= upcostSpeed;
    upcostSpeed *= 2;
    }
  }
  document.getElementById("upcostS").innerHTML= upcostSpeed;
}

setInterval(function autoClick(){
    ant += speed;
    totdab+=speed;
}, 5000);


function SspeedClick(){
  if (ant >= upcostSSpeed){
    if (Sspeed < 1){
      Sspeed += 2;
      ant -= upcostSSpeed;
      upcostSSpeed *= 2;
    }
    else {
    Sspeed *= 2;
    ant -= upcostSSpeed;
    upcostSSpeed *= 2;
    }
  }
  document.getElementById("upcostSS").innerHTML= upcostSSpeed;
}

setInterval(function sautoClick(){
    ant += Sspeed;
    totdab+=Sspeed;
}, 1000);

var upcostDab = 5000;

var dabSpeed = 0;

function Dab(){
  if (ant >= upcostDab){
    if (dabSpeed < 1){
    dabSpeed += 1;
    ant -= upcostDab;
    upcostDab *= 2;
    }
    
    else {
      dabSpeed *= 2
      ant -= upcostDab;
      upcostDab *= 2;
    }
  }
  document.getElementById('upcostDab').innerHTML= upcostDab;
}

setInterval(function autoDab(){
  ant+=dabSpeed;
  totdab+=dabSpeed;
}, 1)

