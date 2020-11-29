var i = 0;
var txt = 'Направено от: Йоан Добчев и Явор Петров';
var txt2slide = `В атмосферата на Земята има много повече вългероден диоксид, отколкото метан. Въпреки това потенциалът на глобалното затопляне на метана - неговата мощност на затопляне в сравнение с CO2 - е около 30. Това означава, че е 30 пъти по-ефективен за улавяне на топлина в атмосферата от CO2. Изчислило се е, че добавянето на една молекула метан към атмосферата би имало същия ефект като добавянето на 30 молекули CO2.`;
var txt2slide2 = `laino`
var speed = 40;
var source = "./0001-0120.mp4";
var vid;
var vid2;
var vid4;
var vidSource;
var source = document.createElement('source');

source.setAttribute('src', './0001-0150.mp4');
var presentButtonPressed = false;
//vid.appendChild();
var browser = (function (agent) {
    switch (true) {
        //case agent.indexOf("edge") > -1: return "edge";
        //case agent.indexOf("edg/") > -1: return "chromium based edge (dev or canary)"; // Match also / to avoid matching for the older Edge
        //case agent.indexOf("opr") > -1 && !!window.opr: return "opera";
        case agent.indexOf("chrome") > -1 && !!window.chrome: return "chrome";
        //case agent.indexOf("trident") > -1: return "ie";
        case agent.indexOf("firefox") > -1: return "firefox";
        //case agent.indexOf("safari") > -1: return "safari";
        default: return "other";
    }
})(window.navigator.userAgent.toLowerCase());

function load() {
    loadPresentors()
    vid = document.getElementById("methaneMain");
    vid2 = document.getElementById("methane2");
    vid4 = document.getElementById("methane4");
    vidSource = document.getElementById("methaneSource");
    if (browser == "chrome") {
        // vid2.setAttribute("autoplay", true);
        vid4.setAttribute("autoplay", true);
    }

    //alert(document.getElementById('presentButton').innerHTML);
}
//------------2-------------\\
function secondSlideStart() {
    $("#main").css("display", "none")
    vid.style.display = "none";
    vid4.style.display = "inline";
    if (browser == "chrome") {
        vid4.play();
    }
    if (browser == "firefox") {
        vid4.setAttribute("autoplay", true);
    }
}

function on2ndSlideVidEnd() {
    var j = 0;
    document.getElementById("secondSlideP").style.display = "inline";
    text1SecondSlide();
    function text1SecondSlide() {
        if (j < txt2slide.length) {
            document.getElementById("textSecondSlide").innerHTML += txt2slide.charAt(j);
            j++;
            setTimeout(text1SecondSlide, 30);
        }
    }
}
function secondSlideButtonPress1() {
    var k = 0;
    document.getElementById("secondSlideP").style.display = "none";
    document.getElementById("secondSlideP2").style.display = "inline";
    text2SecondSlide
    function text2SecondSlide() {
        if (k < txt2slide2.length) {
            document.getElementById("textSecondSlide2").innerHTML += txt2slide2.charAt(k);
            k++;
            setTimeout(text2SecondSlide, 30);
        }
    }
}


//------------2-------------\\


function loadPresentors() {
    if (i < txt.length) {
        document.getElementById("presentors").innerHTML += txt.charAt(i);
        i++;
        setTimeout(loadPresentors, speed);
    }
}

function stoppedMainVid() {
    // vid.appendChild(source);
    // vid.play();
    vid.style.display = "none";
    document.getElementById("methane2").style.display = "inline";

    if (browser == "chrome") {
        vid2.play();
    }
    if (browser == "firefox") {
        vid2.setAttribute("autoplay", true);
    }
    //setTimeout(pause, 1000)
}
function pause() {
    vid2.pause();
}

function removePresentersAndButon() {
    // alert(1);
    document.getElementById("present").remove();
    presentButtonPressed = true;
    vid.loop = false;
    //vid.setAttribute(onended, "stoppedMainVid()")
}

//1ви слайд-------------------------------------------------------------------------------
function firstSlideFunc() {
    let metaninfo = "CH4 или метан, е най-простият наситен въглеводород, безцветен и безмирисен газ.Съставя се в 90% процента от наситения въглеводород.Резултат е на анаеробно разлагане на органичен (растителен) материал.Основен компонент на природния газ."
    let svvainfo = "Метанът е леснозапалим, възпламенява се при -188°C.При горене се образува метанал, които освобождава радикали HCO-, след което се превръщат във въглероден оксид.Силно реаргира с окислители и халогени."
    let ksninfo = "Главно се нахожда на метан от геоложки находища. Не идва в чист вид, най-често смесен с други въглеводородни горива,хелий или азот.Другият главен източник е от разлагане на органични отпадъци.Има и други, но това за основните."
    let ksiinfo = "Основната му полза е за гориво. Ползва се за електропроизводство, гориво за превозни средства, ракетно гориво и др."
    setTimeout(function () { $('#methane2').css('z-index', '-1') }, 300)

    let i = 0, i1 = 0, i2 = 0, i3 = 0;
    //метан
    function gei() {
        if (i < metaninfo.length) {
            document.getElementById("metaninfof").innerHTML += metaninfo.charAt(i);
            i++;
            setTimeout(gei, 40);
        }
    }
    gei()
    //свойства
    function gei1() {
        if (i1 < svvainfo.length) {
            document.getElementById("svvainfof").innerHTML += svvainfo.charAt(i1);
            i1++;
            setTimeout(gei1, 40);
        }
    }
    gei1()
    //къде се намира
    function gei2() {
        if (i2 < ksninfo.length) {
            document.getElementById("ksninfof").innerHTML += ksninfo.charAt(i2);
            i2++;
            setTimeout(gei2, 40);
        }
    }
    gei2()
    //ккъде се използва
    function gei3() {
        if (i3 < ksiinfo.length) {
            document.getElementById("ksiinfof").innerHTML += ksiinfo.charAt(i3);
            i3++;
            setTimeout(gei3, 40);
        }
    }
    gei3()
    setTimeout(function () { $("#buttondiv1").css('visibility', 'visible') }, 1200)
}



                                                        //⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶
                                                        //⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿
                                                        //⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿
                                                        //⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
                                                        //⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
                                                        //⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
                                                        //⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
                                                        //⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
//⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
//⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
//⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
//⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
//⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
//⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
// nooo pikachu head is in half :c