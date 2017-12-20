<!-- <script>

var myPix = [
  "images/1-500.jpg",
  "images/2-500.jpg",
  "images/3-500.jpg",
];

var randomNum = myPix[Math.floor(Math.random()*myPix.length)];

document.body.innerHTML = myPix;
</script> -->



<!-- <script>
  var studioImage = new Array();
    studioImage[0] = "To be or not to be";
    studioImage[1] = "The only thing we have to fear is fear itself";
    studioImage[2] = "Give me liberty or give me death";

$(document).ready(function(){
  var myRandom = Math.floor(Math.random()*studioImage.length);
  $('.studioImage').html(studioImage[myRandom]);

</script> -->
<!-- /* another one */ -->
<!-- <script>
$(document).ready(function(){
   var myRandom = Math.floor(Math.random() * $(".quote").length); 
   $(".quote:eq(" + myRandom + ")").show();
});
</script> -->
<!--     // <a href="http://testpage.com/">
 -->
<!-- <script>
/* another one */
        // var phrases = [
        //     'This is the first one',
        //     'This is the second one',
        //     'This is the third one'
        // ];
    
        // var scripts = document.getElementsByTagName('script');
        // var this_script = scripts[scripts.length - 1];
        // this_script.parentNode.replaceChild(document.createTextNode(phrases[Math.floor(Math.random()*phrases.length)]), this_script);
    </script> -->



    <!-- this one works -->
<!-- <script>
  var myPix = new Array("images/1-500.jpg", "images/2-500.jpg", "images/3-500.jpg");

$(document).ready(function() {
     var randomNum = Math.floor(Math.random()*myPix.length);
     document.getElementById("aPicture").src = myPix[randomNum]
   });
</script> -->
<!-- <script>
  /* create an array so random images from the studio show up */
  var myPix = new Array("images/1-500.jpg", "images/2-500.jpg", "images/3-500.jpg");

$(document).ready(function() {
     var randomNum = Math.floor(Math.random()*myPix.length);
     document.getElementById("product-grid").getElementsByClassName("studio")[0, 1].src = myPix[randomNum]
   });
</script> https://stackoverflow.com/questions/7686592/apply-a-random-class-to-every-element-specified -->

<!-- <script>
$(document).ready(function(){
    var myPix = ["images/1-500.jpg", "images/2-500.jpg", "images/3-500.jpg"];

    $(".studio").each(function(){
        $(this).src(myPix[~~(Math.random()*myPix.length)] );
    });
});
</script> -->

<!-- <script>
$(document).ready(function(){
    var myPix = ["images/1-500.jpg", "images/2-500.jpg", "images/3-500.jpg"];

    $(".studio").each(function(){
        $(this).src(myPix.splice(~~(Math.random()*myPix.length), 1 )[0] );
    });
});
</script> -->
  <!--  document.getElementsByClassName("product-card studio").forEach().src = myPix[randomNum]
[].slice.call(document.getElementsByClassName('foobar')).for‌​Each()
[].forEach.call
var showMenu = document.getElementsByClassName('showMenu')
...

for(var i = 0, j = showMenu.length; i < j; i++)
{
    showMenu[i].addEventListener( clickevent, function( ev ) {
        ev.stopPropagation();
        ev.preventDefault();
        docscroll = scrollY();
        // change top of contentWrapper
        contentWrapper.style.top = docscroll * -1 + 'px';
        // mac chrome issue:
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        // add modalview class
        classie.add( perspectiveWrapper, 'modalview' );
        // animate..
        setTimeout( function() { classie.add( perspectiveWrapper, 'animate' ); }, 25 );
    });} -->

<!-- <script>
  // this works but isn't applied to the class so just a new image shows up
  var myPix = new Array();
    myPix[0] = "1-500.jpg";
    myPix[1] = "2-500.jpg";
    myPix[2] = "3-500.jpg";
    myPix[3] = "4-500.jpg";
    myPix[4] = "5-500.jpg";
    myPix[5] = "6-500.jpg";
    myPix[6] = "7-500.jpg";


getRandomImage(myPix, "");
// getRandomImage(myPix, "/images/");

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}
  </script> -->
<script>
var myPix = new Array();
    myPix[0] = "5-500.jpg";
    myPix[1] = "images/6-500.jpg";
    myPix[2] = "images/7-500.jpg";
    myPix[3] = "images/8-500.jpg";
    myPix[4] = "images/11-500.jpg";
    myPix[5] = "images/9-500.jpg";

$(document).ready(show);
function show(){
    $('img').attr('src', myPix[0]).parent().hide();
    var max = myPix.length;
    $(".studio-pix").hover(
        function(){ $(this).find(".studio").fadeIn(); },
        
        function(){ 
            var img = $(this).find(".studio").find('img');
            var i = Math.floor(Math.random()*max);
            $(this).find(".studio").fadeOut(function(){
                img.attr('src', myPix[i]);
            }); 
        }
    );        
}

</script>
