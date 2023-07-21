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
    [1, 0], // 下
    [0, -1], // 左
    [0, 1], // 右
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
            newMaze[newY][newX] = 1;
          }
        }
      });
    });
    setMaze(newMaze);
  };
  return (
    <div className={styles.container}>
      <div className={styles.generate} onClick={() => onClick()}>
        生成
      </div>
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
