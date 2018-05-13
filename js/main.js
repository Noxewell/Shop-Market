


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

image4 = document.getElementById('image4');
image4.onclick = function () {
  changeImage(image4);
}

image5 = document.getElementById('image5');
image5.onclick = function () {
  changeImage(image5);
}

image6 = document.getElementById('image6');
image6.onclick = function () {
  changeImage(image6);
}


function changeImage(image) {
 if (image.src.match("../img/like.png")) {
  image.src = "../img/like-full.png";
 }
 else {
  image.src = "../img/like.png";
 }
}




like = document.getElementById('like');
like.onclick = function () {
  LikeImage(like);
}



function LikeImage(like) {
 if (like.src.match("../img/navbar-like.png")) {
  like.src = "../img/navbar-like2.png";
 }
 else {
  like.src = "../img/navbar-like.png";
 }
}




