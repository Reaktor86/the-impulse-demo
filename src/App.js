import React, {useEffect} from "react";
import style from './App.module.scss';
import Stat from "./components/Stat/Stat";
import Cell from "./components/Cell/Cell";

const map01 = [
    [23, 0, 0, 0, 0, 0, 0, 21, 0, 0],
    [0, 63, 12, 0, 0, 0, 0, 14, 0, 0],
    [0, 0, 0, 21, 0, 11, 0, 0, 0, 31],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 31, 14, 24, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 41, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 34, 0, 0, 0, 0, 0],
    [0, 54, 0, 0, 0, 0, 0, 34, 0, 0],
    [43, 0, 0, 0, 0, 0, 0, 0, 0, 41],
];

function App() {

  return (
      <div className="App">

          <header>
              <h1>The Impulse Demo</h1>
          </header>

          <main className={style.main}>

              <div className={style.sidebar}>
                  <p><b>Цель игры:</b><br/>добраться до квадрата со знаком "К"</p>
                  <p><b>Управление:</b></p>
                  <p>"A" - указатель влево</p>
                  <p>"D" - указатель вправо</p>
                  <p>"пробел" - пуск</p><br/>
                  <Stat />
              </div>

              <div className={style.game}>
                  <div className={style.field}>

                      {
                          map01.map((item, index) => {
                              return item.map((val, id) => {
                                  return <Cell key={index + id} type={val} />
                              })
                          })
                      }

                  </div>
                  <div className={style.controls}>
                      <button className={style.btnTurnLeft}>&#9668;</button>
                      <button className={style.btnTurnRight}>&#9658;</button>
                      <button className={style.btnPlay}><b>ПУСК</b></button>
                  </div>
              </div>
          </main>

          <footer className={style.footer}>
              <p>Данное демо сделано на коленке для демонстрации базовой механики.<br/>
                  Чтобы скачать концепт игры, переходите по <a href="https://disk.yandex.ru/i/em8Gm7TdZs5R-w">ссылке</a><br/>Reaktor, 2021</p>
          </footer>

      </div>
  );
}

export default App;