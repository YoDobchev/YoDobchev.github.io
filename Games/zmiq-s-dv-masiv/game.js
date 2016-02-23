// Creating variables
var myX = 10, myY = 10;
var nakoihodzaposlednostupih=[];
var segashenhod=0;
var posoka=39;
var applex=10 , appley=10;
var dulina=1;
var cvetove=["black","gray","orange","brown","purple","green","fuchsia","blue"];
for(x=0;x<80;x=x+1){
	nakoihodzaposlednostupih[x]=[];
	for(y=0;y<60;y=y+1){
		nakoihodzaposlednostupih[x][y]=-1;
	}
}

function update() {
	segashenhod=segashenhod+1;
	if(posoka==37){
		myX=myX-1;
	}
	if(posoka==38){
		myY=myY-1;
	}
	if(posoka==39){
		myX=myX+1;
	}
	if(posoka==40){
		myY=myY+1;
	}
//	if(nakoihodzaposlednostupih[myX][myY]>=segashenhod-dulina){
//	}
	if(applex==myX && appley==myY){
		dulina=dulina+1;
		applex=Math.floor(Math.random()*80)
		appley=Math.floor(Math.random()*60)
	}
	nakoihodzaposlednostupih[myX][myY]=segashenhod;
	
	if(myY<=1){
		myY=59;
	}
	if(myY>59){
		myY=2;
	}
	if(myX<=1){
		myX=79;
	}
	if(myX>=79){
		myX=2;
	}
}

function draw() {
	for(x=0;x<80;x=x+1){
		for(y=0;y<60;y=y+1){
			if(nakoihodzaposlednostupih[x][y]>=segashenhod-dulina){
				context.fillStyle=cvetove[(segashenhod-nakoihodzaposlednostupih[x][y])%8];
				
				context.fillRect(x*10,y*10,9,9);
			}
		}
	}
	context.fillStyle="red";
	context.fillRect(applex*10,appley*10,9,9);
}

function keyup(key) {
	if(key<=40 && key>=37){
	posoka=key;
}
	if(key==32){
		dulina=dulina+100;
	}
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
