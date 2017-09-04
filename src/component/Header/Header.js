import React from 'react'

import {
  Link
} from 'react-router-dom'
import {Icon} from 'antd'

import Xunwenbilu from '../Xunwenbilu/Xunwenbilu'

import Cheliang from '../Cheliang/Cheliang'
import Chufajieanbaogao from '../Chufajieanbaogao/Chufajieanbaogao'
import Jiaotongweifaxingweidiaochabaogao from '../Jiaotongweifaxingweidiaochabaogao/Jiaotongweifaxingweidiaochabaogao'
import Jiaotongxingzhengzhifaanjianjieanbaogao from '../Jiaotongxingzhengzhifaanjianjieanbaogao/Jiaotongxingzhengzhifaanjianjieanbaogao'
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
	constructor(){
		super()
		this.state={
			which:{
				aa:<p><i>秦皇岛市交通运输<br/>行政执法系统</i></p>,
				bb:'首页'
			}
		}
	}
	onClick(names){
		if(names=='立案审批表'){
			this.setState({
				which:{
					aa:<lianList></lianList>,
					bb:'立案审批表'
				}

			})
		}else if(names=='询问笔录'){
			this.setState({
					which:{
						aa:<Xunwenbilu></Xunwenbilu>,
						bb:'询问笔录'
					}
			})

		}else if(names=='现场笔录'){
			this.setState({
					which:{
						aa:<Xianchangbilu></Xianchangbilu>,
						bb:'现场笔录'
					}
			})

		}else if(names=='证据登记保存清单'){
			this.setState({
					which:{
						aa:<zhengju></zhengju>,
						bb:'证据登记保存清单'
					}
			})

		}else if(names=='车辆暂扣凭证'){
			this.setState({
					which:{
						aa:<Cheliang></Cheliang>,
						bb:'车辆暂扣凭证'
					}
			})

		}else if(names=='责令改正通知书'){
			this.setState({
					which:{
						aa:<Zelinggaizhengtongzhishu></Zelinggaizhengtongzhishu>,
						bb:'责令改正通知书'
					}
			})

		}else if(names=='案件处理意见书'){
			this.setState({
					which:{
						aa:<Yijianshu></Yijianshu>,
						bb:'案件处理意见书'

					}
			})

		}else if(names=='违法行为通知书'){
			this.setState({
					which:{
						aa:<Weifaxingweitongzhishu></Weifaxingweitongzhishu>,
						bb:'违法行为通知书'
					}
			})

		}else if(names=='行政处罚决定书'){
			this.setState({
					which:{
						aa:<Xingzhengchufajuedingshu></Xingzhengchufajuedingshu>,
						bb:'行政处罚决定书'
					}
			})

		}else if(names=='文书送达回证'){
			this.setState({
					which:{
						aa:<Wenshusongdahuizheng></Wenshusongdahuizheng>,
						bb:'文书送达回证'
					}
			})

		}else if(names=='处罚结案报告'){
			this.setState({
					which:{
						aa:<Chufajieanbaogao></Chufajieanbaogao>,
						bb:'处罚结案报告'
					}
			})

		}else if(names=='交通违法行为调查报告'){
			this.setState({
					which:{
						aa:<Jiaotongweifaxingweidiaochabaogao></Jiaotongweifaxingweidiaochabaogao>,
						bb:'交通违法行为调查报告'
					}
			})

		}else if(names=='交通行政执法案件结案报告'){
			this.setState({
					which:{
						aa:<Jiaotongxingzhengzhifaanjianjieanbaogao></Jiaotongxingzhengzhifaanjianjieanbaogao>,
						bb:'交通行政执法案件结案报告'
					}
			})

		}
		
	}
	
	
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
					<p>首页<Icon type="right"/><span>{this.state.which.bb}</span></p>
				</div>
				<div className='contentss clearfix'>
					<div className='sidebarss'>
						<ul>
							<li  onClick={this.onClick.bind(this,'立案审批表')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>立案审批表</span></li>
							<li  onClick={this.onClick.bind(this,'现场笔录')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>现场笔录</span></li>
							<li onClick={this.onClick.bind(this,'询问笔录')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>询问笔录</span></li>
							<li onClick={this.onClick.bind(this,'证据登记保存清单')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>证据登记保存清单</span></li>
							<li onClick={this.onClick.bind(this,'车辆暂扣凭证')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>车辆暂扣凭证</span></li>
							<li onClick={this.onClick.bind(this,'责令改正通知书')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>责令改正通知书</span></li>
							<li onClick={this.onClick.bind(this,'案件处理意见书')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>案件处理意见书</span></li>
							<li onClick={this.onClick.bind(this,'违法行为通知书')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>违法行为通知书</span></li>
							<li onClick={this.onClick.bind(this,'行政处罚决定书')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>行政处罚决定书</span></li>
							<li onClick={this.onClick.bind(this,'文书送达回证')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>文书送达回证</span></li>
							<li onClick={this.onClick.bind(this,'处罚结案报告')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>处罚结案报告</span></li>
							<li onClick={this.onClick.bind(this,'交通违法行为调查报告')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>交通违法行为调查报告</span></li>
							<li onClick={this.onClick.bind(this,'交通行政执法案件结案报告')}><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>交通行政执法案件结案报告</span></li>
						</ul>
					</div>
					<div className='content1ss'>
						{this.state.which.aa}
						
			         
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