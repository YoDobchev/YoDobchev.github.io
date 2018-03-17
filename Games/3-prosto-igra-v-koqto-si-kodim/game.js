// Creating variables
var myX = 300, myY = 270;
var patron1x=100000, patron1y=100000
var patron2x=-100000, patron2y=100000
var patron3x=100000, patron3y=100000
var patron4x=10, patron4y=-1000
var skorostgore=0
var skorostdolu=0
var skorostlqvo=0
var skorostdqsno=0
var izvunzemno1x=Math.random()*770+600, izvunzemno1y=Math.random()*570
var zivoti=100
var tochki=0
var kraix=0, kraiy=0
var boostx=Math.random()*700, boosty=Math.random()*500
var patroni=5
var pari=300
var poveche=10
var poveche2=5
var pul=5
var pul2=5
var kamukx=1000, kamuky=1000;
var kamuk2=0
var golqmataskorost=3
var izvunzemno2x=Math.random()*30, izvunzemno2y=Math.random()*570
var patron5x=10000, patron5y=10000
var patron6x=-10000, patron6y=10000

function update() {
	kamuky=kamuky+29
	kamukx=kamukx+6
	myX=myX+skorostdqsno
	myX=myX-skorostlqvo
	myY=myY+skorostdolu
	myY=myY-skorostgore
	patron1x=patron1x+5
	patron2x=patron2x-5
	patron3y=patron3y+5
	patron4y=patron4y-5
	patron5x=patron5x+5
	patron6x=patron6x-5
	if(zivoti>1500){
	   zivoti=1500
	   }
	if(tochki>200000){
	   tochki=200000
	   }
	if(myX>770){
	   myX=770
	   }
	if(myX<0){
	   myX=0
	   }
    if(myY>570){
	   myY=570
	   }
    if(myY<0){
	   myY=0
	   }
	 if(patron5x>1000 && patron6x<-100 && patron3y>600 && patron4y<0 && patroni>0){
	      
  }
	izvunzemno1x = izvunzemno1x+(myX-izvunzemno1x)/40;
	izvunzemno1y = izvunzemno1y+(myY-izvunzemno1y)/40;
	izvunzemno2x = izvunzemno2x+(myX-izvunzemno2x)/100;
	izvunzemno2y = izvunzemno2y+(myY-izvunzemno2y)/100;
	if(patron1x+30>izvunzemno2x){  //x
        if(patron1x<izvunzemno2x+40){   //x
            if(patron1y+2>izvunzemno2y){     //y
                if(patron1y<izvunzemno2y+40){
					izvunzemno2x=Math.random()*30, izvunzemno2y=Math.random()*570
					tochki=tochki+10
					pari=pari+poveche2
				}
		    }
		}
	}
	if(patron2x+30>izvunzemno2x){  //x
        if(patron2x<izvunzemno2x+40){   //x
            if(patron2y+2>izvunzemno2y){     //y
                if(patron2y<izvunzemno2y+40){
					izvunzemno2x=Math.random()*30, izvunzemno2y=Math.random()*570
					tochki=tochki+10
					pari=pari+poveche2
				}
		    }
		}
	}
	if(patron3x+30>izvunzemno2x){  //x
        if(patron3x<izvunzemno2x+40){   //x
            if(patron3y+2>izvunzemno2y){     //y
                if(patron3y<izvunzemno2y+40){
					izvunzemno2x=Math.random()*30, izvunzemno2y=Math.random()*570
					tochki=tochki+10
					pari=pari+poveche2
				}
		    }
		}
	}
	if(patron4x+30>izvunzemno2x){  //x
        if(patron4x<izvunzemno2x+40){   //x
            if(patron4y+2>izvunzemno2y){     //y
                if(patron4y<izvunzemno2y+40){
					izvunzemno2x=Math.random()*30, izvunzemno2y=Math.random()*570
					tochki=tochki+10
					pari=pari+poveche2
				}
		    }
		}
	}
	if(myX+30>izvunzemno2x){  //x
        if(myX<izvunzemno2x+40){   //x
            if(myY+30>izvunzemno2y){     //y
                if(myY<izvunzemno2y+40){
					izvunzemno2x=Math.random()*30, izvunzemno2y=Math.random()*570
					zivoti=zivoti-2
				}
		    }
		}
	}
	if(myX+30>kamukx){  //x
        if(myX<kamukx+40){   //x
            if(myY+30>kamuky){     //y
                if(myY<kamuky+40){
					zivoti=zivoti-10
					kamukx=1000 
					kamuky=1000
				}
		    }
		}
	}
	
	if(kamukx+45>izvunzemno1x){  //x
        if(kamukx<izvunzemno1x+40){   //x
            if(kamuky+45>izvunzemno1y){     //y
                if(kamuky<izvunzemno1y+40){
					pari=pari+6500
					izvunzemno1x=Math.random()*770+600, izvunzemno1y=Math.random()*570
					kamukx=1000 
					kamuky=1000
				}
		    }
		}
	}
	if(kamukx+45>izvunzemno2x){  //x
        if(kamukx<izvunzemno2x+40){   //x
            if(kamuky+45>izvunzemno2y){     //y
                if(kamuky<izvunzemno2y+40){
					pari=pari+6500
					izvunzemno2x=Math.random()*770+600, izvunzemno2y=Math.random()*570
					kamukx=1000 
					kamuky=1000
				}
		    }
		}
	}

	if(patron1x+30>izvunzemno1x){  //x
        if(patron1x<izvunzemno1x+40){   //x
            if(patron1y+2>izvunzemno1y){     //y
                if(patron1y<izvunzemno1y+40){
					izvunzemno1x=Math.random()*770+600, izvunzemno1y=Math.random()*570
					tochki=tochki+10
					pari=pari+poveche2
				}
		    }
		}
	}
   if(patron2x+30>izvunzemno1x){  //x
        if(patron2x<izvunzemno1x+40){   //x
            if(patron2y+2>izvunzemno1y){     //y
                if(patron2y<izvunzemno1y+40){
					izvunzemno1x=Math.random()*770+600, izvunzemno1y=Math.random()*570
					tochki=tochki+10
					pari=pari+poveche2
				}
		    }
		}
	}
	if(myX+30>izvunzemno1x){  //x
        if(myX<izvunzemno1x+40){   //x
            if(myY+30>izvunzemno1y){     //y
                if(myY<izvunzemno1y+40){
					izvunzemno1x=Math.random()*770+600, izvunzemno1y=Math.random()*570
					zivoti=zivoti-1
				}
		    }
		}
	}
	if(patron4x+30>izvunzemno1x){  //x
        if(patron4x<izvunzemno1x+40){   //x
            if(patron4y+2>izvunzemno1y){     //y
                if(patron4y<izvunzemno1y+40){
					izvunzemno1x=Math.random()*770+600, izvunzemno1y=Math.random()*570
					tochki=tochki+10
					pari=pari+poveche2
				}
		    }
		}
	}
	if(patron3x+30>izvunzemno1x){  //x
        if(patron3x<izvunzemno1x+40){   //x
            if(patron3y+2>izvunzemno1y){     //y
                if(patron3y<izvunzemno1y+40){
					izvunzemno1x=Math.random()*770+600, izvunzemno1y=Math.random()*570
					tochki=tochki+10
					pari=pari+poveche2
				}
		    }
		}
	}
	if(myX+30>boostx){  //x
        if(myX<boostx+20){   //x
            if(myY+30>boosty){     //y
                if(myY<boosty+20){
					boostx=Math.random()*700, 
					boosty=Math.random()*500
					pari=pari+poveche
				}
		    }
		}
	}
}

