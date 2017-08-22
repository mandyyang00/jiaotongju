import React from 'react';
import Login from './component/Login/Login'
import Header from './component/Header/Header'
import Lian from './component/Lian/Lian'
import Zhengju from './component/Zhengju/Zhengju'
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
	      	<div>
	      		<Route path='/' exact component={Login} />
	        	<Route path='/lian:id' exact component={Lian} />
            <Route path='/zhengju' exact component={Zhengju} />
	      	</div>
	      </div>
      </HashRouter>
    );
  }
}

export default App;
