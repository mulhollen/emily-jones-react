import React, { Component } from 'react';
import styled from 'styled-components';

// accepts textcolor={'string'}

const Button = styled.div`

a {
    width: 200px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    color: ${props => props.textcolor};
    border: 2px solid ${props => props.textcolor};
    border-radius: 4px;
}

a:hover {
    text-decoration: underline;
    // background-color: #3E0609;
}
`

class BookNow extends Component {

    
    render(){
        
        return (
        <Button textcolor={this.props.textcolor} >
            <a id="book-now" href="#" target="_blank">book now</a>
        </Button>

        );
    }
}



export default (BookNow);
