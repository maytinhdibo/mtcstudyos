window.onbeforeunload = function(){
if(($('.summernote').code()!=localStorage.getItem(doc))){
  return 'Bạn chưa lưu những thay đổi...';
}
};
if(location.hash!=''){$('#chontemp').modal('show');}
document.getElementById('b').value=localStorage.getItem(localStorage.getItem('$thisdoc'));
 setTimeout(function(){set()}, 500);
doc=localStorage.getItem('$thisdoc');
document.getElementById('headernew').innerText=doc;
if(localStorage.getItem(doc+'-bg_wall_src')==''){
document.getElementById('removebgwall').style.display='none';
}
function mau(mau){
localStorage.setItem(doc,mau);
 $('.summernote').code(mau);
location.hash='';
}
document.title='Mtc Note: '+doc;
    function set() {  
     document.getElementById('note-editable').style.height=window.innerHeight-document.getElementById('header').offsetHeight-10-document.getElementById('note-toolbar').offsetHeight+'px';
if(localStorage.getItem(doc+'-bg_wall_src')!=null){
document.getElementById('note-editable').style.backgroundImage="url('"+localStorage.getItem(doc+'-bg_wall_src')+"')";
document.getElementById('imgpreview').style.backgroundImage="url('"+localStorage.getItem(doc+'-bg_wall_src')+"')";
}else{
document.getElementById('imgpreview').style.backgroundImage="url('lib/documentbg.png')";
}
if(localStorage.getItem(doc+'-bg_music_src')!=null){
document.getElementById('musiciframe').src="https://w.soundcloud.com/player/?url="+localStorage.getItem(doc+'-bg_music_src')+"&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;auto_play=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
}
   };
function removebgwall(){
localStorage.setItem(doc+'-bg_wall_src','');
document.getElementById('imgpreview').style.backgroundImage='';
document.getElementById('note-editable').style.backgroundImage='';
document.getElementById('removebgwall').style.display='none';
} 
function save(){
 localStorage.setItem(doc,$('.summernote').code()); 
document.getElementById('filetab').style.width='0%';document.getElementById('headernew').style.top='-30px';
}
 function savefull(){
	localStorage.setItem(doc,$('.summernote').code()); 
 setTimeout("savefull()", 5); 
}
 function removedoc(){
localStorage.removeItem(doc);	
 $('.summernote').code('');
document.getElementById('filetab').style.width='0%';
document.getElementById('headernew').style.top='-30px';
 }
function savefile(name,text){
text=text.replace(/<script/g,'<block');
text=text.replace(/<iframe/g,'<block');
text=text.replace(/\/script/g,'/block');
text=text.replace(/\/iframe/g,'/block');

download(doc+'.m3f',text);
}
function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
}
function readimg(fileimg){
var file = fileimg.files[0];
var imageType = /image.*/;
if (file.type.match(imageType)) {
  var reader = new FileReader();

  reader.onload = function(e) {
    document.getElementById('imgpreview').style.backgroundImage="url('"+reader.result+"')";
    sessionStorage.readerimg=reader.result;
	 document.getElementById('savebgimg').style.display="block";
  }
  reader.readAsDataURL(file); 
} else {
  alert("Hình ảnh không hợp lệ!");
}
}
function bgimg(img){
localStorage.setItem(doc+'-bg_wall_src',img );
document.getElementById('note-editable').style.backgroundImage="url('"+localStorage.getItem(doc+'-bg_wall_src')+"')";
document.getElementById('imgpreview').style.backgroundImage="url('"+localStorage.getItem(doc+'-bg_wall_src')+"')";
document.getElementById('removebgwall').style.display='block';
}
function nenmau(element){
bgimg(element.id);
windowclose('wallselect');
}
function windowclose(id){
document.getElementById(id).style.marginTop='-'+screen.height+'px';
}
function windowopen(id){
document.getElementById(id).style.marginTop='0px';
}
function optab(){
document.getElementById('filetab').style.width='100%';
document.getElementById('headernew').style.top='0';
}
function opmusic(){
if(document.getElementById('musiciframe').offsetHeight=='0'){
document.getElementById('musiciframe').style.height="120px";
}else{
document.getElementById('musiciframe').style.height='0px';
}
}
function opbieutuong(){
if(document.getElementById('bieutuong').offsetHeight=='0'){
document.getElementById('bieutuong').style.height="80%";
}else{
document.getElementById('bieutuong').style.height='0%';
}
}
function savenhac(){
localStorage.setItem(doc+'-bg_music_src',document.getElementById('idnhac').value);
document.getElementById('musiciframe').src="https://w.soundcloud.com/player/?url="+localStorage.getItem(doc+'-bg_music_src')+"&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;auto_play=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
}
function addicon(icon){
$('.summernote').code($('.summernote').code()+'<img src='+icon+'>');
}
window.onload = function() {
		var fileInput = document.getElementById('fileup');
		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;
			if ((file.name.lastIndexOf('.m3f')==(file.name.length-4))||(file.name.lastIndexOf('.html')==(file.name.length-5))||(file.name.lastIndexOf('.txt')==(file.name.length-4))) {
				var reader = new FileReader();

				reader.onload = function(e) {
					 $('.summernote').code(reader.result);
if(reader.result.indexOf('<script')!=-1){
alert('Tệp tin này không thực sự được tạo ra từ Mtc note, việc đọc tệp tin có thể gây ra lỗi');
}
				}

				reader.readAsText(file);	
			} else {
			   alert('Không hỗ trợ định dạng tệp tin này');
			}
		});
}
