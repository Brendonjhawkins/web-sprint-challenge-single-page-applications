
import React, { useState, useEffect } from "react";
import {NavLink, Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
import styled from "styled-components";
// import * as yup from "yup";
// import schema from "./Validation/schema";
// import axios from "axios";


const Container = styled.div`
  * {
    padding: 0px;
    margin: 0px;
    font-family: san-serif;
    text-align: center;
  }
  nav{
    display: flex;
    justify-content: bottom;
    align-items: center;
    align-content:center;
    width: 100%;
    background-color: white;
    padding-bottom: 20px;
    color:black;
    border: black 1px;
  }
  .store-header{
    width: 50%;
  }
  .nav-links{
    width: 50%;
    text-align: center;
    color: white;
    text-decoration: none;
    border: black 1px;
  }
`;



export default function App() {
  
  return (
    <Container>
        <nav>
        <h1 className='store-header'>Lambda EATS</h1>
        <div className='nav-links'>
          <NavLink to='/' className="link">Home</NavLink>
        </div>
      </nav>

    </Container>
  );
}