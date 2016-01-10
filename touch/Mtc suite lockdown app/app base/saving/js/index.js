function load(){if(localStorage.getItem('sum')!=null){
document.getElementById('sum').innerHTML='Tổng/Total:'+(localStorage.getItem('save')-(-localStorage.getItem('use'))-(-localStorage.getItem('share')));
document.getElementById('save').innerHTML='Tiết kiệm/Save:'+localStorage.getItem('save')*1;
document.getElementById('use').innerHTML='Sử dụng/Use:'+localStorage.getItem('use')*1;
document.getElementById('share').innerHTML='Chia sẻ/Share:'+localStorage.getItem('share')*1;	
	}
if(localStorage.getItem('savename')!=null&&localStorage.getItem('savename')!='null'){
if(localStorage.getItem('savenumber')*localStorage.getItem('savegia')<localStorage.getItem('save')){
document.getElementById('nof').style.backgroundColor="#CFD435";
	document.getElementById('vi').innerHTML="<h7 onclick=removenof()>Hoàn thành:"+localStorage.getItem('savename')+"<br>Chạm để mua</h7>";
document.getElementById('nofen').innerHTML="<h7 onclick=removenof()>Done:"+localStorage.getItem('savename')+"<br>Tap to shop</h7>";
	document.getElementById('vi').onClick="return removenof()";
	}
	}
	}
function addvi(){
	document.getElementById('doneadd').innerHTML='Tài khỏan của bạn đã được thêm:'+'<br>Cho việc sử dụng:'+document.getElementById('add').value*0.6+'VNĐ<br>Cho việc tiết kiệm:'+document.getElementById('add').value*0.35+'VNĐ<br>Và chia sẻ:'+document.getElementById('add').value*0.05+'VNĐ';
document.getElementById('doneadden').innerHTML='Your account has been added'
+'<br>For uses:'+
document.getElementById('add').value*0.6+
'$<br>For save:'+
	document.getElementById('add').value*0.35+
'$<br>And share:'+
document.getElementById('add').value*0.05+'US$';		
localStorage.setItem('sum',localStorage.getItem('sum')-(-document.getElementById('add').value));
localStorage.setItem('save',localStorage.getItem('save')-(-document.getElementById('add').value)*0.35);
localStorage.setItem('use',localStorage.getItem('use')-(-document.getElementById('add').value)*0.6);
localStorage.setItem('share',localStorage.getItem('share')-(-document.getElementById('add').value)*0.05);
if(localStorage.getItem('savename')!=null&&localStorage.getItem('savename')!='null'){
if(localStorage.getItem('savenumber')*localStorage.getItem('savegia')<localStorage.getItem('save')){
localStorage.sysnof=localStorage.sysnof+"<a href='app base/saving/index.html'><div onclick='this.remove();renewnof();'><table><tr><td><img src=http://www.psdgraphics.com/file/money-icon.jpg></td><td><p>Bạn đã đạt được kế hoạch của mình ("+localStorage.getItem('savename')+") </p></td></tr><tr><br><span class='mini'>Nhấn để hoàn tất</span><span>&nbsp</span></tr></table></div></a>";
}
}
	}
function soluong_vi(){
	document.getElementById('hoadon0').style.display="block";
  var i=0;
 while(i < document.getElementById('soluong_vi').value){
	document.getElementById('hoadon'+i).style.display="block";
	i++;
 }	
	}
function mua_vi(){
sumtt=document.getElementById('number0').value*document.getElementById('gia0').value+document.getElementById('number1').value*document.getElementById('gia1').value+document.getElementById('number2').value*document.getElementById('gia2').value+document.getElementById('number3').value*document.getElementById('gia3').value;
	if(sumtt>localStorage.getItem('use')){
	document.getElementById('alertlow').style.display="block";
	}else{
	localStorage.setItem('use', localStorage.getItem('use')-sumtt);
document.getElementById('shop_done_vi').innerHTML="Đã dùng:"+sumtt+"VNĐ";
document.getElementById('shop_done_en').innerHTML="Used:"+sumtt+"$";
	}
	}
function save(){
localStorage.setItem('savename',document.getElementById('save_name').value);	
localStorage.setItem('savenumber',document.getElementById('save_number').value);
localStorage.setItem('savegia',document.getElementById('save_gia').value);
if(localStorage.getItem('savename')!=null&&localStorage.getItem('savename')!='null'){
if(localStorage.getItem('savenumber')*localStorage.getItem('savegia')<localStorage.getItem('save')){
localStorage.sysnof=localStorage.sysnof+"<a href='app base/saving/index.html'><div onclick='this.remove();renewnof();'><table><tr><td><img src=http://www.psdgraphics.com/file/money-icon.jpg></td><td><p>Bạn đã đạt được kế hoạch của mình ("+localStorage.getItem('savename')+") </p></td></tr><tr><br><span class='mini'>Nhấn để hoàn tất</span><span>&nbsp</span></tr></table></div></a>";
}
}
document.getElementById('vi').innerHTML="Xong";	
document.getElementById('en').innerHTML="Ok";
	}
function removenof(){
if(localStorage.getItem('savename')!='null'){
	localStorage.setItem('savename', 'null');
  yes=localStorage.getItem('savenumber')*localStorage.getItem('savegia'); 
localStorage.setItem('save', localStorage.getItem('save')-yes);	  
  }
  location.reload();
  }
function share(){
	if(document.getElementById('sharemoney').value>localStorage.getItem('share'))
{
document.getElementById('vi').innerHTML="Lỗi";
document.getElementById('en').innerHTML="Abort";	
	}
		else{
	localStorage.setItem('share', localStorage.getItem('share')-document.getElementById('sharemoney').value);
document.getElementById('vi').innerHTML="Đã dùng:"+document.getElementById('sharemoney').value+"VNĐ";
document.getElementById('en').innerHTML="Used:"+document.getElementById('sharemoney').value+"$";

		}	
	}
function saveflus(){
localStorage.setItem('save',localStorage.getItem('save')-(-localStorage.getItem('use'))*0.25);	
localStorage.setItem('use',localStorage.getItem('use')-localStorage.getItem('use')*0.25);
	}
function shareflus(){
localStorage.setItem('share',localStorage.getItem('share')-(-localStorage.getItem('use'))*0.25);	
localStorage.setItem('use',localStorage.getItem('use')-localStorage.getItem('use')*0.25);
	}
function useflus(){
localStorage.setItem('use',localStorage.getItem('use')-(-localStorage.getItem('save'))*0.1);	
localStorage.setItem('save',localStorage.getItem('save')-localStorage.getItem('save')*0.1);
	}
	
	
