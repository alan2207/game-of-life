import {RANDOM, NEXT, CLEAR, TOGGLE_CELL} from './types';


export function randomGrid(height, width) {
    return {
        type: RANDOM,
        payload: {
            height,
            width
        }
    };
}


export function nextGrid(height, width, grid) {
    return {
        type: NEXT,
        payload: {
            height,
            width,
            grid
        }
    };
}


export function clearGrid(height, width) {
    return {
        type: CLEAR,
        payload: {
            height,
            width
        }
    };
}


export function toggleCell(x, y) {
    return {
        type: TOGGLE_CELL,
        payload: {
            x,
            y
        }
    }
}