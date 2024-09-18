let game = {
    board: [],
    moves: 0,
    winner: null,
  
    init: function() {
      for (let i = 0; i < 9; i++) {
        this.board.push({ value: '', id: `cell-${i + 1}` });
      }
    },
  
    checkWinner: function() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        const cell1 = this.board[combination[0]].value;
        const cell2 = this.board[combination[1]].value;
        const cell3 = this.board[combination[2]].value;
  
        if (cell1 === cell2 && cell2 === cell3 && cell1 !== '') {
          this.winner = cell1;
          this.highlightWinner(combination);
          alert(`Player ${this.winner} wins!`);
          return;
        }
      }
  
      if (this.moves === 9) {
        alert('It\'s a draw!');
      }
    },
  
    highlightWinner: function(combination) {
      for (let i = 0; i < combination.length; i++) {
        const cellId = `cell-${combination[i] + 1}`;
        const cellElement = document.getElementById(cellId);
        if (this.winner === 'X') {
          cellElement.classList.add('winner-x');
        } else {
          cellElement.classList.add('winner-o');
        }
      }
    },
  
    reset: function() {
        this.board.forEach(cell => {
          cell.value = '';
          document.getElementById(cell.id).classList.remove('winner-x', 'winner-o');
          document.getElementById(cell.id).textContent = ''; 
        });
        this.moves = 0;
        this.winner = null;
      }
  };
  
  game.init();
  
  document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.col-md-4');
    cells.forEach(cell => {
      cell.addEventListener('click', function() {
        const cellId = cell.id;
        const cellIndex = parseInt(cellId.replace('cell-', '')) - 1;
        if (game.board[cellIndex].value === '') {
          game.board[cellIndex].value = game.moves % 2 === 0 ? 'O' : 'X';
          cell.textContent = game.board[cellIndex].value; 
          game.checkWinner();
        }
      });
    });
  
    document.getElementById('reset-btn').addEventListener('click', function() {
      game.reset();
    });
  });