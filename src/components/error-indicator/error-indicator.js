import React from 'react';
import './error-indicator.css'

const ErrorIndicator = ()  => {
    return (
        <div className="error-indicator">
        <span>Boom</span>
        <span>something has gone terribly wrong</span>
        <span>but we are gonna fix this</span>
        </div>
    )
}

export default ErrorIndicator;