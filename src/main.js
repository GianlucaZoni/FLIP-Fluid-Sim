import './style.css'

import { pourFluid} from './fluid.js'

document.querySelector('#app').innerHTML = `
  <div>
    <input type = "checkbox" checked  onclick = "scene.showParticles = !scene.showParticles">Particles &nbsp; 
	  <input type = "checkbox" onclick = "scene.showGrid = !scene.showGrid">Grid &nbsp;
	  <input type = "checkbox" checked onclick = "scene.compensateDrift = !scene.compensateDrift">Compensate Drift &nbsp;
	  <input type = "checkbox" checked onclick = "scene.separateParticles = !scene.separateParticles">Separate Particles &nbsp;
	  PIC
	  <input type = "range" min = "0" max = "10" value = "9" class = "slider" onchange="scene.flipRatio = 0.1 * this.value"> FLIP 
    <br>
	  <canvas id="myCanvas" style="border:2px solid"></canvas>
  </div>
`

pourFluid(document.querySelector<HTMLCanvasElement>('#myCanvas'))
