import {TypeSetNumber, TypeSetBoolean, ISwitchRule} from "../types";

export const SET_ARROW_ROTATE_INDEX = 'SET_ARROW_ROTATE_INDEX';
export const SET_ARROW_POS_X = 'SET_ARROW_POS_X';
export const SET_ARROW_POS_Y = 'SET_ARROW_POS_Y';
export const SET_DISABLE_CONTROLS = 'SET_DISABLE_CONTROLS';
export const SET_ARROW_SHOW = 'SET_ARROW_SHOW';
export const SWITCH_RULE = 'SWITCH_RULE';
export const SET_MOVING = 'SET_MOVING';

export function setArrowRotateIndex(index: number): TypeSetNumber {
    return {
        type: SET_ARROW_ROTATE_INDEX,
        payload: index,
    }
}

export function setArrowPosX(x: number): TypeSetNumber {
    return {
        type: SET_ARROW_POS_X,
        payload: x,
    }
}

export function setArrowPosY(y: number): TypeSetNumber {
    return {
        type: SET_ARROW_POS_Y,
        payload: y,
    }
}

export function setDisableControls(value: boolean): TypeSetBoolean {
    return {
        type: SET_DISABLE_CONTROLS,
        payload: value,
    }
}

export function setArrowShow(value: boolean): TypeSetBoolean {
    return {
        type: SET_ARROW_SHOW,
        payload: value,
    }
}

export function switchRule(): ISwitchRule {
    return {
        type: SWITCH_RULE,
    }
}

export function setMoving(value: boolean): TypeSetBoolean {
    return {
        type: SET_MOVING,
        payload: value,
    }
}
