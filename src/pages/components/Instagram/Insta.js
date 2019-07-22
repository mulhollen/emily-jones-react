import React, { Component } from 'react';
import styled from 'styled-components';

const InstaContainer = styled.div`
  display: flex;

`

class Instagram extends Component {
    
    render(){

        
        return (
        <InstaContainer>
             <h3><a href="" target="_blank">&_emilyajones</a></h3>
            <div id="instafeed"></div>
        </InstaContainer>

        );
    }
}



export default (Instagram);
