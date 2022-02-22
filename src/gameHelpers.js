export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

// creating a new array using STAGE_HEIGHT
// using an inline function to create new array
// using STAGE_WIDTH and filling with an array of '0' or
// empty cell, and 'clear' which has no tetromino and will be cleared in next render

export const createStage = () =>
	Array.from(Array(STAGE_HEIGHT), () =>
		new Array(STAGE_WIDTH).fill([0, "clear"])
	)
