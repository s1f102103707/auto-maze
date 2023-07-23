import { useState } from 'react';
import styles from './index.module.css';
const Home = () => {
  const blankMaze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const initialMaze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const [maze, setMaze] = useState(blankMaze);
  const directions = [
    [-1, 0], // 上
    [0, 1], // 右
    [1, 0], // 下
    [0, -1], // 左
  ];

  const [human, setHuman] = useState();

  const onClick = () => {
    const newMaze = JSON.parse(JSON.stringify(initialMaze));
    newMaze.map((row: number[], y: number) => {
      row.map((color: number, x: number) => {
        if (color === 1) {
          const randomDirectionIndex = Math.floor(Math.random() * directions.length);
          const [dx, dy] = directions[randomDirectionIndex];
          const newX = x + dx;
          const newY = y + dy;
          if (
            newX >= 0 &&
            newX < newMaze[0].length &&
            newY >= 0 &&
            newY < newMaze.length &&
            newMaze[newY][newX] === 0
          ) {
            newMaze[newY][newX] = 2;
          }
        }
      });
    });
    setMaze(newMaze);
    newMaze.map((row: number[], y: number) => {
      row.map((color: number, x: number) => {
        if (color === 2) {
          newMaze[y][x] = 1;
        }
      });
    });
    setMaze(newMaze);
  };
  const onClickSearch = () => {
    //壁が左になかった、
    // const { x: number, y: number, front } = human;
    // const [dx, dy] = front;
  };
  return (
    <div className={styles.container}>
      <button className={styles.generate} onClick={() => onClick()}>
        生成
      </button>
      <button className={styles.search} onClick={() => onClickSearch()}>
        探索
      </button>
      <div className={styles.board} style={{ backgroundColor: '#000' }}>
        {maze.map((row, y) => (
          <div key={y} className={styles.row}>
            {row.map((color, x) => (
              <div
                key={`${y}-${x}`}
                className={styles.cell}
                style={{ backgroundColor: color === 0 ? '#fff' : '#000' }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
