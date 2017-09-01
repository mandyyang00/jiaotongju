import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import './chufajieanbaogao.css'




class Chufajieanbaogao extends React.Component{
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
					<h2 class='littletitless'><b><i>秦皇岛市交通运输行政执法系统</i></b></h2>
					<p className='logoutss'><Icon type="smile-o" style={{'color':'white','fontSize':'14px'}}/> 欢迎进入</p>
					<p  className='logoutss' onClick={this.loginOut.bind(this)}><Link to='/'><button><Icon type="poweroff" style={{'color':'white','fontSize':'14px'}}/> 退出登陆</button></Link>
					</p>
				</div>
				<div className='headss'>
					<p>首页<Icon type="right"/><span>处罚结案报告</span></p>
				</div>
				<div className='contentss clearfix'>
					<div className='sidebarss'>
						<ul>
							<li><Link to='/lian'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>立案审批表</span></Link></li>
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
						


						<div className='chufajieanbaogao'>
							<h1>处罚结案报告</h1>
							<div className='content'>
								<p style={{'textAlign':'left'}}>案件名称：
									<input type="text" className='title'/>
								</p>
								<table>
									<tr>
										<td rowSpan='5' style={{'width': '50px'}}>当事<br/>人基<br/>本情<br/>况</td>
										<td  style={{'width': '100px'}}>公民</td>
										<td  style={{'width': '26%'}}>
											<input type="text"/>
										</td>
										<td  style={{'width': '60px'}}>年龄</td>
										<td style={{'width': '20%'}}>
											<input type="text"/>
										</td>
										<td style={{'width': '60px'}}>性别</td>
										<td style={{'width': '20%'}}>
											<input type="text"/>
										</td>
									</tr>
									<tr>
										<td>所在单位</td>
										<td>
											<input type="text"/>
										</td>
										<td>联系地址</td>
										<td colSpan='3'>
											<input type="text"/>
										</td>
									</tr>
									<tr>
										<td>联系电话</td>
										<td>
											<input type="text"/>
										</td>
										<td>邮编</td>
										<td colSpan='3'>
											<input type="text"/>
										</td>
									</tr>
									<tr>
										<td>法人或其他组织</td>
										<td>
											<input type="text"/>
										</td>
										<td>地址</td>
										<td colSpan='3'>
											<input type="text"/>
										</td>
									</tr>
									<tr>
										<td>法定代表人</td>
										<td>
											<input type="text"/>
										</td>
										<td>职务</td>
										<td colSpan='3'>
											<input type="text"/>
										</td>
									</tr>
									<tr>
										<td>处理<br/>结果</td>
										<td colSpan='6'>
											<textarea name="" id="" cols="30" rows="4">
											</textarea>
										</td>
									</tr>
									<tr>
										<td>执行<br/>情况</td>
										<td colSpan='6'>
											<textarea name="" id="" cols="30" rows="4">
											</textarea>
											<p>执法人员签名：
												<input type="text" className='title'/> 、 
												<input type="text" className='title'/>
											</p>
											<p style={{'marginBottom':'5px','marginRight':'60px'}}>
												<input type="text" className='time'/>年
												<input type="text" className='time'/>月
												<input type="text" className='time'/>日
											</p>
										</td>
									</tr>
									<tr>
										<td>法制<br/>工作<br/>机构<br/>审核<br/>意见</td>
										<td colSpan='2'>
											<textarea name="" id="" cols="30" rows="4">
											</textarea>
											<p>签名：
												<input type="text" className='title'/> 
											</p>
											<p style={{'marginBottom':'5px','marginRight':'60px'}}>
												<input type="text" className='time'/>年
												<input type="text" className='time'/>月
												<input type="text" className='time'/>日
											</p>
										</td>
										<td>行政<br/>执法<br/>机关<br/>审批<br/>意见</td>
										<td colSpan='3'>
											<textarea name="" id="" cols="30" rows="4">
											</textarea>
											<p>签名：
												<input type="text" className='title'/> 
											</p>
											<p style={{'marginBottom':'5px','marginRight':'60px'}}>
												<input type="text" className='time'/>年
												<input type="text" className='time'/>月
												<input type="text" className='time'/>日
											</p>
										</td>
									</tr>
								</table>

							</div>
						</div>





					</div>
				</div>
				<p className='footerss'>
					
						什么什么公司
					
				</p>
					
				
			
			</div>
		)
	}
}

export default Chufajieanbaogao