import React from "react";
import classes from './App.module.scss';

function App() {
  return (
      <div className="App">

          <header>
              <h1>The Impulse Demo</h1>
          </header>

          <main className={classes.main}>

              <div className={classes.sidebar}>
                  <p><b>Цель игры:</b><br/>добраться до квадрата со знаком "К"</p>
                  <p><b>Управление:</b></p>
                  <p>"A" - указатель влево</p>
                  <p>"D" - указатель вправо</p>
                  <p>"пробел" - сделать ход</p><br/>
                  <p><b>Статистика:</b></p>
                  <p>Ошибки - 0</p>
                  <p>Победы - 0</p>
              </div>

              <div className={classes.game}>
                  <div className={classes.field}>
                    {/*здесь содержание игрового поля*/}
                  </div>
                  <div className={classes.controls}>
                      <button className={classes.btnTurnLeft}>&#9668;</button>
                      <button className={classes.btnTurnRight}>&#9658;</button>
                      <button className={classes.btnPlay}><b>ПУСК</b></button>
                  </div>
              </div>
          </main>

          <footer className={classes.footer}>
              <p>Данное демо сделано на коленке для демонстрации базовой механики.<br/>
                  Чтобы скачать концепт игры, переходите по <a href="https://disk.yandex.ru/i/em8Gm7TdZs5R-w">ссылке</a><br/>Reaktor, 2021</p>
          </footer>

      </div>
  );
}

export default App;