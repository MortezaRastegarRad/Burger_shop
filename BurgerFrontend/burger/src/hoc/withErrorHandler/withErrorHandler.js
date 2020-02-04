import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from '../Aux';


const withErrorHandler = (WrappedComponent, axios) => {

    return class extends React.Component {

        state = {
            error: null
        }

        errorConfirmHandler = () => {
            this.setState({ error: null })
        }


        componentWillMount() {
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            this.resInterceptors = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.resInterceptors)
            axios.interceptors.request.eject(this.reqInterceptors)
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} handler={this.errorConfirmHandler}>
                        {this.state.error ? "some things went wrong" : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}


export default withErrorHandler;