import React, { useState, useEffect } from 'react';
const fetch = require('node-fetch');

export const Effect: React.FC = (props) => {
  const [myApi, setMyApi] = useState([]);
  const [read, setRead] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [expName, setExpName] = useState("ゼンディカー");
  const [count, setCount] = useState(0);
  // 定数countと関数setCountを定義している useStateの引数は定数の初期値
  useEffect(() => {
    setRead(false);
    const searchName = async () => {
      const html = await fetch(`http://localhost:3001/api/v1/list?name=${expName}`)
        .then(html => html.json());
      console.log(html);
      setMyApi(html);
      console.log("取得したね")
      setRead(true);
    }
    searchName();
  },[count]);

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

  let nameResultDetail;
  if(isOpen) {
    nameResultDetail = (
    <div>
      {myApi.map((nameValue, i) => {
        return (
          <p key={i}>{nameValue.name}は{nameValue.value}</p>
        );
      })}

      <button onClick={() => handleClickClose()}>
        閉じる
      </button>
    </div>
    )
  }

  let nameResult;
  if(read) {
    nameResult = (
      <div>
        <button onClick={() => handleClickOpen()}>
          検索結果を表示
        </button>
        {nameResultDetail}
      </div>
    )
  }

  return (
    <div>
      <input
        value={expName}
        onChange={(event) => handleInputChange(event)}
      />
      <button onClick={() => setCount(count + 1) }>
        検索
      </button>

      <h2>{props.name}</h2>
      {nameResult}
    </div>
  );
}