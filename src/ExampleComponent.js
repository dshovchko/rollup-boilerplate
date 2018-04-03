import React from "react";
import PropTypes from 'prop-types';

export default class ExampleComponent extends React.Component {
    
    render() {
        return (
            <div>
                <h3>Hello, {this.props.name}!</h3>
                <p>It is example component.</p>
            </div>
        );
    }
}

ExampleComponent.defaultProps = {
    name: 'stranger'
}

ExampleComponent.propTypes = {
    name: PropTypes.string.isRequired
}
