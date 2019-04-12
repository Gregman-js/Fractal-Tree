var leng = 100;
var rot;
var inne = 0.15;
var width = window.innerWidth;
var height = window.innerHeight;
var slider;
var randrot;
var randdl;
var rad = 0;
var dl = 0;
var czy = false;
var anime = 0;
var timer;
var gora = true;
function start()
{
	slider = document.getElementById("myRange");
	randrot = document.getElementById("rotation");
	randdl = document.getElementById("length");
	rot = slider.value/100 * Math.PI;
	slider.oninput = function() {
    inne = this.value;
	rot  = inne/100 * Math.PI;
	ctx.fillStyle = "black";
	ctx.translate(-width/2, -height+100);
	ctx.fillRect(0,0, width, height);
	first(rot);
	}
	randrot.oninput = function() {
    rad = this.value;
	ctx.fillStyle = "black";
	ctx.translate(-width/2, -height+100);
	ctx.fillRect(0,0, width, height);
	first(rot);
	}
	randdl.oninput = function() {
    dl = this.value;
	ctx.fillStyle = "black";
	ctx.translate(-width/2, -height+100);
	ctx.fillRect(0,0, width, height);
	first(rot);
	}
	canvas = document.getElementById("can");
	ctx = canvas.getContext("2d");
	canvas.width = width;
	canvas.height = height;
	ctx.fillStyle = "black";
	ctx.fillRect(0,0, width, height);
	first(rot);
}
function animacja(){
	if(czy == false){
		timer = setInterval("prawidlowa()", 50);
		czy = true;
	} else {
		clearInterval(timer);
		czy = false;
	}
}
function prawidlowa(){
	if(gora == true){
		if(anime < 90){
		anime++;
		} else {
			gora = false;
		}
		ctx.fillStyle = "black";
	ctx.translate(-width/2, -height+100);
	ctx.fillRect(0,0, width, height);
		first(anime/100 * Math.PI);
	} else {
		if(anime > 0){
		anime--;
		} else {
			gora = true;
		}
		ctx.fillStyle = "black";
	ctx.translate(-width/2, -height+100);
	ctx.fillRect(0,0, width, height);
		first(anime/100 * Math.PI);
	}
}
function first(ron){
	ctx.fillStyle = "black";
	ctx.strokeStyle = "white";
	ctx.fillRect(0,0, 400, 400);
	ctx.translate(width/2, height);
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(0,-leng);
	ctx.stroke();
	ctx.translate(0, -leng);
	tree(leng, ron);
}
function tree(dlug, obr){
	if(dlug > 10){
		dlug = dlug * 0.8;
		ctx.save();
	ctx.rotate(obr);
	draw(dlug);
	ctx.translate(0, -dlug);
	tree(dlug+ (Math.random()*dl/60-Math.random()*dl/120), obr + Math.random()*rad/300 - Math.random()*rad/600);
	ctx.restore();
	ctx.save();
	ctx.rotate(-obr);
	draw(dlug);
	ctx.translate(0, -dlug);
	tree(dlug+ (Math.random()*dl/60-Math.random()*dl/120), -(obr + Math.random()*rad/300 - Math.random()*rad/600));
	ctx.restore();
	}
	
}
function draw(dlug){
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(0,-dlug);
	ctx.stroke();
}
document.addEventListener("DOMContentLoaded", function() {
	start();
});