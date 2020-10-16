var mapnik = require('mapnik');
var fs = require('fs');

mapnik.register_default_input_plugins();
var map = new mapnik.Map(600, 600);
map.loadSync("data/countries-stylesheet.xml");
map.zoomAll();
map.renderFileSync("districts.png");
console.log('saved map');
