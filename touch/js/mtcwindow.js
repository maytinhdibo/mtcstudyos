hinhnen()
function hinhnen(){
document.body.style.backgroundImage="url('"+localStorage.hinhnen+"')";
}


function opnof(){
if(document.getElementById('nof').clientHeight<1){
document.getElementById('nof').style.height=document.body.clientHeight-60+'px';
setTimeout(function(){$(document).ready(function() {  $("#nofdisplay").niceScroll(); });},500);
}else{
document.getElementById('nof').style.height='0';
}
}
function opesearch(value){
if((value=='')){
document.getElementById('esearchbox').style.height="0px";
document.getElementById('esearch').style.fontStyle='italic';
}else{
document.getElementById('esearchbox').style.height="200px";
document.getElementById('esearch').style.fontStyle='normal';
}
}
//
sessionStorage.zindexmax=2;
sessionStorage.countwindow=0;
function opapp(nameapp,linkapp,iconapp,colorapp,textcolor){
//tao cua so
ifheight=document.body.clientHeight-40;
sessionStorage.countwindow++;
var windowceate=document.createElement('div');
windowceate.id="window"+sessionStorage.countwindow;
windowceate.className="window";
localStorage.zindexmax++;
windowceate.style.zIndex=localStorage.zindexmax;

windowceate.innerHTML="<div solid id=animatedwindow"+sessionStorage.countwindow+" class='"+localStorage.animatedrollIn+"' ><div class='header'  style=background:"+colorapp+";color:"+textcolor+" onclick=zindexwindow('"+sessionStorage.countwindow+"') ondblclick=fullwindow('"+sessionStorage.countwindow+"','"+colorapp+"')><img onclick='opnof()' style='cursor:pointer' src="+iconapp+" />"+nameapp+"<span class='toolwindow'><span id='closebutton' style='cursor:default' onclick=closeapp('"+sessionStorage.countwindow+"','"+colorapp+"')></span></span></div><div class='if'><iframe src="+linkapp+" ></iframe></div></div>";
document.body.appendChild(windowceate);


//taodahiem
document.getElementById('danhiembox').innerHTML+="<div onclick=opagainwindow('"+sessionStorage.countwindow+"','"+colorapp+"') id=danhiem"+sessionStorage.countwindow+" style=background:"+colorapp+";color:"+textcolor+" ><span style=font-size:28px; onclick=closeappdn('"+sessionStorage.countwindow+"') >X</span><img src="+iconapp+" ><br>"+nameapp+"</div>";
}
function closeapp(appid){
document.getElementById('animatedwindow'+appid).className=localStorage.animatedzoomOutDown;
document.getElementById('window'+appid).style.border='none';
if(localStorage.animatedzoomOutDown=='animated'){
document.getElementById('window'+appid).remove();	
}
setTimeout(function(closedel){document.getElementById('window'+appid).remove();},750);
document.getElementById('danhiem'+appid).remove();
}
function closeappdn(appid){
document.getElementById('danhiem').style.width="0%";
setTimeout(function(){document.getElementById('danhiem').setAttribute("style", "''");},500);
document.getElementById('window'+appid).remove();
document.getElementById('danhiem'+appid).remove();
}
function miniapp(appid){
document.getElementById('animatedwindow'+appid).className=localStorage.animatedzoomOutLeft;
document.getElementById('window'+appid).style.border='none';
if(localStorage.animatedzoomOutLeft=='animated'){
document.getElementById('window'+appid).style.display='none';	
}
setTimeout(function(displaywindow){document.getElementById('window'+appid).style.display='none';},750);
}
function opagainwindow(appid,colorapp){
document.getElementById('window'+appid).style.display='block';
document.getElementById('animatedwindow'+appid).className=localStorage.animatedrollIn;
document.getElementById('danhiem').style.display='none';
zindexwindow(appid);
}
function fullwindow(appid,colorapp){
document.getElementById('window'+appid).setAttribute("style", "''");
zindexwindow(appid);
}
function zindexwindow(appid){
sessionStorage.zindexmax++;
document.getElementById('window'+appid).style.zIndex=sessionStorage.zindexmax;
sessionStorage.areo=appid;
}
function danhiem(){
document.getElementById('danhiem').style.display="block";
}
function closedanhiem(){
document.getElementById('danhiembg').style.display="none";
document.getElementsByTagName('header')[0].style.zIndex="1";
document.getElementById('nof').style.height='0px';
document.getElementById('danhiem').setAttribute("style", "''");
document.getElementById('esearchbox').style.zIndex="2";
}
function closeallapp(){
	for (i=1; i<(sessionStorage.countwindow-(-1)); i++) {
try{closeapp(i);}catch(err) {
}
}
}
function miniallapp(){
	for (i=1; i<(sessionStorage.countwindow-(-1)); i++) {
try{miniapp(i);}catch(err) {
}
}
}
function danhiemleft(){
	document.getElementById('window'+sessionStorage.areo).setAttribute('data-x', '');
	document.getElementById('window'+sessionStorage.areo).setAttribute('data-y', '');
		document.getElementById('window'+sessionStorage.areo).setAttribute('style', '');
	document.getElementById('window'+sessionStorage.areo).style.width='50%';
	document.getElementById('window'+sessionStorage.areo).style.top='0';
	document.getElementById('window'+sessionStorage.areo).style.left='0';
	document.getElementsByClassName('header')[0].blur();
	zindexwindow(sessionStorage.areo);
	document.getElementById('danhiemleftbox').style.display='block';
	document.getElementById('danhiemleftbox').style.width='50%';
	setTimeout(function(){		
	document.getElementById('danhiemleftbox').style.width='0%';	
setTimeout("document.getElementById('danhiemleftbox').style.display='none';",250);	
	},1000);
}
function danhiemright(){
	document.getElementById('window'+sessionStorage.areo).setAttribute('data-x', '');
	document.getElementById('window'+sessionStorage.areo).setAttribute('data-y', '');
		document.getElementById('window'+sessionStorage.areo).setAttribute('style', '');
	document.getElementById('window'+sessionStorage.areo).style.top='0';
	document.getElementById('window'+sessionStorage.areo).style.right='0';
		document.getElementById('window'+sessionStorage.areo).style.width='50%';
	zindexwindow(sessionStorage.areo);
	document.getElementById('danhiemrightbox').style.display='block';
	document.getElementById('danhiemrightbox').style.width='50%';
	setTimeout(function(){		
	document.getElementById('danhiemrightbox').style.width='0%';	
setTimeout("document.getElementById('danhiemrightbox').style.display='none';",250);	
	},1000);
}
document.getElementById('vol').value=localStorage.volume;
document.getElementById('volval').innerText=localStorage.volume+'%';
function volval(val){
localStorage.volume=val;
document.getElementById('volval').innerText=val+'%';
volstt();
}
function oppw(){
document.getElementById('power').style.display="block";
document.getElementById('power').className='animated fadeIn';

}
function closepw(){
document.getElementById('power').className='animated bounceoutUp';
}
document.getElementById('lockimgac').style.backgroundImage='url("'+localStorage.anhdaidien+'")';
document.getElementById('lockbg').style.backgroundImage="url('"+localStorage.hinhnen+"')";
function notlock(){
document.getElementById('lockbg').className="animated flipOutX";
}
function locknow(){
document.getElementById('lockimgac').style.backgroundImage='url("'+localStorage.anhdaidien+'")';
document.getElementById('lockbg').style.backgroundImage="url('"+localStorage.hinhnen+"')";
document.getElementById('lockbg').style.display="block";
document.getElementById('lockbg').className="animated flipInX";
}
//stt
volstt();
function volstt(){
 document.getElementById('nofaudio').volume=(localStorage.volume/100);
volnof=localStorage.volume*1;
switch (true) {
case (volnof==0):
      document.getElementById('sttvol').src="img/sttvol00.png";
        break;
    case ((0<volnof)&&(volnof <=20)):
      document.getElementById('sttvol').src="img/sttvol20.png";
        break;
	 case ((20<volnof)&&(volnof <=60)):
      document.getElementById('sttvol').src="img/sttvol60.png";
        break;
    default:
	document.getElementById('sttvol').src="img/sttvol.png";
}
}
//stt
setTimeout(function(){
checknof();
},500);



function optt(name,link){
	opapp(name,link,'img/web.png','#9140A5','#fbfbfb')	;
}
