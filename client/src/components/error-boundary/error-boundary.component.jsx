import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles';
 
class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return {hasErrored: true}
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if(this.state.hasErrored) {
            return(
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/Q2BAOd2.png' />
                    <ErrorImageText>Sorry something went wrong from our side!!</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return(this.props.children)
    }
}

export default ErrorBoundary;