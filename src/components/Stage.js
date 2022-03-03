import React from "react"
import Cell from "./Cell"
import { StyledStage } from "./styles/StyledStage"

// map over stage prop, we get a row and each row is an array that holds the cell,
// so for every row we render a cell component
// type = first value in the cell array

const Stage = ({ stage }) => (
	<StyledStage width={stage[0].length} height={stage.length}>
		{stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
	</StyledStage>
)

export default Stage
