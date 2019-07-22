import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.div`

a {
    width: 200px;
    height: 59px;
    background-color: ${props => props.buttoncolor}; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    color: ${props => props.textcolor};
}

a:hover {
    text-decoration: none;
    background-color: #81021C;
}
`

class BookNow extends Component {

    
    render(){
        console.log("Buttons", this.props.buttoncolor)
        
        return (
        <Button buttoncolor={this.props.buttoncolor} textcolor={this.props.textcolor} >
            <a id="book-now" href="#" target="_blank">book now</a>
        </Button>

        );
    }
}



export default (BookNow);
