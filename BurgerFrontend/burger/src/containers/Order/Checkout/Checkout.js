import React from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../../components/CheckoutSummary/CheckoutSummary';
import Aux_Children from '../../../hoc/Aux_Children'
import ContactData from '../Contact/ContactData';

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

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            // console.log(param);
            //['bacon' : '1']
            ingredients[param[0]] = +param[1];
        }
        // console.log(ingredients);
        this.setState({ingredients: ingredients})
    }

    ContinueCheckoutHandler = () => {

        this.props.history.replace('/checkout/contact-data')

    };

    render() {
        return (
            <Aux_Children>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    CancleCheckout={this.CancleCheckoutHandler}
                    ContinueCheckout={this.ContinueCheckoutHandler}
                />
                <Route path={"/checkout/contact-data"}  component={ContactData}/>
            </Aux_Children>
        );
    }
}

export default Checkout;