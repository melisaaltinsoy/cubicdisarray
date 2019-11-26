import React from 'react'
import ReactDOM from 'react-dom'

const NUM_COLS = 9

function App() {
  const inputArray = Array(NUM_COLS).fill(0)

  // const mapFn = (n, i) => (console.log(n , i), i)
  // const mapFn = (n, i) => {
  //   console.log(n , i)
  //   return i
  // }

  const grid = inputArray.map((n, j) =>
    inputArray.map((n, i) => {
      const x = 184 + j * 60
      const y = 184 + i * 60 + Math.random() * 10
      const width = 60
      const height = 60
      return { x, y, width, height }
    })
  )

  console.log({ inputArray, grid })
  // [0, 1, 2..., 9]

  return (
    <svg width={900} height={900} fill="black">
      <rect x={0} y={0} width={900} height={900} fill="black" />
      {grid.map((column, j) =>
        column.map(({ x, y, width, height }, i) => (
          <rect
            transform={`rotate(${(Math.random() - 0.5) * i * 4},${x},${y})`}
            key={`${i}-${j}`}
            x={x}
            y={y}
            width={width - 2}
            height={height - 2}
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
        ))
      )}
    </svg>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
