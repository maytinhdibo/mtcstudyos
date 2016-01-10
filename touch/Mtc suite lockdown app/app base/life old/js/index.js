sessionStorage.endbody='';
sessionStorage.bgpost="bg-white";
changeEvent();
document.getElementById('worker').style.background="url('img/bluebg.png')";
if(localStorage.fileyear==null){
	localStorage.year=new Date().getFullYear();
}
 document.getElementById('worker').innerHTML=localStorage.getItem(localStorage.year);
function changeEvent(){
 if(sessionStorage.imagesrc!=null){
	 document.getElementById('imagetool').style.borderTop='2px solid #ff0023';
 }else{
	 	 document.getElementById('imagetool').style.borderTop='none';
 }
 setTimeout('changeEvent()',100);
 }
 function post(){
if(localStorage.getItem(localStorage.year)==null){
localStorage.setItem(localStorage.year,'');
}
toastShow('Đã post xong');
localStorage.setItem(localStorage.year,'<'+sessionStorage.bgpost+'><div>'+document.getElementById('input').value+sessionStorage.endbody+'</div></'+sessionStorage.bgpost+'>'+localStorage.getItem(localStorage.year));
 document.getElementById('worker').innerHTML=localStorage.getItem(localStorage.year);
 document.getElementById('input').value='';
 sessionStorage.endbody='';
 document.getElementById('preview').src='img/chuachonanh.png';
	sessionStorage.removeItem('imagesrc');
	document.getElementById('doneimage').disabled=true;
}
function chooseimage(){
		var file = document.getElementById('inputimage').files[0];
			var imageType = /image.*/;

			if (file.type.match(imageType)) {
				var reader = new FileReader();
				reader.readAsDataURL(file);	
				reader.onload = function(e) {
				document.getElementById('imagePreview').innerHTML='';
				document.getElementById('title-upimage').innerHTML ='Xem trước tải ảnh lên ('+Math.round(document.getElementById('inputimage').files[0].size/1024,2)+'KB)';
					var img = new Image();
					img.src = reader.result;
					img.id='preview';
					document.getElementById('imagePreview').appendChild(img);
					document.getElementById('doneimage').disabled=false;
					document.getElementById('doneimage').style.opacity=1;
					sessionStorage.imagesrc=img.src;	
					}			
			} else {
				document.getElementById('imagePreview').innerHTML = "Tệp vừa chọn không hợp lệ!";
				document.getElementById('doneimage').disabled=true;
					document.getElementById('doneimage').style.opacity=0.5;
			}
		}
function hidden(id){
document.getElementById(id).style.opacity='0.5';
}
function load_end(){
setTimeout("document.getElementById('mtc_boot_loader').style.opacity='0';",2000);
setTimeout("document.getElementById('mtc_boot_loader').style.display='none'",3000);
}
function imagesave(){
sessionStorage.endbody=sessionStorage.endbody+"<img onclick='return loadimage(this.src)' src='"+sessionStorage.imagesrc+"' />";
document.getElementById('upimage').style.opacity='0';
setTimeout(function(c1){document.getElementById('upimage').style.display='none';},500);
}
function loadimage(src){
		alert('a');
 document.addEventListener('deviceready',function(e){write('/sdcard/ab.png','aa')});	
		}
function write(file,content){
	var path = new FileWriter(file);
	path.write(content + "\n",false); 
    alert("file Written to SD Card");
			}
