import {
    SET_ARROW_POS_X,
    SET_ARROW_POS_Y,
    SET_ARROW_ROTATE_INDEX,
    SET_ARROW_SHOW, SET_CURRENT_COLOR,
    SET_DISABLE_CONTROLS,
    SET_MOVING, SET_POS_X, SET_POS_Y,
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
    posX: number
    posY: number
    currentColor: number
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

interface ISetPosX {
    type: typeof SET_POS_X
    payload: number
}

interface ISetPosY {
    type: typeof SET_POS_Y
    payload: number
}

interface ISetArrowRotateIndex {
    type: typeof SET_ARROW_ROTATE_INDEX
    payload: number
}

interface ISetCurrentColor {
    type: typeof SET_CURRENT_COLOR
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

export type TypeSetNumber = ISetArrowPosX | ISetArrowPosY | ISetArrowRotateIndex | ISetPosX | ISetPosY | ISetCurrentColor;
export type TypeSetBoolean = ISetArrowShow | ISetDisableControls | ISetMoving;

// props

export interface IArrowProps {
    rotateArray: number[]
}

export interface ICellProps {
    type: number
    cords: string
}

export interface IFilledProps {
    innerType: number
    outerType: number
    cords: string
}

export interface ICellMarkProps {
    innerType: number
    outerType: number
}

export interface ICellMovingProps {
    matrix: number[][]
}