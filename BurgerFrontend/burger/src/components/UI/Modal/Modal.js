import React from "react";
import Aux from '../../../hoc/Aux_Children'
import './Modal.css'
import Backdrop from "../backdrop/Backdrop";

class Modal extends React.Component {

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} handler={this.props.handler}/>
                <div
                    className='Modal'
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;