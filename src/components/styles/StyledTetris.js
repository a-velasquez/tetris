import styled from "styled-components"

import bgImage from "../../img/bg.png"

export const StyledTetrisWrapper = styled.div`
	// width: 100vh;
	height: 100vh;
	background: url(${bgImage}) #000;
	background-size: cover;
	overflow: hidden;
`
export const StyledTetris = styled.div`
	display: flex;
	align-items: flex-start;
	padding: 5px;
	margin: auto;
	max-width: 800px;

	@media (max-width: 768px) {
		display: block;
		align-items: flex-start;
		max-width: 400px;
		padding-top: 20px;
	}

	aside {
		width: 100;
		max-width: 200px;
		display: block;
		padding: 0 20px;
	}
`
