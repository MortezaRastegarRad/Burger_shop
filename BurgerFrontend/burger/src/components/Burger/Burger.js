import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import './Burger.css'

// const ingredient = (ingredients) => {
//     let l = [];
//     ingredients.forEach(ingredient => {
//         for (let j = 0; j < ingredient.number; j++) {
//             l.push(<BurgerIngredient type={ingredient.name}/>)
//         }
//     });
//     console.log(l);
//     return l;
// };

const burger = function (props) {
    const transform = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_) =>
            <BurgerIngredient type={igkey}/>
        )
    }).reduce((arr, el) => {
        return arr.concat(el);
    },[]);
    if (transform.length === 2){
        const instance = transform.pop();
        transform.push(<p className="p">please start adding ingredients</p>);
        transform.push(instance);
    }
    return (
        <div className="Burger">
            {transform}
            {/*{ingredient(props.ingredients)}*/}
        </div>
    );
};

export default burger;