import React, {Component} from 'react';
import Row from '../row';
import { PlanetDetails, PlanetList } from '../sw-components';

export default class PeoplePage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    }

    render() {
        return (
            <Row left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={this.state.selectedItem} />} />
        )
    }
}
