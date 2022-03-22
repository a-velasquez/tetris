import styled from "styled-components"

export const StyledStartButton = styled.button`
	box-sizing: border-box;
	margin: 0 0 20px 0;
	padding: 20px;
	min-height: 30px;
	width: 100%;
	border-radius: 20px;
	border: none;
	color: white;
	background: #333;
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 1rem;
	outline: none;
	cursor: pointer;

	@media (max-width: 768px) {
		margin: auto;
		display: flex;
		justify-content: center;
		width: 100%;
		font-size: 0.2rem;
		margin: 10px 10px 10px 60px;
	}
`
