import React, { useState, useEffect } from 'react';
const fetch = require('node-fetch');

export const Effect: React.FC = (props) => {
  const [myApi, setMyApi] = useState([]);
  const [tenki, setTenki] = useState('weather');
  const [isOpen, setIsOpen] = useState(false);
  const [expName, setExpName] = useState("ゼンディカー");
  // 定数countと関数setCountを定義している useStateの引数は定数の初期値
  useEffect(() => {
    const weather = async () => {
      const res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=5b2fdd75985558d39c733be221fd15c7&lang=ja&units=metric")
        .then(res => res.json());

      //const results = await res.json();
      const html = await fetch(`http://localhost:3001/api/v1/list?name=${expName}`)
        .then(html => html.json());
      console.log(html);
      setMyApi(html);
      setTenki(res);
      console.log("取得したね")
    }
    weather();
  },[]);

  const handleClickOpen = () => {
    setIsOpen(true);
  }

  const handleClickClose = () => {
    setIsOpen(false);
  }

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setExpName(inputValue);
  }

  let weather;
  if(isOpen) {
    weather = (
    <div>
      {myApi.map((nameValue, i) => {
        return (
          <p key={i}>{nameValue.name}は{nameValue.value}</p>
        );
      })}

      <p>現在の{tenki.name}は{tenki.weather[0].description}はです</p>
      <button onClick={() => handleClickClose()}>
        閉じる
      </button>
    </div>
    )
  }

  return (
    <div>
      <input
        value={expName}
        onChange={(event) => handleInputChange(event)}
      />
      <button onClick={() => setExpName(expName) }>
        変えよう
      </button>

      <h2>{props.name}</h2>
      <button onClick={() => handleClickOpen()}>
        現在の天気を表示
      </button>
      {weather}
    </div>
  );
}