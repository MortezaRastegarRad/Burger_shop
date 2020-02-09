import React from 'react';
import {Route} from 'react-router-dom';

import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./containers/BugerBuilder/BurgerBuilder"
import Checkout from './containers/Order/Checkout/Checkout';


function App() {
    return (
        <div>
            <Layout>
                <Route path='/checkout'   component={Checkout}/>
                <Route path='/'  exact component={BurgerBuilder}/>
            </Layout>
        </div>
    );
}

// /
// /checkout
// /checkout/contact-data

export default App;