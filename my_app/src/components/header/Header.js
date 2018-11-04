import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            headerStyle:{backgroundColor: this.props.backgroundColor }
        };
       
    }

	render () {
		return(
            <div className="header" style={this.state.headerStyle}>
			
			</div>
		);
	}
}

export default Header;
		
		