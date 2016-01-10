hinhnen()
function hinhnen(){
document.body.style.backgroundImage="url('"+localStorage.hinhnen+"')";
}


chiacuaso();
function chiacuaso(){
if(localStorage.chiacuasotrue=='false'){
document.getElementById('danhiemleft').style.display='none';
document.getElementById('danhiemright').style.display='none';
}else{
	document.getElementById('danhiemleft').style.display='block';
document.getElementById('danhiemright').style.display='block';
}
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
if(localStorage.animatedzoomOutDown=='animated'){
windowceate.style.border="5px solid"+colorapp;
}else{
setTimeout(function(){windowceate.style.border="5px solid"+colorapp;},800);
}
windowceate.innerHTML="<div solid id=animatedwindow"+sessionStorage.countwindow+" class='"+localStorage.animatedrollIn+"' ><div class='header' onmouseover=sessionStorage.areo="+sessionStorage.countwindow+" onmouseout=setTimeout('sessionStorage.areo=null',1000)  style=background:"+colorapp+";color:"+textcolor+" onclick=zindexwindow('"+sessionStorage.countwindow+"') ondblclick=fullwindow('"+sessionStorage.countwindow+"','"+colorapp+"')><img onclick='opnof()' style='cursor:pointer' src="+iconapp+" />"+nameapp+"<span class='toolwindow'><img style='cursor:default' src=img/danhiem.png onclick=danhiem() /><img src='img/miniwindow.png' style='cursor:default' onclick=miniapp('"+sessionStorage.countwindow+"','"+colorapp+"') ><span id='closebutton' style='cursor:default' onclick=closeapp('"+sessionStorage.countwindow+"','"+colorapp+"')></span></span></div><div class='if'><iframe src="+linkapp+" ></iframe></div></div>";
document.body.appendChild(windowceate);
document.getElementById('window'+sessionStorage.countwindow).style.width="80%";
document.getElementById('window'+sessionStorage.countwindow).style.height="80%";
document.getElementById('window'+sessionStorage.countwindow).style.top="10%";
document.getElementById('window'+sessionStorage.countwindow).style.left="10%";
//
interact("#window"+sessionStorage.countwindow)
   .resizable({
    edges: { left: true, right: false, bottom: false, top: true }  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);
    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';
    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;
    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  });

  
  interact("#window"+sessionStorage.countwindow)
 .draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "window",
      endOnly: false,
      elementRect: { top: 1, left: 1, bottom: 1, right: 1}
    },

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx-10 +
                     event.dy * event.dy-10)|10) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }
  // this is used later in the resizing demo
  window.dragMoveListener = dragMoveListener;
//taodahiem
document.getElementById('danhiembox').innerHTML+="<div onclick=opagainwindow('"+sessionStorage.countwindow+"','"+colorapp+"') id=danhiem"+sessionStorage.countwindow+" style=background:"+colorapp+";color:"+textcolor+" ><span onclick=closeappdn('"+sessionStorage.countwindow+"') >X</span><img src="+iconapp+" ><br>"+nameapp+"</div>";
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

if(localStorage.animatedzoomOutDown=='animated'){
document.getElementById('window'+appid).style.border="5px solid"+colorapp;
}else{
setTimeout(function(){document.getElementById('window'+appid).style.border="5px solid"+colorapp;},800);
}
zindexwindow(appid);
}
function fullwindow(appid,colorapp){
document.getElementById('window'+appid).setAttribute("style", "''");
document.getElementById('window'+appid).style.border="5px solid "+colorapp; 
zindexwindow(appid);
}
function zindexwindow(appid){
sessionStorage.zindexmax++;
document.getElementById('window'+appid).style.zIndex=sessionStorage.zindexmax;
sessionStorage.areo=appid;
}
function danhiem(){
document.getElementById('danhiembg').style.display="block";
document.getElementsByTagName('header')[0].style.zIndex="10000";
document.getElementById('nof').style.height=document.body.clientHeight-50+'px';
document.getElementById('danhiem').style.width='30%';
document.getElementById('esearchbox').style.zIndex="10001";
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

document.getElementById('sttonl').style.display="block-inline";

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

function optt(name,link){
	opapp(name,link,'img/web.png','#9140A5','#fbfbfb');
}
//stt
setTimeout(function(){
checknof();
},500);


