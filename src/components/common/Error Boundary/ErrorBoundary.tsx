import React, {Component} from "react";
type stateType = {
     hasError: boolean
}
class ErrorBoundary extends Component <any, stateType>{
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: {}, errorInfo: any) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state?.hasError) {
            return <h1 className="f-cartoon tc white f2 mt5"> Oooops ! Something went wrong ...</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;