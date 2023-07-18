import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [maze, setMaze] = useState([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]);

  const directions = [
    [-1, 0], // 上
    [1, 0], // 下
    [0, -1], // 左
    [0, 1], // 右
  ];

  const newMaze = JSON.parse(JSON.stringify(maze));

  const onClick = (x, y) => {
    const randomDirectionIndex = Math.floor(Math.random() * directions.length); // ランダムにdirectionsのインデックスを選択
    const [dx, dy] = directions[randomDirectionIndex]; // 選択された方向の変位を取得
    const newX = x + dx; // 新しいx座標
    const newY = y + dy; // 新しいy座標

    if (newX >= 0 && newX < maze[0].length && newY >= 0 && newY < maze.length) {
      newMaze[newY][newX] = 1; // 指定された座標の0を1に変更
      setMaze(newMaze); // 変更したmazeを反映
    }
  };

  return (
    <div className={styles.board} style={{ backgroundColor: '#000' }}>
      {maze.map((row, y) => (
        <div key={y} className={styles.row}>
          {row.map((color, x) => (
            <div
              key={`${y}-${x}`}
              className={styles.cell}
              style={{ backgroundColor: color === 0 ? '#fff' : '#000' }}
              onClick={() => onClick(x, y)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;
