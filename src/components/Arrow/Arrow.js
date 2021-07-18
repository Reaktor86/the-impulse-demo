import React, {useEffect, useRef} from 'react';
import style from './Arrow.module.scss';
import arrowImg from './img/arrow.png';
import {useSelector} from "react-redux";

const Arrow = props => {

    const arrowRef = useRef();

    const arrowRotateIndex = useSelector(state => state.arrowRotateIndex);
    const arrowPosX = useSelector(state => state.arrowPosX);
    const arrowPosY = useSelector(state => state.arrowPosY);
    const arrowShow = useSelector(state => state.arrowShow);

    useEffect(() => {

        // при изменении rotateIndex
        console.log('rotateIndex = ', arrowRotateIndex);
        setRotate(props.rotateArray[arrowRotateIndex]);
    }, [arrowRotateIndex])

    useEffect(() => {

        // при изменении позиции X
        arrowRef.current.style.left = arrowPosX * 10 + '%';
    }, [arrowPosX])

    useEffect(() => {

        // при изменении позиции Y
        arrowRef.current.style.top = arrowPosY * 10 + '%';
    }, [arrowPosY])

    const setRotate = (deg) => {

        arrowRef.current.style.transform = 'rotate(' + deg + 'deg)';
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