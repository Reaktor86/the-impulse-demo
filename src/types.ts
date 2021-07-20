import {
    SET_ARROW_POS,
    SET_ARROW_ROTATE_INDEX,
    SET_ARROW_SHOW, SET_CURRENT_COLOR,
    SET_DISABLE_CONTROLS,
    SET_MOVING, SET_POS, SHOW_RESULT,
    SWITCH_RULE
} from "./redux/actionCreator";

export type TypeRule = 'inner' | 'outer'

export interface IRootState {

    arrowRotateIndex: number
    arrowPosX: number
    arrowPosY: number
    arrowShow: boolean
    disableControls: boolean
    rule: TypeRule
    moving: boolean
    posX: number
    posY: number
    currentColor: number
}

// actions

export interface ISetArrowPos {
    type: typeof SET_ARROW_POS
    payload: {
        x?: number,
        y?: number,
    }
}

export interface ISetPos {
    type: typeof SET_POS
    payload: {
        x?: number,
        y?: number,
    }
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

export interface IShowResult {
    type: typeof SHOW_RESULT
    payload: TypeResult
}

export type TypeSetNumber = ISetArrowRotateIndex | ISetCurrentColor;
export type TypeSetBoolean = ISetArrowShow | ISetDisableControls | ISetMoving;
export type TypeCords = ISetArrowPos | ISetPos;

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

// разное

export type TypeResult = 'wall' | 'wrongColor' | 'start' | 'win'
