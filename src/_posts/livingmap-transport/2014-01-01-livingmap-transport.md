---
layout: post
date: 2014-01-01
title:  Living Map transport
categories: projects
---

For our <a href="livingmap.com/london/" target="_blank">Living Map London map</a>, we wanted to give the pedestrian user some quick and easy transport information. TFL now provide many open feeds, but in a variety of formats and with limited hit rates. We decided to ingest the various TFL feeds and provide our own API which our map users could hit as many times as they wanted. I built the cycle hire, bus Countdown, and tube line and station status APIs in Node.
<br>
<br>
Made with: <a href="https://nodejs.org/">Node.js</a>, <a href="http://leafletjs.com/">Leaflet.js</a>, <a href="http://www.tfl.gov.uk/info-for/open-data-users/our-feeds">TFL feeds</a>.