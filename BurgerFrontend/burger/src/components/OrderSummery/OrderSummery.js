import React from "react";
import Aux from "../../hoc/Aux";
import Button from "../UI/Button/Button";

class OrderSummery extends React.Component {

    render() {
        const ingredientList = Object.keys(this.props.ingredients).map(igkey => {
            return <li>{igkey} : {this.props.ingredients[igkey]}</li>
        });
        return (
            <Aux>
                <h2>Your Order</h2>
                <p>A delicious burger with the following ingredients :</p>
                <ul>
                    {ingredientList}
                </ul>
                <h3>Continue to Checkout?</h3>
                <Button clicked={this.props.cancelButton} btnType="Danger">Cancel</Button>
                <Button clicked={this.props.continueButton} btnType="Success">Continue</Button>
            </Aux>
        );
    }
}

export default OrderSummery;