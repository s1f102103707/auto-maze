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

  const [human, setHuman] = useState({
    x: 0,
    y: 0,
    forward: [1, 0],
  });

  const onClick = () => {
    const newMaze = JSON.parse(JSON.stringify(initialMaze));
    // newMaze.map((row: number[], y: number) => {
    //   row.map((color: number, x: number) => {
    for (let x = 0; x < maze.length; x++) {
      for (let y = 0; y < maze[x].length; y++) {
        if (newMaze[y][x] === 1) {
          const randomDirectionIndex = Math.floor(Math.random() * directions.length);
          const [dx, dy] = directions[randomDirectionIndex];
          const newX = x + dx;
          const newY = y + dy;
          newMaze[newY][newX] = 2;
        }
      }
    }
    setMaze(newMaze);
    const updatedMaze = JSON.parse(JSON.stringify(newMaze));
    updatedMaze.map((row: number[], y: number) => {
      row.map((color: number, x: number) => {
        if (color === 2) {
          updatedMaze[y][x] = 1;
        }
      });
    });
    setMaze(updatedMaze);
    console.log('map');
    console.table(updatedMaze);
  };
  const onClickSearch = () => {
    const { x, y, forward } = human;
    const [dx, dy] = forward;
    const newX = x + dx;
    const newY = y + dy;
    let Forward = [0, 0];
    if (dx === 1) {
      Forward = [dy, dx];
    } else if (dy === -1) {
      Forward = [-dy, dx];
    } else if (dx === -1) {
      Forward = [dy, dx];
    } else {
      Forward = [-dy, dx];
    }
    setHuman({ x: newX, y: newY, forward: Forward });
    console.log(human);
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
