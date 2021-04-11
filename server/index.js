const express = require('express');
const puppetter = require('puppeteer');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))

app.get('/api/v1/list', async (req, res) => {
  /*
  const todoList = [
    { title: 'JavaScriptを勉強する', done: true },
    { title: 'Node.jsを勉強する', done: false },
    { title: 'Web APIを作る', done: false }
  ];
  res.json(todoList);
  */

  console.log(req.query.name);

  const browser = await puppetter.launch({
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('https://www.hareruyamtg.com/ja/products/search');
  const datas = await page.evaluate(() => {
    const list = [...document.querySelectorAll('#front_product_search_cardset option')];
    return list.map((data) => ({ name: data.textContent, value: data.value }));
  });
  const nameArray = datas.filter((data) => data.name.match(req.query.name));
  browser.close();
  res.json(nameArray);
});

app.listen(3001, () => console.log('Listening on port 3001'));