
var sounds=document.querySelectorAll(".sound");

//Row 1
var Q=document.getElementById("r1c1");

var W=document.getElementById("r1c2");

var E=document.getElementById("r1c3");

var R=document.getElementById("r1c4");

var T=document.getElementById("r1c5");

var Y=document.getElementById("r1c6");

var U=document.getElementById("r1c7");

var I=document.getElementById("r1c8");

var O=document.getElementById("r1c9");

var P=document.getElementById("r1c10");


//Row 2
var A=document.getElementById("r2c1");

var S=document.getElementById("r2c2");

var D=document.getElementById("r2c3");

var F=document.getElementById("r2c4");

var G=document.getElementById("r2c5");

var H=document.getElementById("r2c6");

var J=document.getElementById("r2c7");

var K=document.getElementById("r2c8");

var L=document.getElementById("r2c9");

//Third Row
var Z=document.getElementById("r3c1");

var X=document.getElementById("r3c2");

var C=document.getElementById("r3c3");

var V=document.getElementById("r3c4");

var B=document.getElementById("r3c5");

var N=document.getElementById("r3c6");

var M=document.getElementById("r3c7");



function animate(alph){
	anime({
 targets: alph,
 translateY: [
 	{value:50,duration:500},
 	{value:0,duration:500}
 ],
});
}


function space(aplh){
	
}




window.addEventListener("keydown",checkKey,false);

function checkKey(key){


	if(key.keyCode==81 || key.keyCode==113)
		{
			sounds[0].currentTime=0;
			sounds[0].play();
			//space(Q);
			animate(Q);
		}
	else if(key.keyCode==87 || key.keyCode==119)
		{
			sounds[1].currentTime=0;
			sounds[1].play();
			animate(W);
		}
	else if(key.keyCode==69 || key.keyCode==101)
		{
			sounds[2].currentTime=0;
			sounds[2].play();
			animate(E);
		}
	else if(key.keyCode==82 || key.keyCode==114)
		{
			sounds[3].currentTime=0;
			sounds[3].play();
			animate(R);}
	else if(key.keyCode==84 || key.keyCode==116)
		{
			sounds[26].currentTime=0;
			sounds[26].play();
			animate(T);}
	else if(key.keyCode==89 || key.keyCode==121)
		{
			sounds[4].currentTime=0;
			sounds[4].play();
			animate(Y);}
	else if(key.keyCode==85 || key.keyCode==117)
		{
			sounds[5].currentTime=0;
			sounds[5].play();
			animate(U);}
	else if(key.keyCode==73 || key.keyCode==105)
		{
			sounds[6].currentTime=0;
			sounds[6].play();
			animate(I);}
	else if(key.keyCode==79 || key.keyCode==111)
		{
			sounds[7].currentTime=0;
			sounds[7].play();
			animate(O);}
	else if(key.keyCode==80 || key.keyCode==112)
		{sounds[8].currentTime=0;
			sounds[8].play();
			animate(P);}

	else if(key.keyCode==65 || key.keyCode==97)
		{
			sounds[9].currentTime=0;
			sounds[9].play();
			animate(A);}
	else if(key.keyCode==83 || key.keyCode==115)
		{
			sounds[10].currentTime=0;
			sounds[10].play();
			animate(S);}
	else if(key.keyCode==68 || key.keyCode==100)
		{
			sounds[11].currentTime=0;
			sounds[11].play();
			animate(D);}
	else if(key.keyCode==70 || key.keyCode==102)
		{sounds[12].currentTime=0;
			sounds[12].play();
			animate(F);}
	else if(key.keyCode==71 || key.keyCode==103)
		{sounds[13].currentTime=0;
			sounds[13].play();
			animate(G);}
	else if(key.keyCode==72 || key.keyCode==104)
		{sounds[14].currentTime=0;
			sounds[14].play();
			animate(H);}
	else if(key.keyCode==74 || key.keyCode==106)
		{sounds[15].currentTime=0;
			sounds[15].play();
			animate(J);}
	else if(key.keyCode==75 || key.keyCode==107)
		{
			sounds[25].currentTime=0;
			sounds[25].play();
			animate(K);}
	else if(key.keyCode==76 || key.keyCode==108)
		{sounds[16].currentTime=0;
			sounds[16].play();
			animate(L);}

	else if(key.keyCode==90 || key.keyCode==122)
		{sounds[17].currentTime=0;
			sounds[17].play();
			animate(Z);}
	else if(key.keyCode==88 || key.keyCode==120)
		{sounds[18].currentTime=0;
			sounds[18].play();
			animate(X);}
	else if(key.keyCode==67 || key.keyCode==99)
		{sounds[19].currentTime=0;
			sounds[19].play();
			animate(C);}
	else if(key.keyCode==86 || key.keyCode==118)
		{sounds[20].currentTime=0;
			sounds[20].play();
			animate(V);}
	else if(key.keyCode==66 || key.keyCode==98)
		{sounds[21].currentTime=0;
			sounds[21].play();
			animate(B);}
	else if(key.keyCode==78 || key.keyCode==110)
		{sounds[22].currentTime=0;
			sounds[22].play();
			animate(N);}
	else if(key.keyCode==77 || key.keyCode==109)
		{sounds[23].currentTime=0;
			sounds[23].play();
			animate(M);}


	else if(key.keyCode==32)
	{
		sounds[24].currentTime=0;
			sounds[24].play();
		space(A);
	}
}