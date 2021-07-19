import React, {useEffect, useMemo, useRef} from 'react';
import style from './Cell.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {ICellMovingProps, IRootState} from "../../types";
import {setCurrentColor} from "../../redux/actionCreator";

const CellMoving: React.FC<ICellMovingProps> = props => {

    const ref = useRef<HTMLDivElement|null>(null);
    const dispatch = useDispatch();

    const movingStyles = [style.cell__moving];

    // позиция полностью повторяет позицию стрелки

    const posX = useSelector((state: IRootState) => state.posX);
    const posY = useSelector((state: IRootState) => state.posY);
    const moving = useSelector((state: IRootState) => state.moving);
    const currentColor = useSelector((state: IRootState) => state.currentColor);

    useEffect(() => {
        // при изменении позиции X
        if (ref.current) {
            ref.current.style.left = posX * 10 + '%';
        }
    }, [posX])

    useEffect(() => {

        // при изменении позиции Y
        if (ref.current) {
            ref.current.style.top = posY * 10 + '%';
        }
    }, [posY])

    useEffect(() => {

        // при изнменении текущего цвета

        let color = style.white;

        switch (currentColor) {

            /*
            1 - желтый
            2 - зеленый
            3 - синий
            4 - красный
             */

            case 1:
                color = style.yellow;
                break;
            case 2:
                color = style.green;
                break;
            case 3:
                color = style.blue;
                break;
            case 4:
                color = style.red;
        }

        movingStyles.push(color);

        console.log('movingStyles запуск из useEffect = ', movingStyles)

    }, [currentColor])

    useEffect(() => {

        // при начале или завершении движения
        if (ref.current) {

            console.log('проверка moving')
            if (moving) {
                ref.current.style.opacity = '1';
            } else {
                ref.current.style.opacity = '0';
            }
        }

    }, [moving])

    return (
        <div className={movingStyles.join(' ')} ref={ref}>

        </div>
    )
}

export default CellMoving;

/*
надо скопировать мерцающую деталь в div
для этого надо знать: цвет детали, внут/внешняя
 */