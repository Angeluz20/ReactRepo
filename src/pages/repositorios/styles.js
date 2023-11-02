import styled from "styled-components";
import { Link } from "react-router-dom";

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
export const CardRepo = styled.form`
  background-color: #fff;
	display: flex;
	align-items: center;

	flex-direction: column;
	height: 50rem;
	width: 40rem;
	max-width: 500px;
	max-height: 700px;
	padding: 10px;
	box-shadow: 0.4rem 0.3rem 0.6rem 0.4rem rgba(0, 0, 0, 0.05);
	margin-bottom: 2rem;

`;
export const AvatarUser = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 1rem;
`;

export const AvatarUserIssues = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 3rem;
	margin-right: 10px;
	border: 1px solid #fff;
	box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(180, 190, 255, 0.5);
`;

export const ListIssues = styled.ul`
		flex-direction: column;
		width: 90%;
		list-style-type: none;
		justify-content: center;
`;

export const ListIssuesNotFound = styled.ul`
		width: 100%;
		flex-direction: column;
		align-items: center;
		display: flex;
		justify-content: center;
		color:  #ff7f00;
`;

export const ListIssuesItem = styled.li`
		align-items: center;
		margin-bottom: 10px;
		display: flex;
		list-style-type: none;
		a{
			font-size: 12px;
			text-decoration: none;
			color: #3d3d3d;
			margin-bottom: 10px;
		}

		strong{
			span{
			font-size: 10px;
			margin-top: 10px;
			background-color: #3d3d3d;
			padding: 0.2rem;
			border-radius: 0.2rem;
			
			color: #fff;
			}
				span{
				margin-left: 10px;
				}
		}
		
		div{
			margin-left: 10px;
		}
		p{
			margin-top: 5px;
		}
`;

export const ViewLoading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const ContentIssues = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
  margin-top: 1rem;
	width: 90%;
	height: 50rem;
`;

export const Goback = styled.div`
	height: 2rem;
  margin-top: 10px;
  width: 90%;
	font-weight: bold;
`;

export const ArrowIcon = styled(Link)`
	height: 2rem;
  margin-top: 10px;
  width: 90%;
	font-weight: bold;
  cursor: pointer;
	transition: transform 0.2s; 
  
	&:hover {
		transform: scale(1.3); 
	}
`;
export const ViewBtnNav = styled.div`
	width: 100%;
	height: 20%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`
export const BtnNavIssues = styled.button`
  background-color:#fff;
	padding: 0.4rem;
	width: 7rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
	border: 1px solid #000;
	box-shadow: 0.4rem 0.3rem 0.6rem 0.4rem rgba(0, 0, 0, 0.05);
	transition: transform 0.2s; 
	border-radius: 0.4rem;
	&:disabled{
		cursor: not-allowed;
	}
  &:hover {
    transform: scale(1.2); 
		background-color: #474747;
		border: none;
		color: #fff;
  }
`;
export const FilterContent = styled.div`
  margin: 1rem 2rem;
	width: 60%;
	justify-content: space-around;
	align-items: center;
	display: flex;

`;
export const BtnFilter = styled.button.attrs({
	type:'button'
}
)`
	background-color:  #ff7f00;
	border: none;
	color: #fff;
	width: 4rem;
	height: 2rem;
	transition: transform 0.2s;
	border-radius: 0.4rem;
	box-shadow: 0.4rem 0.3rem 0.6rem 0.4rem rgba(0, 0, 0, 0.05);
	cursor: pointer;
	&:nth-child(${ props => props.active + 1}) {
    background: #fff;
		color: #ff7f00;
		border: 1px solid #ff7f00
  }
	&:hover {
    transform: scale(1.2); 
  }

`;