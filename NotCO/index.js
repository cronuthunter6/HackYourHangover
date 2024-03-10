
//window.onclick = choosePic;

var myPix = new Array("1.jpg","2.jpg","3.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}