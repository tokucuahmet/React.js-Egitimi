import React, { Component } from 'react';
import { NavbarText, DropdownItem,NavItem,NavLink,Nav,UncontrolledDropdown, Row, Col,NavbarBrand,Collapse,Navbar,DropdownToggle,NavbarToggler,DropdownMenu,Badge } from "reactstrap";

class SepetOzeti extends Component {
	bosSepet(){
		return (
			<NavItem>
				<NavLink>
					Sepet Boş
				</NavLink>
			
			</NavItem>
		);
	}
	sepetOzeti(){
		return (
			<div>

<UncontrolledDropdown
         inNavbar
          nav>
          <DropdownToggle
            caret
            nav>
            Sepetiniz
          </DropdownToggle>

          <DropdownMenu right>
			  {this.props.sepet.map(sepetUyesi=>(
				  <DropdownItem key={sepetUyesi.urun.id}>
					<Badge color="danger" onClick={()=>this.props.sepettenCikar(sepetUyesi.urun)}>X</Badge>
					  {sepetUyesi.urun.productName}
				  <Badge color="success">{sepetUyesi.adet}</Badge>
				  </DropdownItem>
				 
			  )) 
			  }
            
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
				
			</div>
		)}
	render() 
	{
		return (
			<div>
			{this.props.sepet.length>0? this.sepetOzeti():this.bosSepet()}	
			</div>
		);
	}
}

export default SepetOzeti;