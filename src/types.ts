import {
    SET_ARROW_POS_X,
    SET_ARROW_POS_Y,
    SET_ARROW_ROTATE_INDEX,
    SET_ARROW_SHOW,
    SET_DISABLE_CONTROLS,
    SET_MOVING,
    SWITCH_RULE
} from "./redux/actionCreator";

export interface IRootState {

    arrowRotateIndex: number
    arrowPosX: number
    arrowPosY: number
    arrowShow: boolean
    disableControls: boolean
    rule: 'inner' | 'outer'
    moving: boolean
}

// actions

interface ISetArrowPosX {
    type: typeof SET_ARROW_POS_X
    payload: number
}

interface ISetArrowPosY {
    type: typeof SET_ARROW_POS_Y
    payload: number
}

interface ISetArrowRotateIndex {
    type: typeof SET_ARROW_ROTATE_INDEX
    payload: number
}

interface ISetArrowShow {
    type: typeof SET_ARROW_SHOW
    payload: boolean
}

interface ISetDisableControls {
    type: typeof SET_DISABLE_CONTROLS
    payload: boolean
}

interface ISetMoving {
    type: typeof SET_MOVING
    payload: boolean
}

export interface ISwitchRule {
    type: typeof SWITCH_RULE
}

export type TypeSetNumber = ISetArrowPosX | ISetArrowPosY | ISetArrowRotateIndex;
export type TypeSetBoolean = ISetArrowShow | ISetDisableControls | ISetMoving;

// props

export interface IArrowProps {
    rotateArray: number[]
}

export interface ICellProps {
    type: number
    id: string
}

export interface IFilledProps {
    innerType: number
    outerType: number
    id: string
}

export interface ICellMarkProps {
    innerType: number
    outerType: number
}

