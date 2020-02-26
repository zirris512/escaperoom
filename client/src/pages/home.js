import React from 'react';
import 'pages/home.scss';
import { Link } from 'react-router-dom'
import styled, { keyframes } from "styled-components";
import BounceIn from "@bit/formidablelabs.react-animations.bounce-in";
const BounceInAnimation = keyframes`${BounceIn}`;
const BounceInDiv = styled.div`
  animation: infinite 12s ${BounceInAnimation};
`;

function home() {
  return (
    <div className='homeScreen'>
      <div>
        <BounceInDiv><h1>ESCAPE</h1></BounceInDiv>
      </div>
      <div className='buttons'>
        <Link className='start' to="/register">Register</Link>
        <Link className='logIn'to="/logIn">Log In</Link>
        </div>

    </div>
  );
}


export default home
