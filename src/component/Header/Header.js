import React from 'react'
import './header.css'




const Header = ({ title }) => (
  <div className="header">
  		<ul className='clearfix'>
  			<li>立案审批表</li>
  			<li>证据登记保存清单</li>
  			<li>车辆暂扣凭证</li>
			<li>现场笔录</li>
  			<li>询问笔录</li>
  		</ul>
	  <h1>
			{ title }
	  </h1>
    
  </div>
)





export default Header