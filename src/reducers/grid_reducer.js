import {RANDOM, NEXT, CLEAR, TOGGLE_CELL} from '../actions/types';
import {createGrid, generateNextState, countAliveNeighbours} from '../helpers';




export default function(state = [], action) {
    switch(action.type) {
        case RANDOM:

            return createGrid('random', action.payload.height, action.payload.width);
            
        case NEXT:

            return createGrid('next', action.payload.height, action.payload.width, action.payload.grid);

        case CLEAR:

            return createGrid('clear', action.payload.height, action.payload.width);

        case TOGGLE_CELL:

            return state.map((row, y) => {
                return row.map((cell, x) => {
                    if(x === action.payload.x && y === action.payload.y) {
                        cell.alive = !cell.alive;
                    }
                    return cell;
                })
            })

    }

    return state;
}