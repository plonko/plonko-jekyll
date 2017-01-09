---
layout: post
date: 2014-02-01
title:  Downtown Vancouver
categories: projects
---

At Living Map we created a branded map just for <a href="http://www.downtownvancouver.net/">Downtown Vancouver</a>. Designers and  <abbr title="Geographic Information System">GIS</abbr> developers took the city data and created map tiles specific to each zoom level. I wrote Javascript to display the map and load business information in popups, with a separate design on mobile; and the location finder. I also wrote shell scripts to deploy the latest code to AWS with Git, configured the Nginx server and kept the Node process running with PM2.
<br>
<br>
Made with: <a href="https://nodejs.org/">Node.js</a>, <a href="http://leafletjs.com/">Leaflet.js</a>, <a href="http://jade-lang.com/">Jade</a>, <a href="http://gulpjs.com/">Gulp</a>, <a href="http://nginx.com/">Nginx</a>, <a href="https://github.com/Unitech/pm2">PM2</a>.
<br><br>
<a href="http://downtownvancouver.livingmap.com/">downtownvancouver.livingmap.com</a>