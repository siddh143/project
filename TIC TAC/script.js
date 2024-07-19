let currentPlayer = 'X';
let gameActive = true;
const gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const board = document.getElementById('board');
const message = document.getElementById('message');

function checkWin() {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }
  if (gameState.includes('')) return null;
  return 'Draw';
}

function handleCellClick(cell, index) {
  if (!gameActive || gameState[index] !== '') return;

  gameState[index] = currentPlayer;
  cell.innerText = currentPlayer;

  const winner = checkWin();
  if (winner) {
    gameActive = false;
    message.innerText = winner === 'Draw' ? "It's a draw!" : `${winner} wins!`;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.innerText = `${currentPlayer}'s turn`;
  }
}

function cellClicked(index) {
  const cell = board.children[index];
  handleCellClick(cell, index);
}

function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState.fill('');
  message.innerText = "X's turn";
  board.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
