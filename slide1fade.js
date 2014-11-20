
var slide1imgdon=1;
var slide1imgp1=new Image();
var slide1imgp2=new Image();
var slide1imgp3=new Image();
var slide1imgp4=new Image();
var slide1imgp5=new Image();

slide1imgp1.src='windsorstand327.jpg';
slide1imgp2.src='windsorawr327.jpg';
slide1imgp3.src='windsorcanter327.jpg';
slide1imgp4.src='windsor_trot327.jpg';
slide1imgp5.src='trot_sh327.jpg';

var slide1imgstr1='<img src="windsorstand327.jpg" width=327 height=240 alt="" border="0">';
var slide1imgstr2='<img src="windsorawr327.jpg" width=327 height=240 alt="" border="0">';
var slide1imgstr3='<img src="windsorcanter327.jpg" width=327 height=240 alt="" border="0">';
var slide1imgstr4='<img src="windsor_trot327.jpg" width=327 height=240 alt="" border="0">';
var slide1imgstr5='<img src="trot_sh327.jpg" width=327 height=240 alt="" border="0">';


var uagent;
var opsystem;
var IE4B=false;
var NS6B=false;
var MsWinS=false;
uagent = window.navigator.userAgent.toLowerCase();
opsystem = window.navigator.platform.toLowerCase();
if (opsystem.indexOf('win') != -1)
{MsWinS = true;}
IE4B=(document.all);
NS6B=((document.getElementById)&&(!IE4B))?true:false;

IE5=false;IE4=false;IEold=false;IE5=(uagent.indexOf('msie 5.0') != -1)?true:false;IE4=(uagent.indexOf('msie 4') != -1)?true:false;if(IE5||IE4||(MsWinS==false)){IEold=true;}
function slide1initr()
{

	if(IE4B){if((uagent.indexOf('msie 6.') != -1)||(uagent.indexOf('msie 5.5') != -1)){slide1imgdon=2;setTimeout('slide1dxtrans()',3000);
}
}

	else if(NS6B)

{
setTimeout('slide1slides()',5000);
}slide1yenif();
}

function slide1dxtrans()
{

if(IEold!=true)
{
slide1cimg.filters[0].apply();
}slide1cimg.src = eval("slide1imgp"+slide1imgdon+".src");
if(IEold!=true)
{
slide1cimg.filters[0].play();
}
slide1imgdon++;
if(slide1imgdon>5)
{
slide1imgdon=1;
}

setTimeout('slide1dxtrans()',8000);
}


function slide1slides()
{

if(slide1imgdon==1)
{
document.slide1slideimg.src=slide1imgp2.src;
}
if(slide1imgdon==2)
{
document.slide1slideimg.src=slide1imgp3.src;
}
if(slide1imgdon==3)
{
document.slide1slideimg.src=slide1imgp4.src;
}
if(slide1imgdon==4)
{
document.slide1slideimg.src=slide1imgp5.src;
}
if(slide1imgdon==5)
{
document.slide1slideimg.src=slide1imgp1.src;
}

slide1imgdon++;if(slide1imgdon>5)
{
slide1imgdon=1;
}
setTimeout('slide1slides()',5000);
}

slide1yenif = (window.onload) ? window.onload :  new Function;window.onload = function(){	setTimeout("slide1initr()",80);};
