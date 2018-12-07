import React, { Component } from 'react';
import base from './Firebase';

export const AppContext = React.createContext();

export class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.ref = base.syncState('Names', {
            context: this,
            state: 'names',
            asArray: true,
            then() {
                this.setState({ loading: false });
            },
        });
    }

    shiftNames = () => {
        const { names } = this.state;
        const firstItem = names.shift();

        this.setState({
            names: [...names, firstItem],
        });
    };

    addName = item => {
        const { names } = this.state;

        this.setState({
            names: [...names, item],
        });
    };

    removeName = index => {
        const { names } = this.state;
        names.splice(index, 1);

        this.setState({
            names: names,
        });
    };

    render() {
        const { children } = this.props;

        return (
            <AppContext.Provider
                value={{
                    names: this.state.names,
                    shiftNames: this.shiftNames,
                    addName: this.addName,
                    removeName: this.removeName,
                }}
            >
                {children}
            </AppContext.Provider>
        );
    }
}

export const AppConsumer = AppContext.Consumer;
