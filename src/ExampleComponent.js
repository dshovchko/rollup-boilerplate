import React from "react";

export default class ExampleComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello, {this.props.name}!</h3>
                <p>It's example component.</p>
            </div>
        );
    }
}
