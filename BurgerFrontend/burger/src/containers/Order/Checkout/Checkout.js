import React from 'react';
import CheckoutSummary from '../../../components/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {

    state = {
        ingredients: {
            "Bread_top": 1,
            "Cheese": 1,
            "Meat": 1,
            "Bacon": 1,
            "Salad": 1,
            "Bread_bottom": 1
        },
    };
    CancleCheckoutHandler = () => {
        this.props.history.goBack()
    };

    ContinueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact-data/')
    };

    render() {
        return (
            <CheckoutSummary
                ingredients={this.state.ingredients}
                CancleCheckout={this.CancleCheckoutHandler}
                ContinueCheckout={this.ContinueCheckoutHandler}
            />
        );
    }
}

export default Checkout;