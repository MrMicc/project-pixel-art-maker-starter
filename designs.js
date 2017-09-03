const form = document.getElementById('sizePicker');

form.onsubmit = function (event) {
  event.preventDefault();
  makeGrid();
};

function makeGrid() {
    let board = new Board(
            document.getElementById('input_height').value,
            document.getElementById('input_width').value,
            document.getElementById('colorPicker').value,
            document.getElementById('pixel_canvas'));

    board.reset();
    board.createRowColumns();
    board.paintCell();

}
