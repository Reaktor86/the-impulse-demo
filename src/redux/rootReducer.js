import {
    SET_ARROW_POS_X,
    SET_ARROW_POS_Y,
    SET_ARROW_ROTATE_INDEX,
    SET_ARROW_SHOW,
    SET_DISABLE_CONTROLS, SWITCH_RULE
} from "./actionCreator";

const initialState = {

    arrowRotateIndex: 0,
    arrowPosX: 1,
    arrowPosY: 8,
    arrowShow: true,
    disableControls: false,
    rule: 'inner',
}

export default function rootReducer(state = initialState, action) {

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

            let newState;
            if (state.rule === 'inner') {
                newState = 'outer';
            } else {
                newState = 'inner';
            }

            return {
                ...state,
                rule: newState
            }
        }

        default:
            return state;
    }
}