import React from 'react'

import {
  Link
} from 'react-router-dom'
import {Icon} from 'antd'
import Cheliang from '../Cheliang/Cheliang'
import Chufajieanbaogao from '../Chufajieanbaogao/Chufajieanbaogao'
import Jiaotongweifaxingweidiaochabaogao from '../Jiaotongweifaxingweidiaochabaogao/Jiaotongweifaxingweidiaochabaogao'
import Lian from '../Lian/Lian'
import lianList from '../lianList/lianList'
import Weifaxingweitongzhishu from '../Weifaxingweitongzhishu/Weifaxingweitongzhishu'
import Wenshusongdahuizheng from '../Wenshusongdahuizheng/Wenshusongdahuizheng'
import Xianchangbilu from '../Xianchangbilu/Xianchangbilu'
import Xingzhengchufajuedingshu from '../Xingzhengchufajuedingshu/Xingzhengchufajuedingshu'
import Yijianshu from '../Yijianshu/Yijianshu'
import Yijianshulist from '../Yijianshulist/Yijianshulist'
import Zelinggaizhengtongzhishu from '../Zelinggaizhengtongzhishu/Zelinggaizhengtongzhishu'
import Zhengju from '../Zhengju/Zhengju'





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
					<p  className='logoutss' onClick={this.loginOut.bind(this)}><Link to='/'><button><Icon type="poweroff" style={{'color':'white','fontSize':'14px'}}/> 退出登陆</button></Link>
					</p>
				</div>
				<div className='headss'>
					<p>首页<Icon type="right"/><span>首页</span></p>
				</div>
				<div className='contentss clearfix'>
					<div className='sidebarss'>
						<ul>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>立案审批表</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>现场笔录</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>询问笔录</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>证据登记保存清单</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>车辆暂扣凭证</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>责令改正通知书</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>案件处理意见书</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>违法行为通知书</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>行政处罚决定书</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>文书送达回证</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>处罚结案报告</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>交通违法行为调查报告</span></li>
							<li><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>交通行政执法案件结案报告</span></li>
						</ul>
					</div>
					<div className='content1ss'>
						<Jiaotongweifaxingweidiaochabaogao></Jiaotongweifaxingweidiaochabaogao>
						
			         
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