import { use, useEffect, useState } from "react";

function Square({ click, value }) {
  return (
    <>
      <button
        onClick={click}
        className="flex-1 border h-36 text-4xl font-bold cursor-pointer"
      >
        {value}
      </button>
    </>
  );
}

export default function TicTacToe() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  console.log(boxes);

  function handleClick(currentBox) {
    const copyBoxes = [...boxes];
    if (boxes[currentBox] || winner) {
      return;
    }
    copyBoxes[currentBox] = isXTurn ? "X" : "O";
    setBoxes(copyBoxes);
    setIsXTurn(!isXTurn);
  }

  function restart() {
    setWinner(null);
    setBoxes(boxes.fill(null));
    setIsXTurn(true);
  }

  function checkWiner() {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let pattern of winningPattern) {
      const [a, b, c] = pattern;

      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a]; // return "X" or "O"
      }
    }

    return null;
  }

  useEffect(() => {
    const result = checkWiner();
    if (result) setWinner(result);
  }, [boxes]);
  return (
    <>
      <div className="max-w-4xl bg-gray-100 rounded-2xl m-auto p-12">
        <h2 className="text-4xl font-bold text-center mb-6">TIC TAC TOE</h2>
        <div className="flex">
          <Square click={() => handleClick(0)} value={boxes[0]} />
          <Square click={() => handleClick(1)} value={boxes[1]} />
          <Square click={() => handleClick(2)} value={boxes[2]} />
        </div>
        <div className="flex">
          <Square click={() => handleClick(3)} value={boxes[3]} />
          <Square click={() => handleClick(4)} value={boxes[4]} />
          <Square click={() => handleClick(5)} value={boxes[5]} />
        </div>
        <div className="flex">
          <Square click={() => handleClick(6)} value={boxes[6]} />
          <Square click={() => handleClick(7)} value={boxes[7]} />
          <Square click={() => handleClick(8)} value={boxes[8]} />
        </div>
        {winner ? (
          <div className="mt-6 font-bold text-2xl">
            Winner is {winner}. Restart the game{" "}
          </div>
        ) : boxes.every((item) => item !== null) ? (
          <div className="mt-6 font-bold text-2xl text-center">Match Draw!</div>
        ) : (
          ""
        )}
        {(winner || boxes.every((item) => item !== null)) && (
          <button
            onClick={restart}
            className=" mt-6  cursor-pointer rounded bg-blue-600 py-3 px-6 text-white text-lg"
          >
            Restart
          </button>
        )}
      </div>
    </>
  );
}
