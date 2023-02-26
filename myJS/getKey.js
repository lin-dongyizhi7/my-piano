var charKey = [
    90, 88, 67, 86, 66, 78, 77,
    65, 83, 68, 70, 71, 72, 74,
    81, 87, 69, 82, 84, 89, 85,
    49, 50, 51, 52, 53, 54, 55
];

var block0 = [0, 420, 840, 1260];
var block1 = [0, 68, 137, 173, 243, 313, 383];
var flag = 1;
let down = new Array(28).fill(false);

// var cl = document.querySelector(".keyBoard");
// console.log(cl);

function myFocus() {
    flag = 0;
}

function keyboardD(event) {
    let keycode = event.keyCode;
    var num = charKey.indexOf(keycode);
    //alert(num);
    if (num < 0 || flag == 0) return;
    if (down[num] == false) {
        console.log(num);
        playing(num);
        down[num] = true;
    }
}

function keyboardU(event) {
    let keycode = event.keyCode;
    var num = charKey.indexOf(keycode);
    down[num] = false;
}

function draw(x, y) {
    //var y = Math.random() * 400 + 100;
    //console.log(y);
    var colors = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
    for (var r = 0; r < 20; r += 1) {
        c.fillStyle = `rgba(${colors[0]},${colors[1]},${colors[2]},${(30 - r) / 30})`;
        //console.log(c.fillStyle);
        c.beginPath();
        c.arc(x, y, r, 0, 2 * Math.PI);
        c.stroke();
        c.closePath();
    }
}

function playing(num) {
    var zu = Math.floor(num / 7);
    var q = num % 7;
    var l1 = block0[zu];
    var l2 = block1[q];
    var l = l1 + l2;
    //console.log(zu);
    //console.log(q);
    //console.log(l);
    c.fillStyle = "rgba(51,201,22,1)";
    c.fillRect(l, 600, 34, 204);

    var n = num + 1;
    var mp3url = "./audios/" + n + ".mp3";
    var a = document.createElement("audio");
    var s = document.createElement("source");
    var src = document.createAttribute("src");
    src.value = mp3url;
    var type = document.createAttribute("type");
    type.value = "audio/mp3";
    s.setAttributeNode(src);
    s.setAttributeNode(type);
    a.append(s);
    var autoplay = document.createAttribute("autoplay");
    autoplay.value = "autoplay";
    a.setAttributeNode(autoplay);
    //console.log(a);

    // var main = document.getElementById("main");
    // main.appendChild(a);
    draw(l + 18, 500 - n * 15);
}

function mouseClick(event) {
    let x = event.screenX;
    let y = event.screenY;
    // console.log("click");
    // console.log(x);
    // console.log(y);
    if (y > 150) {
        flag = 1;
    }
    // anim();
}

document.addEventListener("keydown", keyboardD);
document.addEventListener("click", mouseClick);
document.addEventListener("keyup", keyboardU);