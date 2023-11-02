import styled from "styled-components";

export const Container = styled.div`
  background-color: "#ffff";
	height: 100vh;
	color: "#000";
	align-items: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 1rem;
`;

export const TitleProject = styled.h2`
	margin-bottom: 20px;
	font-family: monospace;
`;
export const CardSearhRepo = styled.form`
  background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 10rem;
	width: 25rem;
	max-width: 600px;
	padding: 10px;
	box-shadow: 0.4rem 0.3rem 0.6rem 0.4rem rgba(0, 0, 0, 0.05);
	margin-bottom: 2rem;
`;

export const InputSearch = styled.input`
  background-color: #dcdcdc;
	height: 1.8rem;
	width: 90%;
	color: black;
	outline-color: #d3d3d3;
	border: none;
	text-align: center;
	box-shadow: 0.4rem 0.3rem 0.6rem 0.4rem rgba(0, 0, 0, 0.04);
`;

export const BtnSearch = styled.button.attrs( props => ({
	disabled: props.loading
})

)`
  background-color: #000;
	height: 2rem;
  margin-top: 10px;
	align-items: center;
	justify-content: center;
	display: flex;
  width: 90%;
  color: #fff;
  border-color: gray;
  border: none;
  outline: none;
	font-weight: bold;
  cursor: pointer;
  box-shadow: 0.4rem 0.3rem 0.6rem 0.4rem rgba(0, 0, 0, 0.04);
  transition: background-color 0.3s, color 0.3s; 

  &:hover {
    background-color: #474747;
    color: #fff;
  }
	&[disabled]{
		cursor: not-allowed;
	}
`;

export const List = styled.ul`
		display: flex;
		overflow: hidden;
		flex-direction: column;
		height: 20rem;
		width: 25rem;
		max-height: 20rem;

`
export const ItemList = styled.li`
		display: flex;
		background-color: #fff;
		color: #000;
		justify-content: space-between;
		align-items: center;
	  padding: 10px;
		flex-direction: row;
		height: 3rem;
		width: 25rem;
		margin-top: 0.4rem;
	  box-shadow: 0.4rem 0.3rem 1rem 0.4rem rgba(0, 0, 0, 0.05);
		span{
			width:90%;
			display: flex;
			align-items: center;
			font-weight: bold;
		}
		a{
			transition: transform 0.2s; 
  
			&:hover {
				transform: scale(1.3); 
			}
		}
`
export const DeleteBtn = styled.button.attrs({
	type:'button'
})`
	border: none;
	color: #ff7f00;
	background-color: #ffff;
	cursor: pointer;
	transition: transform 0.2s; 
  
  &:hover {
    transform: scale(1.3); 
  }
`