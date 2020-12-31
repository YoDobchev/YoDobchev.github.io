//this is all mentally retarded. i agree
var browser = (function (agent) {
    switch (true) {
        case agent.indexOf("chrome") > -1 && !!window.chrome: return "chrome";
        case agent.indexOf("firefox") > -1: return "firefox";
        default: return "other";
    }
})(window.navigator.userAgent.toLowerCase());
// if (browser == "firefox") {
//     window.location.replace("https://youtu.be/dQw4w9WgXcQ");
// }
var videoNumber = 0;
var nextSlideB = false;
var vidEnded = false;
function load() {
    for (var i = 1; i < 9; i++) {
        if (browser == "chrome") {
            // vid2.setAttribute("autoplay", true);
            if (i != 4 || i != 8) {
                document.getElementById(`video${i}`).setAttribute("autoplay", true);
            }
        }
        document.getElementById(`video0`).play();
        document.getElementById(`video${i}`).style.display = "none";

    }
    for (var i = 1; i < 8; i++) {
        document.getElementById(`btn${i}`).style.display = "none";
    }
    for (var i = 0; i < 6; i++) {
        document.getElementById(`txt${i}D`).style.display = "none"
    }
    document.getElementById(`loading`).style.display = "none";
    txtEff("contributor", "Направено от: Йоан Добчев и Явор Петров 9а клас");

}
//this fucking sucks
function nextSlide(idButCurrent, idButNext, txtCurrent, txtNext) {

    document.getElementById(idButCurrent).style.display = "none";
    if (txtCurrent != null) {
        document.getElementById(txtCurrent).style.display = "none";
    }
    if (document.getElementById(`video${videoNumber}`).hasAttribute("loop") == true) {
        document.getElementById(`video${videoNumber}`).loop = false;
    }
    nextSlideB = true;
    console.log(videoNumber);
    if (vidEnded == true || videoNumber == 3) {
        if (videoNumber == 5) {
            console.log("xdd")
        }
        document.getElementById("sl1").style.display = "none";
        document.getElementById("sl2").style.display = "none";
        document.getElementById("sl1T").style.display = "none";
        document.getElementById("sl2T").style.display = "none";
        if (videoNumber == 2) {
            document.getElementById("sl1").style.display = "inline";
            document.getElementById("sl1T").style.display = "inline";
            document.getElementById("video3").pause();
        }
        if (videoNumber == 6) {
            document.getElementById("sl2").style.display = "inline";
            document.getElementById("sl2T").style.display = "inline";
            document.getElementById("video8").pause();
        }
        if (videoNumber != 1 && videoNumber != 5) {
            if (idButNext != null) {
                document.getElementById(idButNext).style.display = "inline";
            }
            if (txtNext != null) {
                document.getElementById(txtNext).style.display = "inline";
            }
        }
        switch (txtNext) {
            case "txt0D":
                txtEff("txt0", "Какво представляват термисторите? Термисторът е вид резистор, чието съпротивление се влияе най-вече от температурата на околната среда. Най-често, термисторите се правят от полупроводникови материали.");
                break;
            case "txt1D":
                txtEff("txt1", "Къде намират приложение? NTC се използва, когато е необходима промяна в съпротивлението при широк температурен диапазон. Най-често се използват като температурни датчици(сензори). Ползват се при хладилници, печки и др. PTC се използват, когато се изисква внезапна промяна в съпротивлението при определена температура. Те работят като превключвател на температура, например: от 60 до 120 градуса. Това може да се използва за саморегулиращи нагревателни елементи, като двустепенно превключване от по-силно към по-слабо греене и обратно.");
                break;
            case "txt2D":
                txtEff("txt2", "Видове термистори. Има два вида термистори - NTC и PTC. NTC е с отрицателен температурен коефициент, съпротивлението му намалява с нарастването на температурата, а PTC обратното, с положителен температурен коефициент и съпротивлението му се увеличава с нарастването на температурата.");
                break;
            case "txt3D":
                txtEff("txt3", "Какво представляват фоторезисторите? Фоторезистора представлява полупроводников електронен компонент, чието съпротивление е в обратнопропорционална зависимост от падащия върху него светлинен поток. За предпазване на функционалността на фото-чувствителната част, тя се покрива с хидрофобен лак.");
                break;
            case "txt4D":
                txtEff("txt4", "Къде намират приложение? Фоторезистора е чувствителен елемент, чиято проводимост зависи от степента на осветеност. Изменението на проводимостта се дължи на получаването на свободни носители на ел. ток (електрони) под въздействие на светлината. Могат да бъдат двуполярни, което означава че не зависят от посоката на тока от веригата или еднополярни, които се включват в права или обратна посока. По-често се използва обратно включване което при липса на осветеност има много голямо съпротивление поради липса на свободни заряди. Фоторезисторите могат да се срещнат в лазерни системи, нощни лампи, аларми и др.");
                break;
            case "txt5D":
                txtEff("txt5", "Видове фоторезистори. Устройствата управлявани от фоторезистори можем да ги разделим на два типа според скоростта на възприемане на сигнали - бавни, когато автоматичните устройства не изискват голяма скорост на реагиране и бързи, които се базират се на фотодиоди, използват се за предаване на информация по оптични линии, честотата на превключване при тях достига до стотици милиони и милиарди превключвания в секунда.");
                break;
            default:
                console.log("")
        }
        document.getElementById(`video${videoNumber}`).style.display = "none";
        document.getElementById(`video${videoNumber + 1}`).style.display = "inline";
        if (browser == "firefox" && videoNumber != 2 && videoNumber != 6) {
            document.getElementById(`video${videoNumber + 1}`).setAttribute("autoplay", true);
        }
        if (browser == "chrome" && videoNumber != 2 && videoNumber != 6) {
            document.getElementById(`video${videoNumber + 1}`).play();
        }
        nextSlideB = false;
        videoNumber++;
        vidEnded = false;
    }
}
//remove this asap
function vidEnd(idButNext, txtNext) {
    vidEnded = true;
    console.log(videoNumber);
    if (videoNumber == 2 || videoNumber == 6) {
        nextSlideB = true;
    }
    if (nextSlideB == true || videoNumber == 2) {
        if (videoNumber == 2) {
            document.getElementById("sl1").style.display = "inline";
            document.getElementById("sl1T").style.display = "inline";
            document.getElementById("video3").pause();

        }
        if (videoNumber == 6) {
            document.getElementById("sl2").style.display = "inline";
            document.getElementById("sl2T").style.display = "inline";
            document.getElementById("video8").pause();
        }
        if (videoNumber != 1 && videoNumber != 5) {
            if (idButNext != null) {
                document.getElementById(idButNext).style.display = "inline";
            }
            if (txtNext != null) {
                document.getElementById(txtNext).style.display = "inline";
            }
        }
        //my eyes hurt
        switch (txtNext) {
            case "txt0D":
                txtEff("txt0", "Какво представляват термисторите? Термисторът е вид резистор, чието съпротивление се влияе най-вече от температурата на околната среда. Най-често, термисторите се правят от полупроводникови материали.");
                break;
            case "txt1D":
                txtEff("txt1", "Къде намират приложение? NTC се използва, когато е необходима промяна в съпротивлението при широк температурен диапазон. Най-често се използват като температурни датчици(сензори). Ползват се при хладилници, печки и др. PTC се използват, когато се изисква внезапна промяна в съпротивлението при определена температура. Те работят като превключвател на температура, например: от 60 до 120 градуса. Това може да се използва за саморегулиращи нагревателни елементи, като двустепенно превключване от по-силно към по-слабо греене и обратно.");
                break;
            case "txt2D":
                txtEff("txt2", "Видове термистори. Има два вида термистори - NTC и PTC. NTC е с отрицателен температурен коефициент, съпротивлението му намалява с нарастването на температурата, а PTC обратното, с положителен температурен коефициент и съпротивлението му се увеличава с нарастването на температурата.");
                break;
            case "txt3D":
                txtEff("txt3", "Какво представляват фоторезисторите? Фоторезистора представлява полупроводников електронен компонент, чието съпротивление е в обратнопропорционална зависимост от падащия върху него светлинен поток. За предпазване на функционалността на фото-чувствителната част, тя се покрива с хидрофобен лак.");
                break;
            case "txt4D":
                txtEff("txt4", "Къде намират приложение? Фоторезистора е чувствителен елемент, чиято проводимост зависи от степента на осветеност. Изменението на проводимостта се дължи на получаването на свободни носители на ел. ток (електрони) под въздействие на светлината. Могат да бъдат двуполярни, което означава че не зависят от посоката на тока от веригата или еднополярни, които се включват в права или обратна посока. По-често се използва обратно включване което при липса на осветеност има много голямо съпротивление поради липса на свободни заряди. Фоторезисторите могат да се срещнат в лазерни системи, нощни лампи, аларми и др.");
                break;
            case "txt5D":
                txtEff("txt5", "Видове фоторезистори. Устройствата управлявани от фоторезистори можем да ги разделим на два типа според скоростта на възприемане на сигнали - бавни, когато автоматичните устройства не изискват голяма скорост на реагиране и бързи, които се базират се на фотодиоди, използват се за предаване на информация по оптични линии, честотата на превключване при тях достига до стотици милиони и милиарди превключвания в секунда.");
                break;
            default:
                console.log("")
        }
        document.getElementById(`video${videoNumber}`).style.display = "none";
        document.getElementById(`video${videoNumber + 1}`).style.display = "inline";
        if (browser == "firefox" && videoNumber != 2 && videoNumber != 6) {
            document.getElementById(`video${videoNumber + 1}`).setAttribute("autoplay", true);
        }
        if (browser == "chrome" && videoNumber != 2 && videoNumber != 6) {
            document.getElementById(`video${videoNumber + 1}`).play();
        }
        nextSlideB = false;
        videoNumber++;
        vidEnded = false;
    }
}
var t1 = [-40, -35, -30, -25, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
var r1 = [166.8, 120.5, 88, 65, 36.4, 27.6, 21, 16.3, 12.7, 10, 7.8, 6.2, 5, 4, 3.2, 2.6, 2.2, 1.8, 1.5, 1.2];
var i1 = [0.1, 1, 5, 10, 15, 20, 40, 70, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 10000]
var r2 = [1000, 120.6, 91.4, 77.3, 53.5, 44.2, 41.8, 36.2, 31, 18.6, 9.2, 8.8, 7.3, 6.9, 5.2, 4.4, 3, 2.1, 0.9, 0.1]
function sl1Change() {
    document.getElementById("video3").currentTime = document.getElementById("sl1").value * 0.1;
    document.getElementById("sl1T").innerHTML = `t: ${t1[document.getElementById("sl1").value - 1]}°C R: ${r1[document.getElementById("sl1").value - 1]}kΩ`;
}
function sl2Change() {
    document.getElementById("video7").currentTime = document.getElementById("sl2").value * 0.1;
    document.getElementById("sl2T").innerHTML = `Светлина: ${i1[document.getElementById("sl2").value - 1]}cd R: ${r2[document.getElementById("sl2").value - 1]}kΩ`;
}
function txtEff(id, txt) {
    var i = 0;
    function eff() {
        if (i < txt.length) {
            document.getElementById(id).innerHTML += txt.charAt(i);
            i++;
            setTimeout(eff, 10);
        }
    }
    eff();
}
