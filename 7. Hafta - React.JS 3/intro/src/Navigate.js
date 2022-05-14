import React, { Component } from 'react';
import { NavbarText, DropdownItem,NavItem,NavLink,Nav,UncontrolledDropdown, Row, Col,NavbarBrand,Collapse,Navbar,DropdownToggle,NavbarToggler,DropdownMenu } from "reactstrap";
import SepetOzeti from './SepetOzeti'

class Navigate extends Component {
	render() {
		return (
			<div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      Sepetim.com
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
        <SepetOzeti 
		sepettenCikar={this.props.sepettenCikar}
		sepet={this.props.sepet}/>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
		);
	}
}

export default Navigate;