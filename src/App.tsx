import React, {useCallback, useEffect} from "react";
import style from './App.module.scss';
import Stat from "./components/Stat/Stat";
import Cell from "./components/Cell/Cell";
import Arrow from "./components/Arrow/Arrow";
import {useSelector, useDispatch} from "react-redux";
import {
    setResult,
    setArrowPos,
    setArrowRotateIndex,
    setArrowShow, setCurrentColor,
    setDisableControls,
    setMoving, setPos,
} from "./redux/actionCreator";
import {IRootState, TypeRule} from "./types";
import CellMoving from "./components/Cell/CellMoving";

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

const rotateArray: number[] = [0,315,270,225,180,135,90,45]; // углы вращения стрелки
const arrowRotateIndexDefault = 0;
export const posXDefault = 1; // координаты по умолчанию
export const posYDefault = 8;
export const cellTransition = 200; // css transition для движущейся клетки, ms

const App: React.FC = () => {

    const dispatch = useDispatch();

    const { arrowRotateIndex, disableControls, arrowPosX, arrowPosY, rule, posX, posY, currentColor } = useSelector((state: IRootState) => state);

    const reset = () => {

        dispatch(
            setArrowRotateIndex(arrowRotateIndexDefault)
        );
        dispatch(
            setArrowPos(posXDefault, posYDefault)
        );
        dispatch(
            setPos(posXDefault, posYDefault)
        );
        dispatch(
            setCurrentColor(getColor(arrowPosX, arrowPosY))
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
        dispatch(
            setMoving(true)
        );

        makeStep(posX, posY);
    }


    /**
     * ОСТОРОЖНО! В какой-то момен makeStep вызывает саму себя
     * @param oldX
     * @param oldY
     */

    const makeStep = (oldX: number, oldY: number) => {

        // Узнать новую позицию

        let x = oldX;
        let y = oldY;

        switch (arrowRotateIndex) {
            case 0: {
                x++;
                break;
            }
            case 1: {
                x++;
                y--;
                break;
            }
            case 2: {
                y--;
                break;
            }
            case 3: {
                x--;
                y--;
                break;
            }
            case 4: {
                x--;
                break;
            }
            case 5: {
                x--;
                y++;
                break;
            }
            case 6: {
                y++;
                break;
            }
            case 7: {
                x++;
                y++;
                break;
            }
        }

        /*
        Пока квадрат едет, определить, что его ожидает на предсказанной координате
        Варианты:
        - пустота (в этом случае функция активирует саму себя ещё раз)
        - стена - промах
        - другой квадрат
         */

        if (map01[y][x] === 0) {

            // пустота

            console.log('пустота');
            setTimeout(() => {
                makeStep(x, y);
            }, cellTransition)
            dispatch(
                setPos(x, y)
            );
            return;
        }

        if (x < 0 || x > 9 || y < 0 || y > 9) {

            // врезался в стену

            if (x < 0) x += 0.5;
            if (x > 9) x -= 0.5;
            if (y < 0) y += 0.5;
            if (y > 9) y -= 0.5;

            dispatch(
                setResult('wall') // async
            );
            dispatch(
                setPos(x, y)
            );
            return;
        }

        dispatch(
            setPos(x, y)
        );

        /*
         Предсказан другой квадрат.
         Сопоставить цвета.

         Цвета совпадают:
        - узнать тип клетки
        - старт: промах, финиш: выиграл, обычная: правильный ход
        Цвета не совпадают:
        - промах
         */

        let goalCell = map01[y][x];
        let color = {
            inner: goalCell % 10,
            outer: Math.floor(goalCell / 10),
        }
        if (currentColor === color[rule]) {

            console.log('цвета совпали');

            let testNew: TypeRule;
            if (rule === 'inner') {
                testNew = 'outer';
            } else {
                testNew = 'inner';
            }

            if (color[testNew] === 5) {

                // врезался в старт
                dispatch(
                    setResult('start') // async
                );
            } else if (color[testNew] === 6) {

                // финишировал
                dispatch(
                    setResult('win') // async
                );
            } else {

                console.log('правильный ход');
            }

            return;
        }

        dispatch(
            setResult('wrongColor') // async
        );
    }

    const getColor = (x: number, y: number): number => {

        // вернуть цвет

        let color = map01[y][x];
        if (rule === 'inner') {
            color = color % 10;
        } else {
            color = Math.floor(color / 10);
        }

        return color;
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
                                      cords={'' + colIndex + rowIndex}
                                      type={val}
                                  />
                              })
                          })
                      }

                      <Arrow
                          rotateArray={rotateArray}
                      />

                      <CellMoving
                        matrix={map01}
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