const gameBoard = (() => 
    const rows = 3;
    const columns = 3;
    const board = [];
    const getBoard = function() {
        return board;
    };
    const setCell =  function(row, col, value) {
        board[row][col] = value;
    };
    const clearBoard = function() {
        board = [];
    }
    const initBoard: function(size) {
        for (var i = 0; i < size; i++) {
            board[i] = [];
            for (var j = 0; j < size; j++) {
                board[i][j] = null;
            }
        }
    }
    return {rows, columns, setCell, clearBoard, getBoard, initBoard};
)