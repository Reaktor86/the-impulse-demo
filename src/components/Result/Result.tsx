import React from 'react';
import style from './Result.module.scss';

const Result = () => {
    return (
        <div className={style.result}>
            <div className={style.result__bg}>
                <p className={style.result__head}>ОШИБКА!</p>
                <p className={style.result__body}>неправильный цвет</p>
            </div>
            {/*<ResultButton/>*/}
        </div>
    )
}

const ResultButton = () => {
    return (
        <button className={style.result__new}>Ещё раз</button>
    )
}

export default Result;