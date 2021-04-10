import React, { useState } from 'react';

export const State: React.FC = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("おぎやはぎ");
  // 定数countと関数setCountを定義している useStateの引数は定数の初期値

  return (
    <div>
      <p>You clicked {count} times</p>
      <h1>{name}</h1>
      <h2>{props.name}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}