import React, {Component} from 'react';
import './App.css';

class Query extends Component {
	constructor(props) {
		super(props)
		this.state = {
			query: this.props.location.query
		}
	}

	render() {
		return (
			<div>
				<div>
					<h3>query传值</h3>
					<div>获得得值</div>
					<div>{this.state.query}</div>
				</div>
			</div>
		);
	}
}

export default Query;
