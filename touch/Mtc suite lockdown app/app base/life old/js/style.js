style();
scroll();
function style(){
document.getElementById('worker').style.height=window.innerHeight-140+'px';
document.getElementById('menupopup').style.left=window.innerWidth+'px';
setTimeout('style()',10);
}
function openmenu(){
if(document.body.scrollLeft==0){
scrollTo(200,0);
}else{
scrollTo(0,0);
}
}
