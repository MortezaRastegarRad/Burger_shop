import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import './CheckoutSummary.css';


const CheckoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <h1 className={{margin: "center"}}>we hope tastes well!</h1>
            <div className={{width: "100%", margin: "center"}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType={"Danger"} clicked={props.CancleCheckout}>Cancle</Button>
            <Button btnType={"Success"} clicked={props.ContinueCheckout}>Continue</Button>
        </div>
    );
}


export default CheckoutSummary;