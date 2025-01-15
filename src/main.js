import './style.css'

import { pourFluid } from './fluid.js'
import { scene } from './scene.js'

document.querySelector('#app').innerHTML = `

<canvas id="myCanvas"></canvas>

  <div class="controls">
    <div class="control">
      <input type="checkbox" id="showParticles" checked>
      <label for="showParticles">Particles</label>
    </div>
    <div class="control">
      <input type="checkbox" id="showGrid">
      <label for="showGrid">Grid</label>
    </div>
    <div class="control">
      <input type="checkbox" id="compensateDrift" checked>
      <label for="compensateDrift">Compensate Drift</label>
    </div>
    <div class="control">
      <input type="checkbox" id="separateParticles" checked>
      <label for="separateParticles">Separate Particles</label>
    </div>
    <div class="control">
      <input type="range" id="flipRatio" min="0" max="10" value="9" class="slider">
      <label for="flipRatio">PIC to FLIP Ratio</label>
    </div>
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