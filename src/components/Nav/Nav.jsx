import React from 'react';
import { Container, NavItem } from './Nav.styles';

const Nav = () => {
	return (
		<Container>
			<NavItem to={'/'}>HOME</NavItem>
			<NavItem to={'names-comparison'}>NAMES</NavItem>
			<NavItem to={'opt'}>OPT</NavItem>
		</Container>
	);
};

export default Nav;
