import {
    SET_ARROW_POS_X,
    SET_ARROW_POS_Y,
    SET_ARROW_ROTATE_INDEX,
    SET_ARROW_SHOW,
    SET_DISABLE_CONTROLS,
    SET_MOVING,
    SWITCH_RULE
} from "./actionCreator";

import {IRootState} from "../types";

const initialState: IRootState = {

    arrowRotateIndex: 0, // индекс для массива с вариантами углов стрелки
    arrowPosX: 1, // позиция стрелки по X (column, 0-9)
    arrowPosY: 8, // позиция стрелки по Y (row, 0-9)
    arrowShow: true, // показать стрелку
    disableControls: false, // отключить элементы управления
    rule: 'inner', // текущее правило: внутренний квадрат или внешний
    moving: false, // совершается движение в данный момент

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

        default:
            return state;
    }
}