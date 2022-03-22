import styled from "styled-components"

export const StyledDisplay = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	margin: 0 0 20px 0;
	padding: 20px;
	border: 4px solid #333;
	min-height: 30px;
	width: 100%;
	border-radius: 20px;
	color: ${(props) => (props.gameOver ? "red" : "#999")};
	background: #000;
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 0.8rem;

	@media (max-width: 768px) {
		margin: 10px auto auto 60px;
		// display: flex;
		justify-content: center;
		width: 100%;
		font-size: 0.2rem;
	}
`
