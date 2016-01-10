sessionStorage.countlog=0;
if((location.hash=="#ok")||(localStorage.kokhoamanhinh=='true')){
	document.getElementById('logpage').style.display="none";
	document.getElementById('ready').style.display="none";
	document.getElementById('key').style.display="none";
}
document.getElementById('addminiapp').innerHTML=localStorage.miniapp;
document.getElementById('nofdisplay').innerHTML=localStorage.sysnof;
if(localStorage.sysnof!=''){
   document.getElementById('lock_nof').style.display='block';
}
checknof();
function checkapp(id){
if(localStorage.getItem(id)==null){
document.getElementById(id).style.display='none';;
}  
}
function checknof(){
if(localStorage.sysnof.match(/<div/g)==null){
document.getElementById('countnof').innerHTML='0';
document.getElementById('nofdisplay').innerHTML='<br><h2>Không có thông báo nào gần đây</h2>';
}else{
document.getElementById('countnof').innerHTML=+localStorage.sysnof.match(/<div/g).length;
}
}
function renewnof(){
localStorage.sysnof=document.getElementById('nofdisplay').innerHTML;
checknof();
}
function removeallnof(){
localStorage.sysnof='';
checknof();
}
if(localStorage.oneColor!=null){
	document.getElementById('keyboard').style.borderTopColor=localStorage.twoColor;
	document.getElementById('header').style.borderTopColor=localStorage.oneColor;
	document.getElementById('opkey').style.background=localStorage.oneColor;
	document.getElementById('see').style.background=localStorage.oneColor;
	document.getElementById('save').style.background=localStorage.oneColor;
	document.getElementById('login').style.background=localStorage.oneColor;
	document.getElementById('opkey2').style.background=localStorage.oneColor;
	document.getElementById('see2').style.background=localStorage.oneColor;
}
function key(btn){
	document.getElementById(sessionStorage.keyinput).value=document.getElementById(sessionStorage.keyinput).value+btn;
}
function openkey(id){
	sessionStorage.keyinputold=sessionStorage.keyinput;
	sessionStorage.keyinput=id;
	if(sessionStorage.keyinput==sessionStorage.keyinputold||sessionStorage.keyinputold=='undefined'){
    if(document.getElementById('keyboard').offsetHeight<10){
			document.getElementById(id).value='';
	document.getElementById('keyboard').style.height='183px';
	}else{
	document.getElementById('keyboard').style.height='0px';
	}}
}
function delkey(){
	document.getElementById(sessionStorage.keyinput).value=document.getElementById(sessionStorage.keyinput).value.substr(0,(document.getElementById(sessionStorage.keyinput).value.length-1));
}
function seepass(id){
    if(document.getElementById(id).type=='password'){
	document.getElementById(id).type='text';
	}else{
	document.getElementById(id).type='password';
	}
}
function theme(one,two,three){
	sessionStorage.oneColor=one;
	sessionStorage.twoColor=two;
sessionStorage.threeColor=three;
	document.getElementById('save').style.background=one;
	document.getElementById('header').style.borderTopColor=one;
    document.getElementById('keyboard').style.borderTopColor=two;
	document.getElementById('opkey').style.background=one;
	document.getElementById('see').style.background=one;
	document.getElementById('opkey2').style.background=one;
	document.getElementById('see2').style.background=one;
}
function signup(){
	if(sessionStorage.oneColor==null){
		alert('Bạn chưa chọn giao diện!');
	}else{
		if(document.getElementById('name').value=='Tên của bạn'||document.getElementById('name').value==''){
		alert('Bạn không được bỏ trống tên!');
		}else{
			if(document.getElementById('uppass').value=='matkhau'||document.getElementById('uppass').value==''){
		alert('Bạn không được bỏ trống mật khẩu!');
		}else{
			if(document.getElementById('uppass').value!=document.getElementById('uppass2').value){
		alert('Mật khẩu không khớp!');
		}else{	
 localStorage.acname=document.getElementById('name').value;		
    localStorage.oneColor=sessionStorage.oneColor;
	localStorage.twoColor=sessionStorage.twoColor;
localStorage.threeColor=sessionStorage.threeColor;
	code(document.getElementById('uppass').value);
    localStorage.password=sessionStorage.ao;
location.href='worker.html';
		}
		}
		}
	}
	}
