

const color = document.getElementById('colorPicker');
const rows = document.getElementById('inputHeight');
const cells = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');

form.addEventListener  ('submit', function (event){
  pixelCanvas.innerHTML = '';
  event.preventDefault();
  makeGrid();
});

pixelCanvas.addEventListener('click', function (event){
  if (event.target.nodeName === 'TD') {
      event.target.style.backgroundColor = colorPicker.value;
  }
})
function makeGrid() {
  for (let i = 0; i < rows.value; i++) {
    const row = pixelCanvas.insertRow(0);
    for (j = 0; j < cells.value; j++ ) {
      row.insertCell (0);
    }
  }

}
