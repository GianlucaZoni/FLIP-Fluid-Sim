import './style.css'

import { pourFluid} from './fluid.js'
import { scene } from './scene.js'

document.querySelector('#app').innerHTML = `
  <div>
    <input type="checkbox" id="showParticles" checked>Particles &nbsp; 
    <input type="checkbox" id="showGrid">Grid &nbsp;
    <input type="checkbox" id="compensateDrift" checked>Compensate Drift &nbsp;
    <input type="checkbox" id="separateParticles" checked>Separate Particles &nbsp;
    PIC
    <input type="range" id="flipRatio" min="0" max="10" value="9" class="slider"> FLIP 
    <br>
    <canvas id="myCanvas" style="border:2px solid"></canvas>
  </div>
`

document.getElementById('showParticles').addEventListener('click', () => {
  scene.showParticles = !scene.showParticles;
});

document.getElementById('showGrid').addEventListener('click', () => {
  scene.showGrid = !scene.showGrid;
});

document.getElementById('compensateDrift').addEventListener('click', () => {
  scene.compensateDrift = !scene.compensateDrift;
});

document.getElementById('separateParticles').addEventListener('click', () => {
  scene.separateParticles = !scene.separateParticles;
});

document.getElementById('flipRatio').addEventListener('input', (event) => {
  scene.flipRatio = 0.1 * event.target.value;
});

pourFluid(document.querySelector<HTMLCanvasElement>('#myCanvas'))
