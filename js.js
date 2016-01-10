var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle="#FF0000";


ctx.translate(400, 300);
//toa do
ctx.moveTo(-400,0);
ctx.lineTo(400,0);
ctx.moveTo(0,-300);
ctx.lineTo(0,300);
ctx.stroke();
ctx.scale(2,2);
ctx.fillText('O(0,0)',-30,12);
ctx.strokeStyle="#000";
ctx.fillRect(-1, -1, 2, 2);
ctx.scale(2,-2);
//
function runpt(hamso){
hamso=hamso.replace(/x\^2/g, "x*x");
hamso=hamso.replace(/x\^3/g, "x*x*x");
hamso=hamso.replace(/x\^4/g, "x*x*x*x");
hamso=hamso.replace(/x\^5/g, "x*x*x*x*x");
hamso=hamso.replace(/x\^6/g, "x*x*x*x*x*x");
hamso=hamso.replace(/x\^7/g, "x*x*x*x*x*x*x");
hamso=hamso.replace(/x\^8/g, "x*x*x*x*x*x*x*x");
hamso=hamso.replace(/x\^9/g, "x*x*x*x*x*x*x*x*x");
hamso=hamso.replace(/x\^10/g, "x*x*x*x*x*x*x*x*x*x");
ctx.strokeStyle="#"+Math.floor((Math.random() * 100) + 10)+Math.floor((Math.random() * 100) + 10)+Math.floor((Math.random() * 100) + 10);
x=-200;
eval('y='+hamso);
ctx.beginPath();
ctx.moveTo(x,y);
eval("for (x=-201; x <201; x=x-(-0.01)) {y="+hamso+";ctx.lineTo(x,y);ctx.stroke();ctx.beginPath();ctx.moveTo(x,y);}");
optool();
}
//runpt('(1/999)*x^5-14*x+10');
function optool(){
if(document.getElementById('display').clientHeight>10){
document.getElementById('display').style.height="0";
}else{
document.getElementById('display').style.height="500px";
}
}

function opkq(){
document.getElementById('kq').style.display="block";
document.getElementById('kq').className="animated fadeInUp";
}
function clokq(){
document.getElementById('kq').className="animated fadeOutDown";
}