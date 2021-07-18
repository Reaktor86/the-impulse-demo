import React from 'react';
import style from './Cell.module.scss';

const Cell = props => {

    const rootStyle = [];
    let innerType;
    let outerType;

    if (props.type === 0) {

        // клетка пустая
        rootStyle.push(style.empty);

    } else {

        // в клетке есть квадрат
        rootStyle.push(style.filled);

        innerType = props.type % 10;
        outerType = Math.floor(props.type / 10);
    }

    return (
        <div className={rootStyle.join(' ')}>
            {
                props.type !== 0 ?
                    <Filled innerType={innerType} outerType={outerType} />
                    : null
            }
        </div>
    )
}

export default Cell;


const Filled = props => {

    /*
0 - пустая клетка
1 - желтый
2 - зеленый
3 - синий
4 - красный
5 - старт
6 - финиш

первое число - внешняя облолчка, второе - внутренняя

 */

    const outerStyle1 = [style.outer1];
    const outerStyle2 = [style.outer2];
    const outerStyle3 = [style.outer3];
    const outerStyle4 = [style.outer4];
    const innerStyle = [style.inner];

    if (props.innerType && props.outerType) {

        let outerColor;
        let innerColor;

        switch (props.outerType) {
            case 1:
                outerColor = style.yellow;
                break;
            case 2:
                outerColor = style.green;
                break;
            case 3:
                outerColor = style.blue;
                break;
            case 4:
                outerColor = style.red;
                break;
            default:
                outerColor = style.white;
        }

        switch (props.innerType) {
            case 1:
                innerColor = style.yellow;
                break;
            case 2:
                innerColor = style.green;
                break;
            case 3:
                innerColor = style.blue;
                break;
            case 4:
                innerColor = style.red;
                break;
            default:
                innerColor = style.white;
        }

        outerStyle1.push(outerColor);
        outerStyle2.push(outerColor);
        outerStyle3.push(outerColor);
        outerStyle4.push(outerColor);
        innerStyle.push(innerColor);
    }

    return (
        <>
            <div className={outerStyle1.join(' ')}></div>
            <div className={outerStyle2.join(' ')}></div>
            <div className={outerStyle3.join(' ')}></div>
            <div className={outerStyle4.join(' ')}></div>
            <div className={innerStyle.join(' ')}></div>
            {
                (props.innerType > 4 || props.outerType > 4) ?
                    <CellMark innerType={props.innerType} outerType={props.outerType}/>
                    : null
            }
        </>
    )
}

const CellMark = props => {

    let mark;
    if (props.innerType === 5 || props.outerType === 5) {
        mark = 'Н';
    } else if (props.innerType === 6 || props.outerType === 6) {
        mark = 'К';
    } else {
        mark = '?';
    }

    let markStyle;
    if (props.innerType > 4) {
        markStyle = style.inner__p;
    } else if (props.outerType > 4) {
        markStyle = style.outer__p;
    }

    return (
        <p className={markStyle}>{mark}</p>
    )
}