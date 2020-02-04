import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import './BuildControler.css'

const controls = [
    {label: "Salad", type: "Salad"},
    {label: "Meat", type: "Meat"},
    {label: "Bacon", type: "Bacon"},
    {label: "Cheese", type: "Cheese"}
];

const buildControler = (props) => (
    <div className='BuildControls'>
        <h5>Total Price : <strong>{props.totalPrice.toFixed(2)}</strong></h5>
        {controls.map(key =>
            <BuildControl
                label={key.label}
                More_Button={() => props.Click_More(key.type)}
                Less_Button={() => props.Click_Less(key.type)}
                disable={props.disableInfo[key.type]}
            />
        )}
        <button className='OrderButton' disabled={props.check_out} onClick={props.purchasing}>Check out</button>
        {/*<input type="checkbox" value="Bread_top" checked disabled/>*/}
        {/*Bread top<br/>*/}
        {/*<input type="checkbox" onClick={props.Click} value="Cheese"  name="Cheese"/>*/}
        {/*<input type="number" onChange={props.Changed}  min="1" max="3" name="Cheese"/>*/}
        {/*Cheese<br/>*/}
        {/*<input type="checkbox" onClick={props.Click} value="Meat"  name="Meat"/>*/}
        {/*<input type="number" onChange={props.Changed}  min="1" max="3" name="Meat"/>*/}
        {/*Meat<br/>*/}
        {/*<input type="checkbox" onClick={props.Click} value="Salad" name="Salad"/>*/}
        {/*<input type="number" onChange={props.Changed}  min="1" max="3" name="Salad"/>*/}
        {/*Salad<br/>*/}
        {/*<input type="checkbox" onClick={props.Click} value="Bacon" name="Bacon"/>*/}
        {/*<input type="number" onChange={props.Changed}  min="1" max="3" name="Bacon"/>*/}
        {/*Bacon<br/>*/}
        {/*<input type="checkbox" value="Bread_Bottom" checked disabled/>*/}
        {/*Bread bottom<br/>*/}
    </div>
);

export default buildControler;