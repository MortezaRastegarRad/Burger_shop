import React from "react";

import Aux from '../../hoc/Aux_Children';
import Burger from '../../components/Burger/Burger'
import BuildControler from '../../components/BuildControler/BuildControler'
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/OrderSummery/OrderSummery";
import axios from '../../axios-orders';
import Spinners from "../../components/UI/Spinners/Spinners";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICE = {
    Bacon: 0.7,
    Meat: 1.3,
    Salad: 0.5,
    Cheese: 0.8
};

class BurgerBuilder extends React.Component {


    state = {
        ingredients: {
            "Bread_top": 1,
            "Cheese": 0,
            "Meat": 0,
            "Bacon": 0,
            "Salad": 0,
            "Bread_bottom": 1
        },
        error: false,
        count_purchase: 1,
        totalPrice: 0.5,
        checkout: true,
        purchasing: false,
        loading: false,
        // ingredients: [{name: 'Bread_top', number: 1}, {name: 'Bread_bottom', number: 1}]
    };

    componentDidMount() {
        axios.get("get_order/")
            .then(response => {
                console.log(response.data.data);
                this.setState({ ingredients: response.data.data, count_purchase: response.data.reserved });
                this.Purchase(this.state.ingredients);
                return response
            })
            .catch(error => {
                this.setState({ error: true })
            });
    }

    Purchase(ingredients) {
        const sum = Object.keys(ingredients).map(igkey =>
            ingredients[igkey]
        ).reduce((sum, el) => sum + el, 0);
        this.setState({ checkout: !(sum > 2) })
    }

    addIngredient = (type) => { // اگر از ارو فانشن استفاده کنیم کلمهthis اشاره اش به خود کلس ولی اگه از نوع معمولی فانشن استفاده کنیم this به خود تابع اشاره میکنه و به ارور میخوریم
        const instance = { ...this.state.ingredients };
        const oldCount = instance[type];
        instance[type] = oldCount + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({ ingredients: instance, totalPrice: newPrice });
        this.Purchase(instance)
    };

    purchasingHandler = () => (this.state.purchasing ? this.setState({ purchasing: false }) : this.setState({ purchasing: true }));

    removeIngredient(type) {
        const instance = { ...this.state.ingredients };
        const oldCount = instance[type];
        if (oldCount === 0) {
            return;
        }
        instance[type] = oldCount - 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({ ingredients: instance, totalPrice: newPrice });
        this.Purchase(instance);
    }

    continueButton = () => {
        // this.setState({ loading: true });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'morteza',
        //         address: {
        //             street: 'street 1',
        //             zipcode: '2123123',
        //         },
        //         email: "mori.rad98@gmail.com"
        //     }
        // };
        // axios.post('set_order/', order)
        //     .then(response => {
        //         this.setState({ loading: false, purchasing: false })
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false, purchasing: false });
        //         console.log(error)
        //     });
        this.props.history.push('/checkout')
    };


    ChangeIngredient(event) {
        const ingredient = event.target.value;
        const name = event.target.name;
        let ingredients = [...this.state.ingredients];
        let instance = ingredients.filter(item => item.name === name);
        const bread_bottom = ingredients.pop();
        if (ingredient === 0) {
            ingredients = ingredients.filter(item => item.name !== ingredient);
        } else {
            ingredients = ingredients.filter(item => item.name !== name);
            instance[0].number = Number(ingredient);
            ingredients.push(instance[0])
        }
        ingredients.push(bread_bottom);
        this.setState({ ingredients: ingredients });
    }

    ClickIngredient(event) {
        const ingredient = event.target.value;
        const _name = event.target.name;
        const Boolean = event.target.checked;
        let ingredients = [...this.state.ingredients];
        const bread_bottom = ingredients.pop();
        if (Boolean) {
            ingredients.push({ name: _name, number: 1 });
        } else {
            ingredients = ingredients.filter(item => item.name !== ingredient);
        }
        ingredients.push(bread_bottom);
        this.setState({ ingredients: ingredients });
    }

    render() {
        const disableInfo = { ...this.state.ingredients };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        let order = null;

        let burger = this.state.error ? <p>fetching data went wrong</p> : <Spinners />
        order = < OrderSummery ingredients={this.state.ingredients}
            cancelButton={this.purchasingHandler}
            continueButton={this.continueButton} />;

        if (this.state.loading) {
            order = <Spinners />
        }

        if (!(this.state.ingredients.Bacon === 0 && this.state.ingredients.Cheese === 0 && this.state.ingredients.Salad === 0 && this.state.ingredients.Meat === 0) || this.state.count_purchase === 0) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControler Click_More={this.addIngredient}
                        Click_Less={this.removeIngredient.bind(this)}
                        totalPrice={this.state.totalPrice}
                        disableInfo={disableInfo}
                        check_out={this.state.checkout}
                        purchasing={this.purchasingHandler}
                    />
                </Aux>
            );
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} handler={this.purchasingHandler}>
                    {order}
                </Modal>
                {burger}
            </Aux>
        )
    }
}


export default withErrorHandler(BurgerBuilder, axios);