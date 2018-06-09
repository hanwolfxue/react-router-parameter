import React, {Component} from 'react';
import {Switch, Route, Link, HashRouter} from 'react-router-dom'
import Path from './Path'
import Query from './Query'
import State from './State'
import logo from './logo.svg';
import './App.css';

class App extends Component {

	render() {
		var query = {
			pathname: '/query',
			query: '我是通过query传值 '
		}
		var state = {
			pathname: '/state',
			state: '我是通过state传值'
		}
		return (
			<HashRouter>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo"/>
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<div className="App-intro">
						<div><Link to="/path/通过通配符传参">通配符</Link></div>
						<div><Link to={query}>query</Link></div>
						<div><Link to={state}>state</Link></div>
					</div>
					<div>
						<h3>内容</h3>
						<Switch>
							<Route path='/path/:name' component={Path}/>
							<Route path='/query' component={Query}/>
							<Route path='/state' component={State}/>
						</Switch>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
