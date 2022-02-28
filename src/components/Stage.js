import React from "react"
import Cell from "./Cell"

// map over stage prop, we get a row and each row is an array that holds the cell,
// so for every row we render a cell component
// type = first value in the cell array

const Stage = ({ stage }) => (
	<div>
		{stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
	</div>
)

export default Stage
