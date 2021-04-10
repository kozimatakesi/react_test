import React, { useState, useEffect } from 'react';
const fetch = require('node-fetch');

export const Effect: React.FC = (props) => {
  const [tenki, setTenki] = useState('weather');
  const [isOpen, setIsOpen] = useState(false);
  // 定数countと関数setCountを定義している useStateの引数は定数の初期値
  useEffect(() => {
    const weather = async () => {
      const res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=9a4d371b6fc452d3edd2f79b142c8c18&lang=ja&units=metric")
        .then(res => res.json());

      //const results = await res.json();
      setTenki(res);
    }
    weather();
  });

  const handleClickOpen = () => {
    setIsOpen(true);
  }

  const handleClickClose = () => {
    setIsOpen(false);
  }

  let weather;
  if(isOpen) {
    weather = (
    <div>
      <p>現在の{tenki.name}は{tenki.weather[0].description}はです</p>
      <button onClick={() => handleClickClose()}>
        閉じる
      </button>
    </div>
    )
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={() => handleClickOpen()}>
        現在の天気を表示
      </button>
      {weather}
    </div>
  );
}