import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'




class Header extends React.Component{
	loginOut(){
		sessionStorage.setItem('userId','')
		sessionStorage.setItem('lianPCid','')
		sessionStorage.setItem('xianchangId','')
		sessionStorage.setItem('xunwenId','')
	}
	render(){
		return(
			<div className='header'>
				<div className='title clearfix'>
					<h2 class='littletitle'><b><i>秦皇岛市交通运输行政执法系统</i></b></h2>
					<p className='logout'><Icon type="smile-o" style={{'color':'white','fontSize':'14px'}}/> 欢迎进入</p>
					<p  className='logout' onClick={this.loginOut.bind(this)}><Icon type="poweroff" style={{'color':'white','fontSize':'14px'}}/>退出系统
					</p>
					<div className='head'>
						<p>首页<Icon type="right"/><span>sdgsahgh</span></p>
					</div>
					<div className='content'>
						<div className='sidebar'>
							<div>

							</div>
						</div>
					</div>
				</div>
			
			</div>
		)
	}
}





export default Header