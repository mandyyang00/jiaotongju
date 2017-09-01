import React from 'react'

import {
  Link
} from 'react-router-dom'
import {Icon} from 'antd'
import Cheliang from '../Cheliang/Cheliang'





class Header extends React.Component{
	
	loginOut(){
		sessionStorage.setItem('userId','')
		sessionStorage.setItem('lianPCid','')
		sessionStorage.setItem('xianchangId','')
		sessionStorage.setItem('xunwenId','')
	}
	render(){
		return(
			<div className='headerss'>

				<div className='titless clearfix'>
					<h2 className='littletitless'><b><i>秦皇岛市交通运输行政执法系统</i></b></h2>
					<p className='logoutss'><Icon type="smile-o" style={{'color':'white','fontSize':'14px'}}/> 欢迎进入</p>
					<p  className='logoutss' onClick={this.loginOut.bind(this)}><button><Icon type="poweroff" style={{'color':'white','fontSize':'14px'}}/> 退出登陆</button>
					</p>
				</div>
				<div className='headss'>
					<p>首页<Icon type="right"/><span>首页</span></p>
				</div>
				<div className='contentss clearfix'>
					<div className='sidebarss'>
						<ul>
							<li><Link to='/lianlist'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>立案审批表</span></Link></li>
							<li><Link to='/xianchangbilu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>现场笔录</span></Link></li>
							<li><Link to='/xunwenbilu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>询问笔录</span></Link></li>
							<li><Link to='/zhengju'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>证据登记保存清单</span></Link></li>
							<li><Link to='/cheliang'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>车辆暂扣凭证</span></Link></li>
							<li><Link to='/zelinggaizhengtongzhishu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>责令改正通知书</span></Link></li>
							<li><Link to='/anjianchuliyijianshu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>案件处理意见书</span></Link></li>
							<li><Link to='/weifaxingweitongzhishu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>违法行为通知书</span></Link></li>
							<li><Link to='/xingzhengchufajuedingshu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>行政处罚决定书</span></Link></li>
							<li><Link to='/wenshusongdahuizheng'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>文书送达回证</span></Link></li>
							<li><Link to='/chufajieanbaogao'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>处罚结案报告</span></Link></li>
							<li><Link to='/jiaotongweifaxingweidiaochabaogao'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>交通违法行为调查报告</span></Link></li>
							<li><Link to='/jiaotongxingzhengzhifaanjianjieanbaogao'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>交通行政执法案件结案报告</span></Link></li>
						</ul>
					</div>
					<div className='content1ss'>
						<Cheliang></Cheliang>
						
			         
					</div>
				</div>
				<p className='footerss'>
					
						什么什么公司
					
				</p>
					
				
			
			</div>
		)
	}
}





export default Header