'use strict';

// console.log('Hello world!');

var plonko = {
    waypoints: {
        init: function () {
            return new Waypoint({
                element: document.getElementById('js-waypoint-nav-trigger'),
                handler: function() {
                    this.element.classList.toggle('fixed');
                },
                offset: 0
            });
        }
    },
    galleries: {
        settings: {
            galleryElems: document.querySelectorAll('.post-gallery')
        },
        init: function (){
            this._loopGalleries();
        },
        _loopGalleries: function () {
            var galleryElems = this.settings.galleryElems;
            for(var i=0; i<galleryElems.length; i++) {
                this._bindEvent(galleryElems[i]);
            }
        },
        _bindEvent: function (elem){
            elem.addEventListener('click', this._onClick);
        },
        _onClick: function (e) {
            if(e.target && e.target.className == 'post-thumbnail') {
                var postImage = e.currentTarget.querySelector('.post-image');
                postImage.src = e.target.src;
            }
            e.stopPropagation();
        }
    }
}

plonko.waypoints.init();
plonko.galleries.init();