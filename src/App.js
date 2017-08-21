import React from 'react';
import Login from './component/Login/Login'
import Header from './component/Header/Header'
import 'antd/dist/antd.css';
import './App.css'
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
    	<HashRouter>
	    	<div className='app'>
	    		<Header></Header>
	      	<div>
	      		<Route path='/' exact component={Login} />
	        	
	      	</div>
	      </div>
      </HashRouter>
    );
  }
}

export default App;
