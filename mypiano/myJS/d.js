var cn;
var c;
var u = 10;
var h = 800;
var w = 1680;
const m = {
    x: w / 2,
    y: h / 2
};
window.onmousemove = function (e) {
    m.x = e.clientX;
    m.y = e.clientY;
}
function gc() { //get rgb value
    var s = "0123456789ABCDEF";
    var c = "#";
    for (var i = 0; i < 6; i++) {
        c += s[Math.ceil(Math.random() * 15)];
    }
    return c;
}
var a = [];
window.onload = function myfunction() {
    cn = document.getElementById('cw');
    c = cn.getContext('2d');

    for (var i = 0; i < 10; i++) {
        var r = 30;
        var x = Math.random() * (w - 2 * r) + r;
        var y = Math.random() * (h - 2 * r) + r;
        var t = new ob(w / 2, h / 2, 5, "red", Math.random() * 50 + 15, 2);
        a.push();
    }

    c.lineWidth = "2";
    c.globalAlpha = 0.5;
    resize();
    anim();
}
window.onresize = function () {
    resize();
}
function resize() {
    cn.height = h;
    cn.width = w;
    for (var i = 0; i < 50; i++) {
        var r = 30;
        var x = Math.random() * (w - 2 * r) + r;
        var y = Math.random() * (h - 2 * r) + r;
        a[i] = new ob(w / 2, h / 2, 4, gc(), Math.random() * 50 + 15, 0.02);
    }
}
function ob(x, y, r, cc, o, s) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.cc = cc;
    this.theta = Math.random() * Math.PI * 2;
    this.s = s;
    this.o = o;
    this.t = Math.random() * 50;

    this.o = o;
    this.dr = function () {
        const ls = {
            x: this.x,
            y: this.y
        };
        this.theta += this.s;
        this.x = m.x + Math.cos(this.theta) * this.t;
        this.y = m.y + Math.sin(this.theta) * this.t;
        c.beginPath();
        c.lineWidth = this.r;
        c.strokeStyle = this.cc;
        c.moveTo(ls.x, ls.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
        //setTimeout(function () { }, 1000);
    }
}
function anim() {
    requestAnimationFrame(anim);
    c.fillStyle = "rgba(0,0,0,0.06)";
    c.fillRect(0, 0, 1680, 800);
    a.forEach(function (e, i) {
        e.dr();
    });
}

