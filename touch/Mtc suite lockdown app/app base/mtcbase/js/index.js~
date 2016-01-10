//begin
var Mtcbvalert=document.createElement("div");
Mtcbvalert.id="Mtcbvalert";
document.body.appendChild(Mtcbvalert);  
var Mtcalert=document.createElement("div");
Mtcalert.id="Mtcalert";
document.body.appendChild(Mtcalert); 
Mtcalert.innerHTML='<h2>Thông báo</h2> <div id="Mtcalertdisplay"> hhfba<br><br><br><br><br><br><br><br><br><br>sjsf</div> <button id="Mtcalertokbtn">Xong</button>';
var Mtctoast=document.createElement("div");
Mtctoast.id="Mtctoast";
document.body.appendChild(Mtctoast); 
document.getElementById('Mtcalertokbtn').addEventListener('click',function(){closealert()});
Mtcbvalert.addEventListener('click',function(){closealert()});
//
Mtcbvalert.style.transition='1s';
document.getElementById('Mtcalert').style.transition='1s';
document.getElementById('Mtctoast').style.transition='0.5s';
//
function alert(content){
Mtcbvalert.style.display='block';
setTimeout("Mtcbvalert.style.opacity='0.8'",5);
document.getElementById('Mtcalert').style.display='block';
setTimeout("document.getElementById('Mtcalert').style.opacity='1'",5);
document.getElementById('Mtcalertdisplay').innerHTML=content;
}
function closealert(){
Mtcbvalert.style.opacity='0';
setTimeout("document.getElementById('Mtcbvalert').style.display='none'",999);
document.getElementById('Mtcalert').style.opacity='0';
setTimeout("document.getElementById('Mtcalert').style.display='none'",999);
}
function toastShow(content){
document.getElementById('Mtctoast').innerHTML=content;
document.getElementById('Mtctoast').style.display='block';
setTimeout("document.getElementById('Mtctoast').style.opacity='1'",1);
setTimeout(function(){
document.getElementById('Mtctoast').style.opacity='0';
setTimeout("document.getElementById('Mtctoast').style.display='none'",551);
},3000);
}
//end
