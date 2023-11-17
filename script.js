const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let popup = document.getElementById("popup");
let winnerText = document.getElementById("winner");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "") {
      cell.textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    if (
      cells[combo[0]].textContent === currentPlayer &&
      cells[combo[1]].textContent === currentPlayer &&
      cells[combo[2]].textContent === currentPlayer
    ) {
      // alert(`${currentPlayer} wins!`);

      resetBoard();
      return showPopup(currentPlayer);
    }
  }

  if (Array.from(cells).every((cell) => cell.textContent !== "")) {
    // alert("Tie game!");
    resetBoard();
    return showPopup("Niemand");
  }
}

function resetBoard() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  popup.style.display = "none";
  currentPlayer;
}
function showPopup(player) {
  popup.style.display = "flex";
  winnerText.textContent = player + ` gewinnt!`;
}
