import React, {Component} from 'react';
import './App.css';

class Path extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: this.props.match.params.name
		}
	}

	render() {
		return (
			<div>
				<div>
					<h3>通配符传值</h3>
					<div>获得得值</div>
					<div>{this.state.name}</div>
				</div>
			</div>
		);
	}
}

export default Path;
