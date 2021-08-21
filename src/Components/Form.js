import styled from "styled-components";
import React from 'react';
import Assets from '../Assets/Pizza.jpg'

const PizzaForm = (props) => {
    const { values, submit, change, errors, disabled} = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <FormStyle className='formstyle' id='pizza-form'>
            <div className = "pizzaFormDiv">
            <h1>Build your own pizza!</h1>
            <img src={Assets}/>
            <form onSubmit = {onSubmit}>
                <div className = "errors">
                    <p>{errors.name}</p>
                    <p>{errors.size}</p>
                </div>

                <label><h3>Your name</h3>
                    <h4>Required</h4>
                    <input name = "name" type="text" value = {values.name} onChange={onChange} />
                </label>
                
                <label><h3>Choice of size</h3>
                    <h4>Required</h4>
                    <select id='size-dropdown'
                    onChange={onChange}
                    value={values.size}
                    name='size'>
                        <option value = ''>--Select size--</option>
                        <option value = 'small'>Small</option>
                        <option value = 'medium'>Medium</option>
                        <option value = 'large'>Large</option>
                    </select>
                </label>

                <label><h3>Add Toppings</h3>
                    <h4>Choose up to 4</h4>
                    <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                    />
                    </label>

                    <label>Olives
                    <input 
                        type='checkbox'
                        name='olives'
                        onChange={onChange}
                        />
                    </label>

                    <label>Onions
                    <input 
                        type='checkbox'
                        name='onions'
                        onChange={onChange}
                        />
                    </label>

                    <label>Peppers
                    <input 
                        type='checkbox'
                        name='peppers'
                        onChange={onChange}
                        />
                    </label>
                </label>

                <label id='special-text'>
                <h3>Special Instructions</h3>
                <input style = {{width: '50%', marginLeft:'4%'}} name = 'instructions' type = 'text' onChange={onChange} value = {values.instructions}/>
                </label>

                <button id = "submit" disabled={disabled}>Order Pizza</button>
            </form>
            </div>
        </FormStyle>
    );
    };
export default PizzaForm;

const FormStyle = styled.div `
.formstyle{
    padding-top: 20px;
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
}
.pizzaFormDiv{
width:75%;
background-color: white;

color: black
}
h1{
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
  -webkit-background-clip: text;
  color: transparent;
}
`