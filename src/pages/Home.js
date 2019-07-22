import React from 'react';
import styled from 'styled-components';
//pages
import Instagram from './components/Instagram/Insta';
import Footer from './components/Footer';
//components
import BookNow from './components/BookNow';
//assets
import ejmain from '../img/ejmain.png';


const Main = styled.div`
    width: 100vw;
    background: url(${ejmain});
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.1) 100%), url(${ejmain});
    background-position: top;
    height: 88vh;
    margin-top: 40px;
    padding: 0 1.5rem;

    
    h1 {
        font-size: 4rem;
        padding: 4rem 0 1rem 0;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`



class Home extends React.Component {
    
    render(){
        return (
            <div id="homeWhereAmI">
                <Main>
                    <h1>in-home lash extensions for folx sick of namaste</h1>
                    <BookNow buttoncolor={'#81021C'} textcolor={"#fff"} />
                </Main>
                <Instagram />
                <Footer />
            </div>
        );
    }
}

export default Home;


