import React, {useEffect} from "react";
import style from './App.module.scss';
import Stat from "./components/Stat/Stat";
import Cell from "./components/Cell/Cell";
import Arrow from "./components/Arrow/Arrow";
import {useSelector, useDispatch} from "react-redux";
import {setArrowPosX, setArrowPosY, setArrowRotateIndex, setArrowShow, setDisableControls} from "./redux/actionCreator";

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

const rotateArray = [0,315,270,225,180,135,90,45];
const arrowRotateIndexDefault = 0;
const posXDefault = 1;
const posYDefault = 8;

function App() {

    const dispatch = useDispatch();

    const arrowRotateIndex = useSelector(state => state.arrowRotateIndex);
    const disableControls = useSelector(state => state.disableControls);
    /*const rule = useSelector(state => state.rule);*/

    const reset = () => {

        dispatch(
            setArrowRotateIndex(arrowRotateIndexDefault)
        );
        dispatch(
            setArrowPosX(posXDefault)
        );
        dispatch(
            setArrowPosY(posYDefault)
        );
    }

    useEffect(() => {
        reset();
    }, [])

    const rotateLeft = () => {

        if (arrowRotateIndex === rotateArray.length - 1) {
            dispatch(
                setArrowRotateIndex(0)
            );
        } else {
            dispatch(
                setArrowRotateIndex(arrowRotateIndex + 1)
            );
        }
    }

    const rotateRight = () => {

        if (arrowRotateIndex === 0) {
            dispatch(
                setArrowRotateIndex(rotateArray.length - 1)
            );
        } else {
            dispatch(
                setArrowRotateIndex(arrowRotateIndex - 1)
            );
        }
    }

    const play = () => {

        dispatch(
            setDisableControls(true)
        );
        dispatch(
            setArrowShow(false)
        );
    }

  return (
      <div className="App">

          <header>
              <h1>The Impulse Demo</h1>
          </header>

          <main className={style.main}>

              <div className={style.sidebar}>
                  <p><b>Цель игры:</b><br/>добраться до квадрата со знаком "К"</p>
                  <p><b>Управление:</b></p>
                  <p>"A" - вращать стрелку влево</p>
                  <p>"D" - вращать стрелку вправо</p>
                  <p>"пробел" - пуск</p><br/>
                  <Stat />
              </div>

              <div className={style.game}>
                  <div className={style.field}>

                      {
                          map01.map((item, colIndex) => {
                              return item.map((val, rowIndex) => {

                                  return <Cell
                                      key={'' + colIndex + rowIndex}
                                      type={val}
                                  />
                              })
                          })
                      }

                      <Arrow
                          rotateArray={rotateArray}
                      />
                  </div>
                  <div className={style.controls}>
                      <button
                          className={style.btnTurnLeft}
                          onClick={rotateLeft}
                          disabled={disableControls}
                      >&#9668;</button>
                      <button
                          className={style.btnTurnRight}
                          onClick={rotateRight}
                          disabled={disableControls}
                      >&#9658;</button>
                      <button
                          className={style.btnPlay}
                          onClick={play}
                          disabled={disableControls}
                      ><b>ПУСК</b>
                      </button>
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