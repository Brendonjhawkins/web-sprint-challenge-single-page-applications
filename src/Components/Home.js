import React from 'react';
import { useHistory } from 'react-router-dom'
import Assets from '../Assets/Pizza.jpg'

import styled from "styled-components";

export default function Home() {
    const history = useHistory()

  const routeToOrder = () => {
    // console.log(history)
        history.push('/items-list')
  }

  return (
    <HomeContainer>
      <div className='header-img'>
        <img
        className='home-image'
        src={Assets}
        alt='PIZZAAAAAA'
      />
        <h1> Your Favorite Food Delivered While Coding</h1>
      </div>
      <button
        onClick={routeToOrder}
        className='md-button shop-button'
      >
        ORDER
      </button>
      <div className='opt-header'>
      <h3>Food Delivery in Your Town</h3>
      </div>
      <div className='food-sec'>
        <div className='food-opt'>
            <img src='https://fansided.com/files/2012/10/mcjordan.jpg' className='deliv-img'/>
            <h5>McMichael Jordan</h5>
            <p>$ American Fast Food - Burgers</p>
            <button>23-39 min</button>
            <button>$5.99 Delivery Fee</button>
        </div>
      </div>
    </HomeContainer>
  )
};

const HomeContainer = styled.div `
* {
    padding: 0px;
    margin: 0px;
    font-family: san-serif;
    text-align: center;
  }
  h1{
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
  -webkit-background-clip: text;
  color: transparent;
  border-bottom: 3px white;

  }
  button{
      margin-top: -300px;
      padding: 10px;
      padding-left: 20px;
      padding-right: 20px;
  }
  .opt-header{

  }
  .food-sec{
    display: flex;
    flex-direction: row;
    height: 75vh;
  }
  .food-opt{
      display: flex;
      flex-direction: column;
  }
  `