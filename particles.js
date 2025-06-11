import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.18/+esm';

const defaultLogo = 'assets/default-logo.svg';
const containerId = 'tsparticles';
let currentPreset = 'fire';

const presets = {
  fire: {
    particles: {
      number: { value: 150 },
      color: { value: ['#ff4500', '#ff6347', '#ffd700'] },
      shape: { type: 'circle' },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 2,
        direction: 'top',
        gravity: { enable: true, acceleration: -0.5 }
      },
      opacity: {
        value: 0.8,
        animation: { enable: true, speed: 1, minimumValue: 0 }
      }
    }
  },
  explosion: {
    particles: {
      number: { value: 300 },
      color: { value: '#ffffff' },
      move: {
        enable: true,
        speed: 8,
        direction: 'none',
        outModes: 'out'
      },
      life: {
        duration: { value: 2 },
        count: 1
      }
    }
  },
  magic: {
    particles: {
      number: { value: 200 },
      color: { value: ['#d0a4ff', '#ffffff'] },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        trail: { enable: false }
      },
      opacity: {
        value: 0.9,
        animation: { enable: true, speed: 0.5, minimumValue: 0.3 }
      }
    }
  },
  smoke: {
    particles: {
      number: { value: 100 },
      color: { value: '#bbbbbb' },
      move: {
        enable: true,
        speed: 1,
        direction: 'top',
        gravity: { enable: false }
      },
      opacity: {
        value: 0.5,
        animation: { enable: true, speed: 0.2, minimumValue: 0.1 }
      },
      size: {
        value: 5,
        random: { enable: true, minimumValue: 2 }
      }
    }
  }
};

async function loadParticles(logoUrl, options) {
  await tsParticles.load(containerId, {
    preset: currentPreset,
    url: logoUrl,
    fullScreen: { enable: true },
    particles: {
      number: { value: 200 },
      shape: { type: 'circle' },
      size: { value: 3 },
      move: { enable: true, speed: 2 }
    },
    polygon: {
      enable: true,
      type: 'inline',
      move: { radius: 10 },
      url: logoUrl,
      scale: 1,
      inline: { arrangement: 'equidistant' }
    },
    ...options
  });
}

async function init() {
  await loadParticles(defaultLogo, presets.fire);
  setupGui();
}

function setupGui() {
  const gui = new GUI({ container: document.getElementById('controls') });
  const params = {
    preset: currentPreset,
    particles: 150,
    speed: 2,
    size: 3,
    color: '#ff4500',
    direction: 'top',
    gravity: true,
    life: 5,
    opacity: 80
  };

  gui.add(params, 'preset', Object.keys(presets)).onChange(async (value) => {
    currentPreset = value;
    await loadParticles(defaultLogo, presets[value]);
  });
  gui.add(params, 'particles', 100, 5000, 50).onChange((value) => updateParticles('number.value', value));
  gui.add(params, 'speed', 0.1, 10, 0.1).onChange((value) => updateParticles('move.speed', value));
  gui.add(params, 'size', 1, 20).onChange((value) => updateParticles('size.value', value));
  gui.addColor(params, 'color').onChange((value) => updateParticles('color.value', value));
  gui.add(params, 'direction', ['none', 'top', 'bottom', 'left', 'right']).onChange((value) => updateParticles('move.direction', value));
  gui.add(params, 'gravity').onChange((value) => updateParticles('move.gravity.enable', value));
  gui.add(params, 'life', 1, 10).onChange((value) => updateParticles('life.duration.value', value));
  gui.add(params, 'opacity', 0, 100).onChange((value) => updateParticles('opacity.value', value / 100));
}

function updateParticles(path, value) {
  const container = tsParticles.domItem(0);
  if (!container) return;
  const keys = path.split('.');
  let obj = container.options;
  while (keys.length > 1) {
    const key = keys.shift();
    if (!obj[key]) obj[key] = {};
    obj = obj[key];
  }
  obj[keys[0]] = value;
  container.refresh();
}

function handleFile(file) {
  const reader = new FileReader();
  reader.onload = async (e) => {
    const url = e.target.result;
    await loadParticles(url, presets[currentPreset]);
  };
  reader.readAsDataURL(file);
}

const dropArea = document.getElementById('drop-area');
const input = document.getElementById('logo-input');
dropArea.addEventListener('click', () => input.click());
input.addEventListener('change', () => {
  if (input.files[0]) handleFile(input.files[0]);
});
['dragenter', 'dragover'].forEach(evt => {
  dropArea.addEventListener(evt, (e) => {
    e.preventDefault();
    dropArea.classList.add('dragover');
  });
});
['dragleave', 'drop'].forEach(evt => {
  dropArea.addEventListener(evt, (e) => {
    e.preventDefault();
    dropArea.classList.remove('dragover');
  });
});
dropArea.addEventListener('drop', (e) => {
  const file = e.dataTransfer.files[0];
  if (file) handleFile(file);
});

init();
