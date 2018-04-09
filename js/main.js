


image1 = document.getElementById('image1');
image1.onclick = function () {
  changeImage(image1);
}

image2 = document.getElementById('image2');
image2.onclick = function () {
  changeImage(image2);
}


image3 = document.getElementById('image3');
image3.onclick = function () {
  changeImage(image3);
}


function changeImage(image) {
 if (image.src.match("../img/like.png")) {
  image.src = "../img/like-full.png";
 }
 else {
  image.src = "../img/like.png";
 }
}



