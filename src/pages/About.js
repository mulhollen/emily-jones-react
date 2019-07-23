import React, { Component } from 'react';
import styled from 'styled-components';
//pages
import InstaGrid from './components/Instagram/Insta';
import Footer from './components/Footer';
//assets
import ejabout from '../img/emilyAbout.png';

const AboutPage = styled.div`
    margin-top: 70px;

    img {
        width: 100%;
        object-fit: cover;
    }

     > div {
         position: relative;
         top: -103px;
     }
    
    h1 {
        width: 300px;
        color: #fff;
        margin-left: 1rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    p {
        margin: 1rem 2.5rem;
    }
`



class About extends Component {

  render() {
    return (
      <AboutPage>
          <img src={ejabout} alt="Woman sitting resting her head on her hand" />
          <div>
                <h1>SKIN CARE AND BEAUTY FOR ALL</h1>
                <div>
                    <p>
                    Four dollar toast forage wolf chia 8-bit marfa af selvage sartorial. Shoreditch air plant letterpress cred, truffaut actually pickled ramps. Affogato semiotics pug migas gluten-free everyday carry twee pinterest single-origin coffee. Swag poutine meggings, cardigan tumblr gentrify roof party literally bitters prism cold-pressed ramps chambray disrupt. Gastropub yr godard hexagon, unicorn shabby chic lomo tumblr everyday carry migas. Venmo portland cray 3 wolf moon you probably haven't heard of them.
                    </p>
                </div>
          </div>
          <InstaGrid account="_emilyajones" numberOfMediaElements={4} />
          <Footer />
      </AboutPage>
    );
  }
}

export default About;