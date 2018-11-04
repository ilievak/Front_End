import React from 'react';
import './login.css';

class LoggingButton extends React.Component {
   
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Log In/Register
      </button>
        );
    }
}

export default LoggingButton;