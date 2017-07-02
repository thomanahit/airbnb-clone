import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-flow: row;
  justify-content: space-between;
`;

const Experiencesinside = () =>
<Container>
 <p>
 Sports
 <img src='http://visualise.com/wp-content/uploads/2016/11/Snowboard.jpg'/>
 </p>
</Container>


export default Experiencesinside;
