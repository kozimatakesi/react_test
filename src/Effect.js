import React, { useState, useEffect } from 'react';

export const Effect: React.FC = (props) => {
  const [count, setCount] = useState(0);
  // 定数countと関数setCountを定義している useStateの引数は定数の初期値
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <h2>{props.name}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}