var musicToPlay;
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
            musicToPlay = reader.result;
            console.log(musicToPlay);
            window.open(`../mypiano.html?${musicToPlay}`);
            // window.location.href = "../mypiano.html";
        }
        reader.readAsText(inputFile, "utf-8");
    }
}