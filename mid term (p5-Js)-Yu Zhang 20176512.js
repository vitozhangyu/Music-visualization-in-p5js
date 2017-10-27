var mic, analyzer;//,song;
/*function preload(){

	//song=loadSound('assets/rainbow.mp3');
	mic=new p5.AudioIn();
	mic.start();
}*/

function setup() {
	createCanvas(640,480);
	//song.loop();
	mic =new p5.AudioIn();
	mic.start();
	analyzer=new p5.Amplitude();
	analyzer.setInput(mic);
  // put setup code here
}

function draw() {
	background(200);
	//var rms=analyzer.getLevel();
	var vol=mic.getLevel();
	fill(148,0,211);
	noStroke();
	//var h=map(vol,0,1,height,0);
	ellipse(width/2,height,vol*50000,vol*50000);
	fill(75,0,130);
	noStroke();
	//var h=map(vol,0,1,height,0);
	ellipse(width/2,height,vol*40000,vol*40000);
	fill(0,0,255);
	noStroke();
	//var h=map(vol,0,1,height,0);
	ellipse(width/2,height,vol*30000,vol*30000);
	fill(0,255,0);
	noStroke();
	//var h=map(vol,0,1,height,0);
	ellipse(width/2,height,vol*20000,vol*20000);
	fill(255,255,0);
	noStroke();
	//var h=map(vol,0,1,height,0);
	ellipse(width/2,height,vol*10000,vol*10000);
	fill(255,127,0);
	noStroke();
	//var h=map(vol,0,1,height,0);
	ellipse(width/2,height,vol*5000,vol*5000);
	fill(255,0,0);
	noStroke();
	//var h=map(vol,0,1,height,0);
	ellipse(width/2,height,vol*2500,vol*2500);
  // put drawing code here
}

