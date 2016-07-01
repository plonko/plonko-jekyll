'use strict';

console.log('Hello world!');

var waypoint = new Waypoint({
    element: document.getElementById('js-waypoint-nav-trigger'),
    handler: function() {
        this.element.classList.toggle('fixed');
    },
    offset: 133
});


// Loop over all thumbnails, add click, traverse up, swap src
// var thumbs = document.getElementsByClassName('post-thumbnail');

// for(var t=0; t<thumbs.length; t++) {
//     thumbs[t].onclick = function(e){
//         var postImage = this.parentNode.parentNode.querySelector('.post-image');
//         postImage.src = this.src;
//     }
// }


// Loop over galleries, delegate click, traverse down, swap src
var galleries = document.querySelectorAll('.post-gallery');

// for(var i=0; i<galleries.length; i++) {
//     galleries[i].addEventListener('click', function(e) {
//         if(e.target && e.target.className == 'post-thumbnail') {
//             var postImage = e.currentTarget.querySelector('.post-image');
//             postImage.src = e.target.src;
//         }
//         e.stopPropagation();
//     });
// }

for(var i=0; i<galleries.length; i++) {
    bindClicks(galleries[i]);
}


function bindClicks (elem) {
    elem.addEventListener('click', function(e) {
        if(e.target && e.target.className == 'post-thumbnail') {
            var postImage = e.currentTarget.querySelector('.post-image');
            postImage.src = e.target.src;
        }
        e.stopPropagation();
    });
};

var plonko = (function() {

    var id= 0;

    var init = function() {
      // Do some setup stuff
      console.log("init()");
    };

    var reset = function() {
        id = 0;
    }
    return {
        init: init
    };
})();

// var Gallery = function (elem) {
//     this.init
// };

// $('.post-gallery').each(function(){
//     var thumbs = $(this).find('thumbs');
// });

// $('.post-thumbnail').click(function(){
//     var mainImage = $(this).parent().find('.post-image');
//     mainImage.attr(src, this.src)
// });