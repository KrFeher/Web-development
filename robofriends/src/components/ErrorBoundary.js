import React from 'react';

class ErrorBoundary extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hasErrors : true
        }
    }

    componentDidCatch(error,info) {
        this.setState({hasErrors: true});
    }

    render() {
        if (this.state.hasErrors === true) {
            return (    
                <h1> Oooops, something went wrong </h1>
            )
        } else {
            return (
                this.props.children
            )
        }
    }

}

export default ErrorBoundary;