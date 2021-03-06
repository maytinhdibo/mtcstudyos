theme();
function theme(){
if(window.innerWidth<=window.innerHeight){
document.getElementById('list').style.left='-250px';
document.getElementById('frame').style.left='0';
document.getElementById('listbtn').style.display='block';
}else{
document.getElementById('list').style.left='0px';
document.getElementById('frame').style.left='250px';
document.getElementById('listbtn').style.display='none';
}
}

function oplist(){
document.getElementById('list').style.transition='0.5s';
if(document.getElementById('list').style.left!='0px'){
document.getElementById('list').style.left='0';
document.getElementById('listbtn').style.left='0';
}else{
document.getElementById('list').style.left='-250px';
document.getElementById('listbtn').style.left='-30px';
}
}
//style
setTimeout(function(style){
document.getElementById('frame').style.top=document.getElementsByTagName('header')[0].scrollHeight+'px';
document.getElementById('list').style.top=document.getElementsByTagName('header')[0].scrollHeight+'px';},100
)
//style
function load(link){
$('#frame').hide().load('page/'+link+'.html').fadeIn('fast');
}
function opkq(){
document.getElementById('kq').style.display="block";
document.getElementById('kq').className="animated fadeInUp";
}
function clokq(){
document.getElementById('kq').className="animated fadeOutDown";
setTimeout("document.getElementById('kq').style.display='none'",800);
}
function doph(oh){
kq='';
ph=-Math.log10($('#nongdo').val());
if(oh=='oh'){
ph=14-ph;
phend="<br>Nồng độ H<sup>+</sup> tương ứng là: "+(Math.pow(10,-14))/($('#nongdo').val());
}else{
phend="<br>Nồng độ OH<sup>-</sup> tương ứng là: "+(Math.pow(10,-14))/($('#nongdo').val());
}
poh=14-ph;
if (ph<7){
kq="Dung dịch có tính axit.<br>";
}else{
if (ph>7){
kq="Dung dịch có tính bazo.<br>";
}else{
kq="Dung dịch trung tính.<br>";
}
}
if((ph<14)&&(ph>0)){
kq+="Độ pH tính được: "+ph+"<br>Độ pOH tương ứng: "+poh;
}else{
kq="Số liệu tính toán không phù hợp.";
document.getElementById('kqdisplay').innerHTML=kq;
opkq();
return;
}
kq=kq+phend;
document.getElementById('kqdisplay').innerHTML=kq;
opkq();
}


function dophdly(oh){
kq='';
ph=(-Math.log10($('#ka').val())-Math.log10($('#nongdo').val()))/2;
if(oh=='oh'){
ph=14-ph;
phend="<br>Nồng độ H<sup>+</sup> tương ứng là: "+(Math.pow(10,-14))/($('#nongdo').val());
}else{
phend="<br>Nồng độ OH<sup>-</sup> tương ứng là: "+(Math.pow(10,-14))/($('#nongdo').val());
}
poh=14-ph;
if (ph<7){
kq="Dung dịch có tính axit.<br>";
}else{
if (ph>7){
kq="Dung dịch có tính bazo.<br>";
}else{
kq="Dung dịch trung tính.<br>";
}
}
if((ph<14)&&(ph>0)){
kq+="Độ pH tính được: "+ph+"<br>Độ pOH tương ứng: "+poh;
}else{
kq="Số liệu tính toán không phù hợp.";
document.getElementById('kqdisplay').innerHTML=kq;
opkq();
return;
}
kq=kq+phend;
document.getElementById('kqdisplay').innerHTML=kq;
opkq();
}


