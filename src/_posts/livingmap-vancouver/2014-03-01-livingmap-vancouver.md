---
layout: post
date: 2014-02-03
title:  Living Map Vancouver
categories: projects
---

At Living Map we created a branded map just for <a href="http://www.downtownvancouver.net/" target="_blank">Downtown Vancouver</a>. Designers and GIS developers took the city data and created map tiles specific to each zoom level. I created Javascript to display the map and load business information in popups, with a separate look on mobile, and the location finder. I also wrote Bash scripts to deploy the latest code to AWS with Git, configured the Nginx server and kept the Node server process running with PM2. The code compilation, concatenation and minification was done with Gulp.
<br>
<br>
Made with: <a href="https://nodejs.org/">Node.js</a>, <a href="http://leafletjs.com/">Leaflet.js</a>, <a href="http://jade-lang.com/">Jade</a>, <a href="http://gulpjs.com/">Gulp</a>, <a href="http://nginx.com/">Nginx</a>, <a href="https://github.com/Unitech/pm2">PM2</a>.