import React, { Component } from 'react';
import styled from "styled-components";

const Cont = styled.div`
padding-top:2rem;
padding-bottom:3rem;
padding-left:10rem;
display:block;
width:50rem;
`;

const HomePageSearch = () =>
<Cont>

    <input placeholder="Anywhere" />
    <input placeholder="Anytime" />

</ Cont>


export default HomePageSearch;
