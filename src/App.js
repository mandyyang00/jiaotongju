import React from 'react';
import Header from './component/Header/Header'
import Nav from './component/share/Nav/Nav'
import Login from './component/Login/Login'
import Lian from './component/Lian/Lian'
import Zhengju from './component/Zhengju/Zhengju'
import Cheliang from './component/Cheliang/Cheliang'
import Yijianshu from './component/Yijianshu/Yijianshu'
import Xianchangbilu from './component/Xianchangbilu/Xianchangbilu'
import Xunwenbilu from './component/Xunwenbilu/Xunwenbilu'
import LianList from './component/lianList/lianList'
import Yijianshulist from './component/Yijianshulist/Yijianshulist'
import Zhengjulist from './component/Zhengjulist/Zhengjulist'
import Zelinggaizhengtongzhishu from './component/Zelinggaizhengtongzhishu/Zelinggaizhengtongzhishu'
import Anjianchuliyijianshu from './component/Anjianchuliyijianshu/Anjianchuliyijianshu'
import Chufajieanbaogao from './component/Chufajieanbaogao/Chufajieanbaogao'
import Jiaotongweifaxingweidiaochabaogao from './component/Jiaotongweifaxingweidiaochabaogao/Jiaotongweifaxingweidiaochabaogao'
import Jiaotongxingzhengzhifaanjianjieanbaogao from './component/Jiaotongxingzhengzhifaanjianjieanbaogao/Jiaotongxingzhengzhifaanjianjieanbaogao'
import Weifaxingweitongzhishu from './component/Weifaxingweitongzhishu/Weifaxingweitongzhishu'
import Wenshusongdahuizheng from './component/Wenshusongdahuizheng/Wenshusongdahuizheng'
import Xingzhengchufajuedingshu from './component/Xingzhengchufajuedingshu/Xingzhengchufajuedingshu'

import 'antd/dist/antd.css';
import './App.css'
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './component/Header/header.css'



class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
    	<HashRouter>

	    	<div className='app'>
          
          <div>
        
            <Route path='/' exact component={Login} />
            <Route path='/yijianshulist' component={Yijianshulist} />
            <Route path='/lianlist' exact component={LianList} />
            <Route path='/lian' exact component={Lian} />
            <Route path='/zhengju' exact component={Zhengju} />
            <Route path='/zhengjulist' exact component={Zhengjulist} />
            <Route path='/cheliang' exact component={Cheliang}/>
            <Route path='/yijianshu' exact component={Yijianshu}/>
            <Route path='/xianchangbilu' exact component={Xianchangbilu}/>
            <Route path='/xunwenbilu' exact component={Xunwenbilu}/>
            <Route path='/nav' component={Nav} />
            <Route path='/header' component={Header} />
            <Route path='/zelinggaizhengtongzhishu' component={Zelinggaizhengtongzhishu} />
	      	</div>
	      </div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