function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
	context.fillRect(patron1x, patron1y, 30, 2);
	context.fillRect(patron2x, patron2y, 30, 2);
	context.fillRect(patron3x, patron3y, 2, 30);
	context.fillRect(patron4x, patron4y, 2, 30);
	context.fillStyle = "red";
	context.fillRect(izvunzemno1x, izvunzemno1y, 40, 40);
	context.fillStyle = "black";
	context.fillRect(izvunzemno2x, izvunzemno2y, 40, 40);
	context.font = "30px Arial"
	context.fillStyle = "green";
	context.fillText ("ammo: " + patroni + "/" + pul, 300, 550);
	context.fillText ("shop", 770, 30);
	context.fillText("hearts: " + zivoti + "/1500", 3, 550);
	context.fillText("points: " + tochki + "/200000", 650, 550);
	context.fillText ("money: " + pari, 730, 65);
	context.fillText ("(1) 300$ +5 hearts", 700, 110);
	context.fillText ("(2) 500$ +12 hearts", 700, 140);
	context.fillText ("(3) 100$ +100 points", 700, 170);
	context.fillText ("(4) 200$ +250 points", 700, 200);
	context.fillText ("(5) 600$ $boost", 700, 230);
	context.fillText ("(6) 300$ +2 filler", 700, 260);
	context.fillText ("(7) 5000$ rock", 700, 290);
	context.fillText ("rocks: " + kamuk2, 700, 320);
	context.fillText ("(8) 1000$ +1 faster", 700, 350);
	context.fillText ("(9) 50$ norm. fast", 700, 380);
	context.fillText ("(0) 3000$ helper", 700, 380);
	context.fillText (">H< - hacker mode", 10, 30);
	context.fillStyle = "yellow";
	context.fillText ("money", boostx-35, boosty-10);
	context.fillRect (boostx, boosty, 20, 20);
	context.font = "150px Arial"
	context.fillStyle = "blue";
	if(zivoti<=0){
	   context.fillRect(kraix, kraiy, 1000, 1000);
	   zivoti=0
	   context.fillStyle = "black";
	   context.fillText("Game over", 100, 150);
	   context.fillStyle = "yellow";
	   context.font = "40px Arial"
	   context.fillText("tochki: " + tochki, 350, 400);	
	   boostx=1000
	   }
	context.fillStyle = "gray";
	context.fillRect(kamukx, kamuky, 50, 50);
}

