import React, {useEffect, useRef} from 'react';
import style from './Arrow.module.scss';
import arrowImg from './img/arrow.png';
import {useSelector} from "react-redux";
import {IArrowProps, IRootState} from "../../types";

const Arrow: React.FC<IArrowProps> = props => {

    const arrowRef = useRef<HTMLImageElement|null>(null);

    const { arrowRotateIndex, arrowPosX, arrowPosY, arrowShow } = useSelector((state: IRootState) => state);

    useEffect(() => {

        // при изменении rotateIndex
        console.log('rotateIndex = ', arrowRotateIndex);
        setRotate(props.rotateArray[arrowRotateIndex]);
    }, [arrowRotateIndex])

    useEffect(() => {

        // при изменении позиции X
        if (arrowRef.current) {
            arrowRef.current.style.left = arrowPosX * 10 + '%';
        }
    }, [arrowPosX])

    useEffect(() => {

        // при изменении позиции Y
        if (arrowRef.current) {
            arrowRef.current.style.top = arrowPosY * 10 + '%';
        }
    }, [arrowPosY])

    const setRotate = (deg: number) => {

        // вращать
        if (arrowRef.current) {
            arrowRef.current.style.transform = 'rotate(' + deg + 'deg)';
        }
    }

    return (
        <>
        {
            arrowShow ?
                <img
                    className={style.arrow}
                    alt='стрелка'
                    src={arrowImg}
                    ref={arrowRef}
                />
                : null
        }
        </>
    )
}

export default Arrow;