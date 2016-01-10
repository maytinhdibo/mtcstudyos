sessionStorage.his='';
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle="#FF0000";
ctx.translate(420, 270);
//toa do
ctx.moveTo(-420,0);
ctx.lineTo(420,0);
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
sessionStorage.his+="<span class='color' style='background-color:"+ctx.strokeStyle+"'></span>: y=<i>f</i>(x)="+hamso+"<br>";
}
//runpt('(1/999)*x^5-14*x+10');
function optool(){
if(document.getElementById('display').clientHeight>10){
document.getElementById('display').style.height="0";
}else{
document.getElementById('display').style.height="500px";
}
}

function opkq(sel){
document.getElementById('kq').style.display="block";
document.getElementById('kq').className="animated fadeInUp";
if(sel=='his'){
document.getElementById('kqdis').innerHTML="<br><div id='his'><h2>Chi tiết đồ thị:</h2>"+sessionStorage.his+"</div>";
}
}
function clokq(){
document.getElementById('kq').className="animated fadeOutDown";
setTimeout("document.getElementById('kq').style.display='none'",800);
}
function clean(){
location.reload();
}
function load(link){
$('#frame').hide().load('page/'+link+'.html').fadeIn('fast');
}
function bacnhat(){
if($('#valaone').val()==0){
if($('#valbone').val()==0){
kq="Phương trình <b>có vô số nghiệm</b>.";
}else{
kq="Phương trình <b>vô nghiệm</b>.";
}
}else{
kq="Phương trình có 1 nghiệm là: "+(-$('#valbone').val())/$('#valaone').val();
}
kq="<h2>Kết quả:</h2>"+kq;
document.getElementById('kqdis').innerHTML=kq;
opkq();
runpt($('#valaone').val()+'*x'+'+'+$('#valbone').val());
}

function wiki(link){
document.getElementById('wikilink').value=link;
return '<br>'+document.getElementById('wiki').innerHTML;
}
function twoan(){
d=$('#vala1').val()*$('#valb2').val()-$('#vala2').val()*$('#valb1').val();
dx=$('#valc1').val()*$('#valb2').val()-$('#valc2').val()*$('#valb1').val();
dy=$('#vala1').val()*$('#valc2').val()-$('#vala2').val()*$('#valc1').val();
if(d!=0){
x=dx/d;
y=dy/d;
kq="Hệ phương trình có 2 nghiệm là:<br><b>x= "+x+"<br>y= "+y+".";
}else{
if((dx==0)&&(dy==0)){
kq="Hệ phương trình trên có vô số nghiệm";
}else{
kq="Hệ phương trình trên vô nghiệm";
}
}
kq="<h2>Kết quả:</h2>"+kq;
kq=kq+wiki('https://vi.wikipedia.org/wiki/Ph%C6%B0%C6%A1ng_tr%C3%ACnh_tuy%E1%BA%BFn_t%C3%ADnh');
document.getElementById('kqdis').innerHTML=kq;
opkq();
runpt('('+-($('#vala1').val()/$('#valb1').val())+')*x+'+($('#valc1').val()/$('#valb1').val()));
runpt('('+-($('#vala2').val()/$('#valb2').val())+')*x+'+($('#valc2').val()/$('#valb2').val()));
}
function bachai(){
a=$('#vala').val();
b=$('#valb').val();
c=$('#valc').val();
delta=b*b+4*a*c;
if(a==0){
kq="Thông số nhập vào không phù hợp";
}
if(delta<0){
kq="Phương trình vô nghiệm."
}else{
if(delta==0){
kq="Phương trình có có nghiệm kép x<sub>1</sub>=x<sub>2</sub>="+(-b/(2*a));
}else{
kq="Phương trình có 2 nghiệm phân biệt:<br>x<sub>1</sub>= "+(-b-(-Math.sqrt(delta)))/(2*a)+"<br>x<sub>2</sub>= "+(-b-(Math.sqrt(delta)))/(2*a);
}
}
kq=kq+wiki('https://vi.wikipedia.org/wiki/Ph%C6%B0%C6%A1ng_tr%C3%ACnh_b%E1%BA%ADc_hai');
document.getElementById('kqdis').innerHTML=kq;
opkq();
runpt(a+'*x*x+('+b+')*x'+'+('+c+')');
}