import React, { Component } from 'react';
import styled from "styled-components";



const Cont = styled.div`
padding-top:7rem;
padding-bottom:3rem;
padding-left:10rem;
display:block;
width:50rem;
`;

const Header = {
  color:'#FF5A5F',
  fontSize:'48px',
};

const Text = {
  color: '#484848',
  fontSize:'48px',
}

const WelcomeBanner = () =>
<Cont >
<span style={Header}> Airbnb </span>
<span style={Text}> <br />Book unique homes and experience a city like a local</span>
</ Cont>

export default WelcomeBanner;
