const viewer = document.querySelector('#chair');
const status = document.querySelector('#load-status');
const rotate = document.querySelector('#rotate');
const controls = [...document.querySelectorAll('.toolbar button')];
const views = [...document.querySelectorAll('[data-view]')];
controls.forEach(button => { button.disabled = true; });

function stopRotation() {
  viewer.autoRotate = false;
  rotate.setAttribute('aria-pressed', 'false');
  rotate.innerHTML = '<span aria-hidden="true">↻</span> Otáčet';
}
viewer.addEventListener('load', () => {
  status.textContent = 'Připraveno k prohlížení';
  controls.forEach(button => { button.disabled = false; });
  document.querySelector('#error').hidden = true;
});
viewer.addEventListener('error', () => {
  status.textContent = 'K dispozici je render';
  document.querySelector('#error').hidden = false;
  controls.forEach(button => { button.disabled = true; });
  stopRotation();
});
views.forEach(button => {
  button.addEventListener('click', () => {
    stopRotation();
    viewer.resetTurntableRotation(0);
    viewer.cameraOrbit = button.dataset.view;
    viewer.cameraTarget = '0m 0.53m 0m';
    views.forEach(view => view.setAttribute('aria-pressed', String(view === button)));
  });
});
rotate.addEventListener('click', () => {
  const active = rotate.getAttribute('aria-pressed') !== 'true';
  viewer.autoRotate = active;
  rotate.setAttribute('aria-pressed', String(active));
  rotate.innerHTML = active
    ? '<span aria-hidden="true">Ⅱ</span> Zastavit'
    : '<span aria-hidden="true">↻</span> Otáčet';
  if (active) views.forEach(view => view.setAttribute('aria-pressed', 'false'));
});
viewer.addEventListener('camera-change', event => {
  if (event.detail.source === 'user-interaction') {
    stopRotation();
    views.forEach(view => view.setAttribute('aria-pressed', 'false'));
  }
});
