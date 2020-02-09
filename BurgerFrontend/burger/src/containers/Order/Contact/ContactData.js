import React from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css"


class ContactData extends React.Component {
    state = {
        Name: "",
        Email: "",
        address: {
            Street: "",
            PostalCode: "",
        },
    };

    OrderHandler = (event) => {
        event.preventDefault();
        console.log(event)
    };

    render() {
        return (
            <div className="ContactData">
                <h1>Enter your contact data</h1>
                <form>
                    <input className="Input" type="text" placeholder="Name" name="Name"/>
                    <input className="Input" type="email" placeholder="Email" name="Email"/>
                    <input className="Input" type="text" placeholder="Address" name="Address"/>
                    <input className="Input" type="text" placeholder="PostalCode" name="PostalCode"/>
                    <Button btnType="Success" clicked={this.OrderHandler}>Order</Button>
                </form>
            </div>
        );
    };
}

export default ContactData;