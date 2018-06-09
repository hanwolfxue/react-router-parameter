import React, {Component} from 'react';
import './App.css';

class State extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: this.props.location.state
		}
	}

	render() {
		return (
			<div>
				<div>
					<h3>state传值</h3>
					<div>获得得值</div>
					<div>{this.state.name}</div>
				</div>
			</div>
		);
	}
}

export default State;
