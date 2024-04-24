const create = React.createElement;

export class Field extends React.Component {
    // #count;
    constructor(props) {
        super(props);

    }

    render() {

        return React.createElement(
            'div',
            null,
            React.createElement('label', { className: `${this.props.formType}` }, this.props.formType),
            React.createElement(
                'div',
                null,
                React.createElement('input', { className: `${this.props.formType}` })
            )
        );
    }
};