import React, { Component } from 'react';
import styled from 'styled-components';

const FooterComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  padding-top: 1rem;
  
  
  p {
    color: #2B040A;
    margin-left: .75rem;
    line-height: .75rem;
  }
  
    div {
        margin-left: 1rem;
    }

  .fa-instagram {
    color: #2B040A;
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
