var p;
function getP(obj) {
    //obj.value = obj.value.replace(/[\W]/g, "");
    obj.value = obj.value.replace(/[8-90kKlLiIoOpP`~!@#$%^&*()_=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）={}|《》？：“”【】、；‘'，。、]/g,"");
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

function clickHandle1() {
    var tune = p;
    //console.log(tune);
    document.getElementById("myIn").value = "";
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
                    console.log(a);
                    var n = dot.indexOf(tune[i++]) + a;
                    console.log(n);
                    if (n >= a) {
                        playing(n);
                    }
                }
                else {
                    i++;
                }
            }
            else {
                i++;
            }
        }, t
    )
}

function clickHandle2() {
    var tune = p;
    //console.log(tune);
    //console.log("play");
    //n=num,from 0
    document.getElementById("myIn").value = "";
    var i = 0;
    timeCount = setInterval(
        function () {
            if (i > tune.length) clearInterval(timeCount);
            if (tune[i] != ' ') {
                var n = kv.indexOf(tune[i++]);
                if (n >= 0) {
                    playing(n);
                }
            }
            else {
                i++;
            }
        }, t
    )
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

function changeSpeed() {
    speed = s[7 + rTimes - lTimes];
    t = t0 / speed;
    //console.log(t);
    //console.log(speed);
    sp.innerText = speed.toString();
}
