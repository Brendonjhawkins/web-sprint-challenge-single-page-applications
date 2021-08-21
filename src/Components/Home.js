import React from 'react';
import { useHistory } from 'react-router-dom'
import Assets from '../Assets/Pizza.jpg'

import styled from "styled-components";

export default function Home() {
    const history = useHistory()

  const routeToOrder = () => {
    // console.log(history)
        history.push('/pizza')
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
        id='order-pizza'>
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
            <p>23-39 min</p>
            <p>$5.99 Delivery Fee</p>
        </div>
        <div className='food-opt'>
            <img src='https://images-platform.99static.com//oHOdDseQfI62toEzzqwiqiPZqu4=/576x50:1149x623/fit-in/500x500/99designs-contests-attachments/58/58919/attachment_58919838' className='deliv-img'/>
            <h5>Bitter Greens</h5>
            <p>$$ Semi-Healthy - Salads & Juice</p>
            <p>50-60 min</p>
            <p>$9.99 Delivery Fee</p>
        </div>
        <div className='food-opt'>
            <img src='https://i.pinimg.com/originals/fd/32/1a/fd321a3faceb17c0293b6cfba9a76af3.jpg' className='deliv-img'/>
            <h5>Comet Dollars</h5>
            <p>$ Cafe - Coffee</p>
            <p>10-25 min</p>
            <p>No Delivery Fee</p>
        </div>
      </div>
      <div className='bttm-img'>
            <img src='https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-6-510x492.jpg?resize=600%2C579'className='deliv-img'/>
            <img src='https://mariettasquaremarket.com/wp-content/uploads/2018/12/Pita-Mediterranean-4.jpg'className='deliv-img'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzD1NZ80clUsog9E-vaBeJMPwqHmFo1M1HDA&usqp=CAU'className='deliv-img'/>
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
    height: auto;
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
      padding: 20px;
      display: flex;

  }
  .food-sec{
    width: 100%;
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content: space-around;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
  }
  .food-opt{
      display: flex;
      flex-direction: column;
  }
  .deliv-img{
    width: 300px;
    height: 300px;
  }
  .bttm-img{
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      height: auto;
      justify-content: space-evenly;
      padding-bottom: 20px
      ;
  }
  `