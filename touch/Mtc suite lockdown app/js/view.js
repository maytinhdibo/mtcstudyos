function appsize(){
	if(document.body.scrollWidth<document.body.scrollHeight){
		c=document.body.scrollWidth;
	}else{
		c=document.body.scrollHeight;
	}
	localStorage.appheight=c*0.9*0.21;
	localStorage.appmargin=c*(0.9-0.9*0.22*4)*0.25;
}
function appsizecheck(){
document.getElementById('style').innerHTML='<style>#app img{height:'+localStorage.appheight+'px;width:'+localStorage.appheight+'px;margin-left:'+localStorage.appmargin+'px;background:'+localStorage.oneColor+'}</style>';
number=Math.floor((Math.random() * 10) + 1);;
document.getElementById("logpage").style.backgroundImage="url('img/wall ("+number+").jpg')";
}
