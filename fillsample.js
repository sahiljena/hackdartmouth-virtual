var sampleString="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius. Eu turpis egestas pretium aenean pharetra magna ac. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Vel eros donec ac odio tempor orci. Ut diam quam nulla porttitor massa id. Nulla facilisi cras fermentum odio eu. Ac tincidunt vitae semper quis. Morbi quis commodo odio aenean sed. Sit amet commodo nulla facilisi nullam. Ipsum dolor sit amet consectetur adipiscing elit. Malesuada fames ac turpis egestas integer eget aliquet nibh.<br><br>Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Auctor augue mauris augue neque gravida. Ornare arcu odio ut sem nulla pharetra diam. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Volutpat sed cras ornare arcu dui vivamus arcu felis. Pulvinar etiam non quam lacus. Vestibulum sed arcu non odio euismod. Fermentum dui faucibus in ornare quam viverra. Quisque egestas diam in arcu cursus euismod. Blandit cursus risus at ultrices mi tempus imperdiet. Vestibulum rhoncus est pellentesque elit ullamcorper. In dictum non consectetur a erat nam at.<br><br>Eget felis eget nunc lobortis mattis aliquam faucibus purus. Convallis aenean et tortor at. Senectus et netus et malesuada fames ac. Purus faucibus ornare suspendisse sed nisi lacus. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. A lacus vestibulum sed arcu non. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Duis convallis convallis tellus id interdum velit laoreet id donec. Sed tempus urna et pharetra pharetra. Ipsum dolor sit amet consectetur adipiscing elit. Odio morbi quis commodo odio aenean sed adipiscing diam. Velit ut tortor pretium viverra. Amet venenatis urna cursus eget nunc scelerisque. Phasellus vestibulum lorem sed risus. Faucibus purus in massa tempor nec feugiat nisl. Fames ac turpis egestas integer eget aliquet nibh. In mollis nunc sed id semper risus. Maecenas pharetra convallis posuere morbi leo.";
var fillSampleS = document.getElementsByClassName("fillSampleS");
var i;
for (i = 0; i < fillSampleS.length; i++) {
    fillSampleS[i].innerHTML += sampleString.substring(0,345);
  }
var fillSampleL = document.getElementsByClassName("fillSampleL");
var i;
for (i = 0; i < fillSampleL.length; i++) {
    fillSampleL[i].innerHTML += sampleString.substring(0,345)+sampleString.substring(0,345)+sampleString.substring(0,345);
  }
var fillSampleP2 = document.getElementsByClassName("fillSampleP2");
var i;
for (i = 0; i < fillSampleP2.length; i++) {
    fillSampleP2[i].innerHTML += sampleString.substring(0,1209);
  }
var fillSampleP3 = document.getElementsByClassName("fillSampleP3");
var i;
for (i = 0; i < fillSampleP3.length; i++) {
    fillSampleP3[i].innerHTML += sampleString.substring(0,2215);
  }



//For Images

var squareImageUrl = "https://fillsample.netlify.app/images/square.png";
var rectangleImageUrl = "https://fillsample.netlify.app/images/rect.png";
var circularImageUrl = "https://fillsample.netlify.app/images/circle.png";
var squareImageClass = document.getElementsByClassName("fillSampleImageSquare");
for (i = 0; i < squareImageClass.length; i++) {
    squareImageClass[i].src = squareImageUrl;
  }
var rectangleImageClass = document.getElementsByClassName("fillSampleImageRectangle");
for (i = 0; i < rectangleImageClass.length; i++) {
    rectangleImageClass[i].src = rectangleImageUrl;
  }
var cricleImageClass = document.getElementsByClassName("fillSampleImageCircle");
for (i = 0; i < cricleImageClass.length; i++) {
  cricleImageClass[i].src = circularImageUrl;
}