function keyup(key) {
	if(key==49 && pari>=300){
			 pari=pari-300;
			 zivoti=zivoti+5;
	   }
	if(key==50 && pari>=500){
			 pari=pari-500;
			 zivoti=zivoti+12;
	   }
	if(key==51 && pari>=100){
			 pari=pari-100;
			 tochki=tochki+100;
	   }
	if(key==52 && pari>=200){
			 pari=pari-200;
			 tochki=tochki+250;
	   }
	if(key==53 && pari>=600){
			 pari=pari-600;
			 poveche=poveche+10;
		     poveche2=poveche2+5;
	   }
	if(key==54 && pari>=300){
			 pari=pari-300;
			 pul=pul+2;
		     pul2=pul2+2
		     patroni=pul
	}
	if(key==55 && pari>=5000){
			 pari=pari-5000;
			 kamuk2=kamuk2+1
	}
	if(key==56 && pari>=1000){
			 pari=pari-1000;
			 golqmataskorost=golqmataskorost+1
	}
	if(key==57 && pari>=50){
			 pari=pari-50;
			 golqmataskorost=3
	}
	if(key==48 && pari>=3000){
			 pari=pari-3000;
			 pomoshnik=1
	}
	if(key==78 && kamuk2>0){
	   kamukx=myX
	   kamuky=-50
	   kamuk2=kamuk2-1
	   }
	if(key==82){
	   patroni=pul2
	   }
	if(key==72){
	   zivoti=zivoti+500
	   pari=pari+100000
	   tochki=tochki+50000
	   }
	if(key==39){
	   skorostdqsno=0
	   }
	if(key==38){
	   skorostgore=0
	   }
	if(key==37){
	   skorostlqvo=0
	   }
	if(key==40){
	   skorostdolu=0
	   }
	        if(key==32){ 
			  if(patron1x>800 && patron2x<0 && patron3y>600 && patron4y<0 && patroni>0){
						patron1x=myX+30
						patron1y=myY+15
						patron2x=myX-30
						patron2y=myY+15
						patron3x=myX+15
						patron3y=myY+30
						patron4x=myX+15
			            patron4y=myY-30	  
				        patroni=patroni-1
	 } 
			 
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function keydown(key) {
	if(key==39){
	   skorostdqsno=golqmataskorost
	   }
	if(key==38){
	   skorostgore=golqmataskorost
	   }
	if(key==37){
	   skorostlqvo=golqmataskorost
	   }
	if(key==40){
	   skorostdolu=golqmataskorost
	   }
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