function login(){
	code(document.getElementById('pass').value);
	if(sessionStorage.ao==localStorage.password){
	document.getElementById('logpage').style.marginTop='-'+screen.height+'px';
	document.getElementById('header').innerText='';
	document.getElementById('keyboard').style.height='0px';
	document.getElementById('key').style.opacity='0';
	setTimeout("document.getElementById('ready').style.height='0px';document.getElementById('ready').style.padding='0px'",3000);
    setTimeout("document.getElementById('keyboard').style.display='none';",3000);
	location.hash="ok";
if(localStorage.theodoivitri=='true'){
document.getElementById('iframe').src="lockdown/dangnhap.html";
}
    }else{
sessionStorage.countlog=sessionStorage.countlog-(-1);
if(sessionStorage.countlog==5){
sessionStorage.counttg=30;
document.getElementById('bvcount').style.display='block';
document.getElementById('iframe').src="lockdown/dotnhap.html";
countbv();
}else{
		alert('Mật khẩu bạn đã nhập sai!');
}
	}
}
function countbv(){
if(sessionStorage.counttg==0){
document.getElementById('bvcount').style.display='none';
sessionStorage.countlog==0;
return;
}
setTimeout("countbv()",1000);
sessionStorage.counttg=sessionStorage.counttg-1;
document.getElementById('tgbv').innerText=sessionStorage.counttg;
}
function lock(){
document.getElementById('logpage').style.marginTop='0';
	document.getElementById('header').innerText='đã khoá';
	document.getElementById('key').style.opacity='1';
    setTimeout("document.getElementById('keyboard').style.display='block';",3000);
	location.hash="";
closenof();
}
function removeallnof(){
localStorage.sysnof='';
checknof();
closenof();
}
function changesearch(value){
	if(value!=''){
	document.getElementById('searchbox').style.maxHeight="80%";
	document.getElementById('searchwith').innerHTML='<b>Tìm kiếm "</b><i>'+value+'" </i> với:';
     	}else{
	document.getElementById('searchbox').style.maxHeight="0px";	
	}
	sessionStorage.esearchvalue=value;
}
function golink(url){
location.href=url;
}
function esearch(q){
localStorage.lichsu=sessionStorage.esearchvalue;
localStorage.elichsu=localStorage.elichsu+'<span>'+sessionStorage.esearchvalue+'</span>';
	location.href=q+sessionStorage.esearchvalue;
}
function opennof(){
	document.getElementById('nof').style.height='100%';
	document.getElementById('acheader').style.display='block';
	document.getElementById('nofquick').style.display='block';
	document.getElementById('acbottom').style.bottom='0px';
}
function openbvnof(){
 	document.getElementById('bv').style.display='block';
	opennof();
}
function closenof(){
	document.getElementById('nof').style.height='0px';
	setTimeout("document.getElementById('acheader').style.display='none'",1000);
	setTimeout("document.getElementById('nofquick').style.display='none'",1000);
	document.getElementById('acbottom').style.bottom='-50px';
}
function closebvnof(){
 	setTimeout("document.getElementById('bv').style.display='none';none",1500);
	closenof();
}
function opminiapp(){
document.getElementById('miniapp').style.display='block';
setTimeout("document.getElementById('miniapp').style.height='50%'",1);
}
function clminiapp(){
setTimeout("document.getElementById('miniapp').style.display='none'",500);
document.getElementById('miniapp').style.height='0';
}
function addminiweb(){
var newmini=prompt('Nhập địa chỉ website bạn muốn thêm (Vui lòng nhập giao thức http://):','http://');
if(newmini==null){
return;
}
oldstring=newmini;
newmini=newmini+'/';
newmini=newmini.substring(7,newmini.length);
newmini=newmini.substring(0,newmini.indexOf('/'));
localStorage.miniapp=localStorage.miniapp+'<a href='+oldstring+'><span><img src=http:\/\/'+newmini+'/favicon.ico'+'>'+oldstring+'</span></a>';
document.getElementById('addminiapp').innerHTML=localStorage.miniapp;
}
