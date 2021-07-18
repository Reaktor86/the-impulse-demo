export const SET_ARROW_ROTATE_INDEX = 'SET_ARROW_ROTATE_INDEX';
export const SET_ARROW_POS_X = 'SET_ARROW_POS_X';
export const SET_ARROW_POS_Y = 'SET_ARROW_POS_Y';
export const SET_DISABLE_CONTROLS = 'SET_DISABLE_CONTROLS';
export const SET_ARROW_SHOW = 'SET_ARROW_SHOW';
export const SWITCH_RULE = 'SWITCH_RULE';

export function setArrowRotateIndex(index) {
    return {
        type: SET_ARROW_ROTATE_INDEX,
        payload: index,
    }
}

export function setArrowPosX(x) {
    return {
        type: SET_ARROW_POS_X,
        payload: x,
    }
}

export function setArrowPosY(y) {
    return {
        type: SET_ARROW_POS_Y,
        payload: y,
    }
}

export function setDisableControls(value) {
    return {
        type: SET_DISABLE_CONTROLS,
        payload: value,
    }
}

export function setArrowShow(value) {
    return {
        type: SET_ARROW_SHOW,
        payload: value,
    }
}

export function switchRule() {
    return {
        type: SWITCH_RULE,
    }
}
