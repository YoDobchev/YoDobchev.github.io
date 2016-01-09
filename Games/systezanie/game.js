// Creating variables
var myX=300,myY=350;
var igrachx=0 , igrachy=0;
var tatix=770 , tatiy=0;
var cvqt="gray";
var purvastenax=0 , purvastenay=150;
var vtorastenax=550 , vtorastenay=150;
var stenanadolux=770 , stenanadoluy=160;
var vtorastenanadolux=0 , vtorastenanadoluy=160;
var precheshtokubchex=425 , precheshtokubchey=95;
var shtitx=270 , shtity=300;

function update() {
    if(myX+300>igrachx){  //x
        if(myX<igrachx+30){   //x
            if(myY+300>igrachy){     //y
                if(myY<igrachy+30){
                    cvqt="blue";
                    igrachx=900;
                    igrachy=900;
                    tatix=900;
                    tatiy=900;
                    
                    console.log("siniqt pecheli");
                }
            }
        }
    }
    if(myX+300>tatix){  //x
        if(myX<tatix+30){   //x
            if(myY+300>tatiy){     //y
                if(myY<tatiy+30){
                    cvqt="green";
                    tatix=1000;
                    tatiy=1000;
                    igrachx=1000;
                    igrachy=1000;
                    
                    console.log("zeleniqt pecheli");
                }
            }
        }
    }
    if(igrachx+30>purvastenax){  //x
        if(igrachx<purvastenax+300){   //x
            if(igrachy+30>purvastenay){     //y
                if(igrachy<purvastenay+30){
                    igrachx=0;
                    igrachy=0;
                }
            }
        }
    }
        if(tatix+30>purvastenax){  //x
        if(tatix<purvastenax+300){   //x
            if(tatiy+30>purvastenay){     //y
                if(tatiy<purvastenay+30){
                    tatix=770;
                    tatiy=0;
                }
            }
        }
    }
    if(tatix+30>vtorastenax){  //x
        if(tatix<vtorastenax+300){   //x
            if(tatiy+30>vtorastenay){     //y
                if(tatiy<vtorastenay+30){
                    tatix=770;
                    tatiy=0;
                }
            }
        }
    }
    if(igrachx+30>vtorastenax){  //x
        if(igrachx<vtorastenax+300){   //x
            if(igrachy+30>vtorastenay){     //y
                if(igrachy<vtorastenay+30){
                    igrachx=0;
                    igrachy=0;
                }
            }
        }
    }
    if(igrachx+30>stenanadolux){  //x
        if(igrachx<stenanadolux+30){   //x
            if(igrachy+30>stenanadoluy){     //y
                if(igrachy<stenanadoluy+600){
                    igrachx=0;
                    igrachy=0;
                }
            }
        }
    }
    if(igrachx+30>vtorastenanadolux){  //x
        if(igrachx<vtorastenanadolux+30){   //x
            if(igrachy+30>vtorastenanadoluy){     //y
                if(igrachy<vtorastenanadoluy+600){
                    igrachx=0;
                    igrachy=0;
                }
            }
        }
    }
    if(tatix+30>vtorastenanadolux){  //x
        if(tatix<vtorastenanadolux+30){   //x
            if(tatiy+30>vtorastenanadoluy){     //y
                if(tatiy<vtorastenanadoluy+600){
                    tatix=770;
                    tatiy=0;
                }
            }
        }
    }
    if(igrachx+30>precheshtokubchex){  //x
        if(igrachx<precheshtokubchex+10){   //x
            if(igrachy+30>precheshtokubchey){     //y
                if(igrachy<precheshtokubchey+10){
                    igrachx=0;
                    igrachy=0;
                }
            }
        }
    }
    if(tatix+30>precheshtokubchex){  //x
        if(tatix<precheshtokubchex+10){   //x
            if(tatiy+30>precheshtokubchey){     //y
                if(tatiy<precheshtokubchey+10){
                    tatix=770;
                    tatiy=0;
                }
            }
        }
    }
    if(tatix+30>shtitx){  //x
        if(tatix<shtitx+350){   //x
            if(tatiy+30>shtity){     //y
                if(tatiy<shtity+30){
                    tatix=770;
                    tatiy=0;
                }
            }
        }
    }
    if(igrachx+30>shtitx){  //x
        if(igrachx<shtitx+350){   //x
            if(igrachy+30>shtity){     //y
                if(igrachy<shtity+30){
                    igrachx=0;
                    igrachy=0;
                }
            }
        }
    }
    if(igrachx+30>tatix){  //x
        if(igrachx<tatix+350){   //x
            if(igrachy+30>tatiy){     //y
                if(igrachy<tatiy+30){
                    igrachx=0;
                    igrachy=0;
                    tatix=770;
                    tatiy=0;
                }
            }
        }
    }
     if(tatix+30>stenanadolux){  //x
        if(tatix<stenanadolux+30){   //x
            if(tatiy+30>stenanadoluy){     //y
                if(tatiy<stenanadoluy+600){
                    tatix=770;
                    tatiy=0;
                }
            }
        }
    }
}


function draw() {
	// This is how you draw a rectangle
    context.fillRect(vtorastenanadolux,vtorastenanadoluy,30,600);
    context.fillRect(purvastenax,purvastenay,300,30);
    context.fillStyle="red";
    context.fillRect(shtitx,shtity,350,30);
    context.fillStyle="gray";
    context.fillRect(precheshtokubchex,precheshtokubchey,10,10);
    context.fillStyle="green";
    context.fillRect(stenanadolux,stenanadoluy,30,600);
    context.fillStyle="green";
    context.fillRect(vtorastenax,vtorastenay,300,30);
    context.fillStyle=cvqt;
	context.fillRect(myX, myY, 300, 300);
    context.fillStyle="blue";
    context.fillRect(igrachx,igrachy,30,30);
    context.fillStyle="green";
    context.fillRect(tatix,tatiy,30,30);
}

function keyup(key) {
    if(key==37){
        tatix=tatix-20;
    }
    if(key==38){
        tatiy=tatiy-20;
    }
    if(key==39){
        tatix=tatix+20;
    }
    if(key==40){
        tatiy=tatiy+20;
    }
    if(key==65){
        igrachx=igrachx-20;
    }
    if(key==87){
        igrachy=igrachy-20;
    }
    if(key==68){
        igrachx=igrachx+20;
    }
    if(key==83){
        igrachy=igrachy+20;
    }
	// Show the pressed keycode in the console
	//console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	//console.log("Mouse clicked at", mouseX, mouseY);
}
