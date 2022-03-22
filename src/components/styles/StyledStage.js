import styled from "styled-components"

export const StyledStage = styled.div`
	display: grid;
	grid-template-rows: repeat(
		${(props) => props.height},
		calc(35vw / ${(props) => props.width})
	);
	grid-template-columns: repeat(${(props) => props.width}, 1fr);
	grid-gap: 1px;
	border: 2px solid #333;
	width: 100%;
	max-width: 35vw;
	background: #111;
	margin-bottom: auto;

	@media (max-width: 768px) {
		display: grid;
		margin: auto;
		height: 45vw%;
		max-width: 45vw;
		grid-gap: 1px;
		border: 2px solid #333;
	}

	@media (max-width: 390px) {
		display: grid;
		margin: 40px auto;
		max-width: 45vw;
		max-height: 75vw;
		grid-gap: 1px;
		border: 2px solid #333;
	}
`