function tiloemol(){
if(($('#val1').val()<0)||($('#val2').val()<0)||($('#val3').val()<0)||($('#vals').val()<0)){
document.getElementById('kqdisplay').innerHTML="Không thể giải với các thông số trên. Các thông số phải là số dương.";
}else{
val3=$('#val3').val()*$('#valx').val();
if($('#val1').val()<$('#val2').val()){
solon=$('#val2').val();
sobe=$('#val1').val();
}else{
sobe=$('#val2').val();
solon=$('#val1').val();
}
if(!((sobe<=val3)&&(val3<=solon))){
document.getElementById('kqdisplay').innerHTML="Các thông số trên không thể giải do khối lượng mol trung bình luôn nằm giữa 2 giá trị khối lượng mol của 2 chất. Hãy xem lại đề bài ra, có thể đây là tỉ khối."
}else{
d=$('#val2').val()-$('#val1').val();
dx=$('#val2').val()-val3;
dy=val3-$('#val1').val();
if(d!=0){
x=dx/d;
y=dy/d;
tile=x/y;
px=Math.round10(x*100,-2);
py=Math.round10(y*100,-2);
if(tile==Infinity){tile=0};
document.getElementById('kqdisplay').innerHTML="Tỉ lệ chất thứ nhất: "+px+"%.<br>Tỉ lệ chất thứ hai: "+py+"%.<br>Tỉ lệ các chất: <sup>Chất thứ nhất</sup>&frasl;<sub>Chất thứ hai</sub>="+fraction(Math.round10(tile,-2));
if($('#vals').val()!=''){
document.getElementById('kqdisplay').innerHTML+="<br>Lượng chất (tính theo đơn vị ban đầu):<br>Chất thứ nhất: "+$('#vals').val()*px/100+"<br>Chất thứ hai: "+$('#vals').val()*py/100;
}
}else{
document.getElementById('kqdisplay').innerHTML="Không thể giải với các thông số trên.";
}
}
}
opkq();
}

function no3(){
kq=$('#n2').val()*10-(-$('#n2o').val()*8)-(-$('#no').val()*3)-(-$('#no2').val())-(-$('#nh4no3').val()*8)
kq2=kq-(-2)*($('#n2').val()-(-$('#n2o').val())-(-$('#nh4no3').val()))-(-$('#no').val())-(-$('#no2').val());
document.getElementById('kqdisplay').innerHTML="Số mol NO<sub>3</sub><sup>-</sup> tạo muối=Số mol e nhường=Số mol e nhận="+kq+" (mol).<br>Lượng HNO<sub>3</sub> đã sử dụng: "+kq2+" (mol).";
opkq();
}

function HCF(u, v) { 
	var U = u, V = v
	while (true) {
		if (!(U%=V)) return V
		if (!(V%=U)) return U 
	} 
}
//convert a decimal into a fraction
function fraction(decimal){
 if((decimal==0)&&(decimal==Infinity)){return 0;};
if((decimal/1)==Math.round(decimal)){return decimal;};
	if(!decimal){
		decimal=this;
	}
	whole = String(decimal).split('.')[0];
	decimal = parseFloat("."+String(decimal).split('.')[1]);
	num = "1";
	for(z=0; z<String(decimal).length-2; z++){
		num += "0";
	}
	decimal = decimal*num;
	num = parseInt(num);
	for(z=2; z<decimal+1; z++){
		if(decimal%z==0 && num%z==0){
			decimal = decimal/z;
			num = num/z;
			z=2;
		}
	}
	//if format of fraction is xx/xxx
	if (decimal.toString().length == 2 && 
			num.toString().length == 3) {
                //reduce by removing trailing 0's
		decimal = Math.round(Math.round(decimal)/10);
		num = Math.round(Math.round(num)/10);
	}
	//if format of fraction is xx/xx
	else if (decimal.toString().length == 2 && 
			num.toString().length == 2) {
		decimal = Math.round(decimal/10);
		num = Math.round(num/10);
	}
	//get highest common factor to simplify
	var t = HCF(decimal, num);
 
	//return the fraction after simplifying it
return whole*(num/t)+(decimal/t)+"/"+num/t;
}
//math row
(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();
