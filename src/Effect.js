import React, { useState, useEffect } from 'react';
const fetch = require('node-fetch');

export const Effect: React.FC = (props) => {
  const [myApi, setMyApi] = useState([]);
  const [read, setRead] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [expName, setExpName] = useState("ゼンディカー");
  const [count, setCount] = useState(0);
  //副作用フックス countが変更された場合に実行
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

  //クリックした時に表示
  const handleClickOpen = () => {
    setIsOpen(true);
  }

  //クリックした時に非表示
  const handleClickClose = () => {
    setIsOpen(false);
  }

  //inputに入れた文字列をstateにいれる
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setExpName(inputValue);
  }

  //検索結果詳細の表示
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

  //APIの返答があったらボタンを表示する
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
      {nameResult}
    </div>
  );
}