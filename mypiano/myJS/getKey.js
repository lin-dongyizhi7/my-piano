var charKey = [
    90, 88, 67, 86, 66, 78, 77,
    65, 83, 68, 70, 71, 72, 74,
    81, 87, 69, 82, 84, 89, 85,
    49, 50, 51, 52, 53, 54, 55
];

var block0 = [0, 422, 842, 1263];
var block1 = [0, 70, 140, 176, 246, 316, 386];

var mp3s = [];
for (var i = 1; i <= 8; i++) {
    var mp3url = "mypiano/audios/" + i + ".mp3";
    console.log(mp3url);
    //var mp3 = new Audio(mp3url);
    //var myAuto = document.getElementById('myaudio');
    //myAuto.src = mp3url;//MP3路径
    // myAuto.load();
    //mp3.load();
    //mp3s.push(mp3);
}

// var cl = document.querySelector(".keyBoard");
// console.log(cl);

function keyboard(event) {
    let keycode = event.keyCode;
    var num = charKey.indexOf(keycode);
    //alert(num);
    var zu = Math.floor(num / 7);
    var q = num % 7;

    var l1 = block0[zu];
    var l2 = block1[q];
    var l = l1 + l2;
    //console.log(zu);
    //console.log(q);
    //console.log(l);
    playing(l);
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
    autoplay.value="autoplay";
    a.setAttributeNode(autoplay);
    console.log(a);

    // var main = document.getElementById("main");
    // main.appendChild(a);
}

function playing(left) {
    c.fillStyle = "rgba(51,201,22,1)";
    c.fillRect(left, 600, 35, 202);
}

document.addEventListener("keydown", keyboard);
