import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import '@oicl/openbridge-webcomponents/src/palettes/variables.css';
import '@oicl/openbridge-webcomponents/dist/components/top-bar/top-bar.js';
import '@oicl/openbridge-webcomponents/dist/components/brilliance-menu/brilliance-menu.js';

const htmlElement = document.documentElement;

setupCounter(document.querySelector('#counter'));

const topbar = document.querySelector('#top-bar');
topbar.leftMoreButtonActivated = true;

const brillianceMenu = document.querySelector('obc-brilliance-menu');
//brillianceMenu.showAutoBrightness = false;
brillianceMenu.showAutoPalette = false;
brillianceMenu.hideBrightness = true;
brillianceMenu.brightness = 50;
brillianceMenu.palette = 'bright';
brillianceMenu.style.display = 'none';

function updateTime() {
  const now = new Date();
  const formattedTime = now.toISOString();
  topbar.date = formattedTime;
}

updateTime();
setInterval(updateTime, 1000);

topbar.addEventListener('menu-button-clicked', () => {
  alert('Menu button clicked!');
});

topbar.addEventListener('dimming-button-clicked', () => {
  //alert('Dimming button clicked!');
  brillianceMenu.style.display = brillianceMenu.style.display == 'none' ? 'block' : 'none';
});

topbar.addEventListener('apps-button-clicked', () => {
  alert('Apps button clicked!');
});

topbar.addEventListener('left-more-button-clicked', () => {
  alert('Left-more button clicked!');
});

brillianceMenu.addEventListener('palette-changed', (event) => {
  const palette = brillianceMenu.palette;
  htmlElement.setAttribute('data-obc-theme', palette);
});