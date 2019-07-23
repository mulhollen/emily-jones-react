import React, { Component } from 'react';
import styled from 'styled-components';

const FooterComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #000;
  padding-top: 1rem;
  margin-top: 1rem;
  
  
  p {
    color: #fff;
    margin-left: .75rem;
    line-height: .75rem;
  }
  
    div {
        margin-left: 1rem;
    }

  .fa-instagram {
    color: #fff;
    width: 25px;
    height: 25px;
  }

`

class Footer extends Component {
    
    render(){

        
        return (
        <FooterComponent>
            <p>hello@emilyajones.com</p>
            <p>hours</p>
                <div>
                    <p>monday: 10-5</p>
                    <p>sunday: 12-5</p>
                </div>
            <i class="fab fa-instagram"></i>
        </FooterComponent>

        );
    }
}



export default (Footer);
