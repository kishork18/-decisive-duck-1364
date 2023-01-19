function slideshowFun(images){
    var division=document.getElementById("banner")
  division.innerHTML="";
  var image=document.createElement("img")
  image.setAttribute("src",images)
  
  division.append(image);
  
  }
  
  
  // Use the following data for slideshow
  var movieImages = [
  "https://assets0.mirraw.com/banner_sliders/9685/08_main_webp.webp?1672649895",
   "https://assets0.mirraw.com/banner_sliders/10027/02_%2824%29_main_webp.webp?1672666411",
   "https://assets0.mirraw.com/banner_sliders/10028/01_main_webp.webp?1671521028",
   "https://assets0.mirraw.com/banner_sliders/10029/07_main_webp.webp?1671520984",
   "https://assets0.mirraw.com/banner_sliders/10030/03_main_webp.webp?1671520928",

          

  ]
  
  
  window.addEventListener("load", function () {
    var index=0;
   slideshowFun(movieImages[index])
    setInterval(function(){
      index++;
      if(index===movieImages.length){
        index=0
      }
      slideshowFun(movieImages[index])
    },3000)
  
  });