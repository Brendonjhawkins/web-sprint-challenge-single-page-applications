
import React, { useState, useEffect } from "react";
import {NavLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Asset from './Assets/Logo.png'
import * as yup from "yup";
import formSchema from "./Validation/schema";
import axios from "axios";
import Home from "./Components/Home";
import Form from './Components/Form';


const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  olives: false,
  onions: false,
  peppers: false,
  instructions: ''
}
const initialFormErrors = {
  name: 'Name is required.',
  size: 'Size is required.',
}



export default function App (){
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const postPizza = pizza => {
    axios.post('https://reqres.in/api/pizza', pizza)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
      setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {setFormErrors({...formErrors, [name]: ''})})
      .catch(err => {setFormErrors({...formErrors, [name]: err.errors[0]})})
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const formSubmit = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'olives', 'onions', 'peppers'].filter(topping => formValues[topping])
    }
    postPizza(pizza)
  }
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

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
      <Route path="/pizza" id='pizza-form'>
        <Form id='pizza-form' 
        values={formValues} 
        change={inputChange} 
        submit={formSubmit} 
        errors={formErrors} 
        disabled = {disabled}
        />
     </Route>
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