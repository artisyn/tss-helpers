import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	border: 2px solid black;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;
export const NavItem = styled(Link)`
	color: orangered;
	font-size: bold;
`;
