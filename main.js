import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    //center: [-11311680.41959755,2404378.953963324],
    //zoom: 19
    center:[0,0],
    zoom: 2
  })
});
