
import React, { useState, useEffect } from "react";
import {NavLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Asset from './Assets/Logo.png'
// import * as yup from "yup";
// import schema from "./Validation/schema";
// import axios from "axios";
import Home from "./Components/Home";
import Form from './Components/Form';
import FormDetails from './Components/FormDetails'




export default function App() {
  
  return (
    <Container>
        <nav>
        <img src={Asset} className='store-header'/>
        <div className='nav-links'>
          <button className='home-button'>
          <NavLink to='/' className="link">
            <h2>HOME</h2>
            </NavLink>
          </button>
        </div>
      </nav>
      <Switch>
      {/* <Route  path='/items-list'>
        <ItemsList items={stock} />
      </Route> */}
      <Route exact path='/'>
        <Home />
      </Route>
      </Switch>
    </Container>
  );
}

const Container = styled.div`
  * {
    padding: 0px;
    margin: 0px;
    font-family: san-serif;
    text-align: center;
  }
  nav{
    display: flex;
    width: 100%;
    background-color: black;
    border: black 1px;
  }
  .store-header{
    width: 50%;
    height: auto;
    text-align: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-links{
    width: 50%;
    text-align: center;
    color: white;
    text-decoration: none;
    border: black 1px;
  }
  .home-button{
    padding: 20px;
    text-decoration: none;
    border:none;
    background-color: white;
  }
  .link{
    text-decoration: none;
    color:black;
  }
  img{
    width: 100%;
    height: 60vh
  }
`;