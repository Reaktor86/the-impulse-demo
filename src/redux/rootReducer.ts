import {
    SET_ARROW_POS_X,
    SET_ARROW_POS_Y,
    SET_ARROW_ROTATE_INDEX,
    SET_ARROW_SHOW, SET_CURRENT_COLOR,
    SET_DISABLE_CONTROLS,
    SET_MOVING, SET_POS_X, SET_POS_Y,
    SWITCH_RULE
} from "./actionCreator";

import {IRootState} from "../types";

const posXDefault = 1;
const posYDefault = 8;

const initialState: IRootState = {

    arrowRotateIndex: 0, // индекс для массива с вариантами углов стрелки
    arrowPosX: posXDefault, // позиция стрелки по X (column, 0-9)
    arrowPosY: posYDefault, // позиция стрелки по Y (row, 0-9)
    arrowShow: true, // показать стрелку
    disableControls: false, // отключить элементы управления
    rule: 'inner', // текущее правило: внутренний квадрат или внешний
    moving: false, // совершается движение в данный момент
    posX: posXDefault, // позиция движущегося квадрата по X (column, 0-9)
    posY: posYDefault, // позиция движущегося квадрата по Y (column, 0-9)
    currentColor: 0, // текущий цвет (тот, что мерцает)
}

export default function rootReducer(state = initialState, action: any): IRootState {

    switch (action.type) {

        case SET_ARROW_ROTATE_INDEX: {
            return {
                ...state,
                arrowRotateIndex: action.payload,
            }
        }

        case SET_ARROW_POS_X: {
            return {
                ...state,
                arrowPosX: action.payload,
            }
        }

        case SET_ARROW_POS_Y: {
            return {
                ...state,
                arrowPosY: action.payload,
            }
        }

        case SET_POS_X: {
            return {
                ...state,
                posX: action.payload,
            }
        }

        case SET_POS_Y: {
            return {
                ...state,
                posY: action.payload,
            }
        }

        case SET_DISABLE_CONTROLS: {
            return {
                ...state,
                disableControls: action.payload,
            }
        }

        case SET_ARROW_SHOW: {
            return {
                ...state,
                arrowShow: action.payload,
            }
        }

        case SWITCH_RULE: {

            let newState: 'inner' | 'outer';
            if (state.rule === 'inner') {
                newState = 'outer';
            } else {
                newState = 'inner';
            }

            return {
                ...state,
                rule: newState,
            }
        }

        case SET_MOVING: {
            return {
                ...state,
                moving: action.payload,
            }
        }

        case SET_CURRENT_COLOR: {
            return {
                ...state,
                currentColor: action.payload,
            }
        }

        default:
            return state;
    }
}