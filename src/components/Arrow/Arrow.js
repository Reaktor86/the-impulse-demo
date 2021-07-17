import React, {useEffect, useRef, useState} from 'react';
import style from './Arrow.module.scss';
import arrowImg from './img/arrow.png';

const Arrow = props => {

    const arrowRef = useRef();

    useEffect(() => {

        // при изменении rotateIndex
        console.log('rotateIndex = ', props.rotateIndex);
        setRotate(props.rotateArray[props.rotateIndex]);
    }, [props.rotateIndex])

    useEffect(() => {

        // при изменении позиции X
        arrowRef.current.style.left = props.posX * 10 + '%';
    }, [props.posX])

    useEffect(() => {

        // при изменении позиции Y
        arrowRef.current.style.top = props.posY * 10 + '%';
    }, [props.posY])

    const setRotate = (deg) => {

        arrowRef.current.style.transform = 'rotate(' + deg + 'deg)';
    }

    return (
        <>
        {
            props.arrowShow ?
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