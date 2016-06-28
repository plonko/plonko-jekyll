'use strict';

console.log('Hello world!');

var waypoint = new Waypoint({
    element: document.getElementById('js-waypoint-nav-trigger'),
    handler: function() {
        console.log(this.element.id + ' triggers at ' + this.triggerPoint);
        this.element.classList.toggle('fixed');
    }
})