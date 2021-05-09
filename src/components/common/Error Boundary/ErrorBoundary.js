import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1 className="f-cartoon tc white f2 mt5"> Oooops ! Something went wrong ...</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;