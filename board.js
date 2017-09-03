let Board = function (height, width, color, canvasTable) {
    this.height = height;
    this.width = width;
    this.color = color;
    this.canvasTable = canvasTable;
};

/**
 * When the Board object is instanciate then we create/print the board
 */
Board.prototype.createRowColumns = function(){
    for(let row = 0; row<this.height; row++){
        let tableRow = this.canvasTable.insertRow(0);
        for(let column = 0; column<this.width; column++){
            tableRow.insertCell();
        }
    }
};


/**
 * Cleaning everything :)
 */
Board.prototype.reset = function () {
    while(this.canvasTable.rows.length > 0){
        this.canvasTable.deleteRow(0);
    }
};


/**
 * Function responsible to paint a specific clicked cell
 */
Board.prototype.paintCell = function () {
    for(let row = 0; row< this.height; row++){
        for(let column = 0; column < this.width; column++){
            this._changeColorEvent(row, column);
        }
    }
};


/**
 * It is a private function that puts a click event listener over the cell
 * @param row
 * @param column
 * @private
 */
Board.prototype._changeColorEvent = function (row, column) {
    let color = this.color; //that is necessary to we dont loose the color of the Board object
    this.canvasTable.rows[row].cells[column].onclick = function () {
        this.style.background = color;
    }
};

