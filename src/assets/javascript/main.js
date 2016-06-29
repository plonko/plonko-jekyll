'use strict';

console.log('Hello world!');

var waypoint = new Waypoint({
    element: document.getElementById('js-waypoint-nav-trigger'),
    handler: function() {
        this.element.classList.toggle('fixed');
    },
    offset: 133
})