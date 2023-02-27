var p;
function getP(obj) {
    //obj.value = obj.value.replace(/[\W]/g, "");
    obj.value = obj.value.replace(/[8-90kKlLiIoOpP`~!@#$%^&*_=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）={}|《》？：“”【】、；‘'，。、]/g, "");
    obj.value = obj.value.toLowerCase();
    p = obj.value;
}

var kv = "zxcvbnmasdfghjqwertyu1234567";
var dot = "1234567";
var timeCount;
var speed = 1;
var t0 = 500;
var t = t0;
var lTimes = 0;
var rTimes = 0;
var s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1, 1.25, 1.5, 1.75, 2, 3, 4, 5, 10, 16];//normal at pos 7
var musics = [];
var filePath = "../music/";
var playMusic = false;

// if (playMusic == true) {
//     play2();
// }

function playingN(c) {
    var n = kv.indexOf(c);
    if (n >= 0) {
        playing(n);
    }
}

function play1() {
    var tune = p;
    //console.log(tune);
    var i = 0;
    timeCount = setInterval(
        function () {
            if (i > tune.length) clearInterval(timeCount);
            if (tune[i + 1] != '+' && tune[i + 1] != '-') {
                if (tune[i] != ' ') {
                    var n = dot.indexOf(tune[i++]) + 7;
                    if (n >= 7) {
                        //console.log(n);
                        playing(n);
                    }
                }
                else {
                    i++;
                }
            }
            else if (tune[i + 2] != '+' && tune[i + 2] != '-') {
                if (tune[i] != ' ') {
                    var a = (tune[i + 1] == '+' ? 14 : 0);
                    var n = dot.indexOf(tune[i++]) + a;
                    if (n >= a) {
                        playing(n);
                    }
                }
                else {
                    i++;
                }
            }
            else {
                i += 3;
            }
        }, t
    )
}

function play2() {
    var tune = p;
    //console.log(tune);
    console.log("play");
    //n=num,from 0
    var i = 0;
    timeCount = setInterval(
        function () {
            if (i > tune.length) clearInterval(timeCount);
            if (tune[i] != ' ') {
                if (tune[i] == '(') {
                    var m = 1;
                    for (; tune[i + m] != ')'; m++) {
                        playingN(tune[i + m]);
                    }
                    i = i + m + 1;
                }
                playingN(tune[i++]);
            }
            else {
                i++;
            }
        }, t
    )
}

function clickHandle1() {
    document.getElementById("myIn").value = "";
    play1();
}

function clickHandle2() {
    document.getElementById("myIn").value = "";
    play2();
}

var sp = document.getElementById("speed");
//console.log(sp);
//console.log(sp.innerText);


function clickHandle3() {
    lTimes++;
    changeSpeed();
}

function clickHandle4() {
    rTimes++;
    changeSpeed();
}

var music = document.getElementById("bailu");
// console.log(music);

function clickHandle5() {
    if (music.volume <= 0.9) {
        music.volume += 0.1;
    }
    music.volume = music.volume.toFixed(1);
    // console.log(music.volume);
}
function clickHandle6() {
    if (music.volume >= 0.1) {
        music.volume -= 0.1;
    }
    music.volume = music.volume.toFixed(1);
    // console.log(music.volume);
}

function clickToReturn() {
    window.location.href = "../choose.html";
}

function changeSpeed() {
    speed = s[7 + rTimes - lTimes];
    t = t0 / speed;
    //console.log(t);
    //console.log(speed);
    sp.innerText = speed.toString();
}

function readTXT() {
    // var src = filePath + name + ".txt";
    // console.log("play");
    // console.log(src);

    var inputFile = document.getElementById("upload").files[0];
    // console.log(inputFile);
    if (window.FileReader) {
        var reader = new FileReader();

        reader.onload = function () {
            // console.log("success");
        }
        reader.onloadend = function () {
            p = reader.result;
            console.log(p);
            playMusic = true;
            // window.open(`../mypiano.html?${p}${playMusic}`);
            window.location.href = "../mypiano.html";
        }
        reader.readAsText(inputFile, "utf-8");
    }
}