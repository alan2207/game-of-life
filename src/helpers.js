
// generate new grid
export function createGrid(action, height, width, grid = []) {
    const newGrid = [];

    for(let y = 0; y < height; y++) {
        const row = [];

        for(let x = 0; x < width; x++) {
            let alive;

            if(action === 'random') {
                alive = Math.random() > 0.75;
            }

            if(action === 'clear') {
                alive = false;
            }

            if(action === 'next') {
                alive = generateNextState(grid, x, y);
            }
            row.push({
                x,
                y,
                alive
            });
        }
        
        newGrid.push(row);
    }

    return newGrid;
}


function checkExistence(arr, y, x) {
    // if the cell is on the edge, neighbours past the edge do not exist:
	// if(y >= 0 && y < arr.length && x >= 0 && x < arr[0].length) {
    //     // coerce value, if neighbour is alive true becomes 1
	// 	return !!arr[y][x].alive;
	// } else {
	// 	return 0;
	// }

    // this way the borders are ignored, the grid is infinite:
    const height = arr.length;
    const width = arr[0].length;

    if(y < 0) {
        y = height - 1;
    }

    if(y > height - 1) {
        y = 0
    }

    if(x < 0) {
        x = width - 1
    }

    if(x > width - 1) {
        x = 0;
    }

    return !!arr[y][x].alive;
}

// count alive neighbours of grid[y][x] cell
export function countAliveNeighbours(grid, x, y) {
    let count = 0;

    // check left:
    count += checkExistence(grid, y, x - 1);

    // check right:
    count += checkExistence(grid, y, x + 1);

    // check up:
    count += checkExistence(grid, y - 1, x);

    // check down:
    count += checkExistence(grid, y + 1, x);

    // check upper left corner:
    count += checkExistence(grid, y - 1, x - 1);

    // check upper right corner:
    count += checkExistence(grid, y - 1, x + 1);

    // check bottom left corner:
    count += checkExistence(grid, y + 1, x - 1);

    // check bottom right corner:
    count += checkExistence(grid, y + 1, x + 1);

    return count;
}


// generating next state of the cell
export function generateNextState(grid, x, y) {
    let alive;
    let currentAlive = grid[y][x].alive;

    let neighboursAlive = countAliveNeighbours(grid, x, y);

    if(currentAlive && (neighboursAlive === 2 || neighboursAlive === 3)) {
        alive = true;
    } else if(currentAlive === false && neighboursAlive === 3) {
        alive = true;
    } else {
        alive = false;
    }
    return alive;
}