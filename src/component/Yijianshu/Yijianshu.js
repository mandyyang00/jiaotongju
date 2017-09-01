import React from 'react'
import './yijianshu.css'

import {Link} from 'react-router-dom'
import {Icon} from 'antd'




class Yijianshu extends React.Component{

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
					<p>首页<Icon type="right"/><span>立案审批表</span></p>
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










      
				<div className='yijianshu'>
			
					<h1>案件处理意见书</h1>
					<div className='content'>
						<table>
							<tr>
								<td className='first'>案由</td>
								<td colSpan='5'>
									<input type="text" style={{'width':'620px','border':'0','outline':'0'}}/>
								</td>
								<td className='second'>案件调查<br/>人员</td>
								<td>
									<input type="text" style={{'width':'215px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td rowSpan='6'>当<br/>事<br/>人</td>
								<td rowSpan='2' className='second'>公民</td>
								<td className='second'>姓名</td>
								<td>
									<input type="text" style={{'width':'200px','border':'0','outline':'0'}}/>
								</td>
								<td className='second'>性别</td>
								<td>
									<input type="text" style={{'width':'200px','border':'0','outline':'0'}}/>
								</td>
								<td>年龄</td>
								<td>
									<input type="text" style={{'width':'215px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td>住址</td>
								<td colSpan='3'>
									<input type="text" style={{'width':'480px','border':'0','outline':'0'}}/>
								</td>
								<td>职业</td>
								<td>
									<input type="text" style={{'width':'200px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td rowSpan='4'>法人<br/>或者<br/>其他<br/>组织</td>
								<td>名称</td>
								<td colSpan='5'>
									<input type="text" style={{'width':'760px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td>法定<br/>代表人</td>
								<td colSpan='5'>
									<input type="text" style={{'width':'760px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td>地址</td>
								<td colSpan='5'>
									<input type="text" style={{'width':'760px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td>联系电话</td>
								<td colSpan='5'>
									<input type="text" style={{'width':'760px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td>案件<br/>调查<br/>经过<br/>及违<br/>法事<br/>实</td>
								<td colSpan='7'>
									<textarea name="" id="" cols="30" rows="10"
									 style={{'width':'920px','border':'0','outline':'0'}}></textarea>
									
								</td>
							</tr>
							<tr>
								<td rowSpan='7'>证据<br/>材料</td>
								<td >序号</td>
								<td colSpan='3'>证据名称</td>
								<td colSpan='2'>规格</td>
								<td>数量</td>
							</tr>
							<tr>
								<td>
									<input type="text" style={{'width':'80px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='3'>
									<input type="text" style={{'width':'360px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='2'>
									<input type="text" style={{'width':'280px','border':'0','outline':'0'}}/>
								</td>
								<td>
									<input type="text" style={{'width':'200px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td>
									<input type="text" style={{'width':'80px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='3'>
									<input type="text" style={{'width':'360px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='2'>
									<input type="text" style={{'width':'280px','border':'0','outline':'0'}}/>
								</td>
								<td>
									<input type="text" style={{'width':'200px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td>
									<input type="text" style={{'width':'80px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='3'>
									<input type="text" style={{'width':'360px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='2'>
									<input type="text" style={{'width':'280px','border':'0','outline':'0'}}/>
								</td>
								<td>
									<input type="text" style={{'width':'200px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td>
									<input type="text" style={{'width':'80px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='3'>
									<input type="text" style={{'width':'360px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='2'>
									<input type="text" style={{'width':'280px','border':'0','outline':'0'}}/>
								</td>
								<td>
									<input type="text" style={{'width':'200px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td>
									<input type="text" style={{'width':'80px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='3'>
									<input type="text" style={{'width':'360px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='2'>
									<input type="text" style={{'width':'280px','border':'0','outline':'0'}}/>
								</td>
								<td>
									<input type="text" style={{'width':'200px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td>
									<input type="text" style={{'width':'80px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='3'>
									<input type="text" style={{'width':'360px','border':'0','outline':'0'}}/>
								</td>
								<td colSpan='2'>
									<input type="text" style={{'width':'280px','border':'0','outline':'0'}}/>
								</td>
								<td>
									<input type="text" style={{'width':'200px','border':'0','outline':'0'}}/>
								</td>
							</tr>
							<tr>
								<td>调查<br/>结论<br/>和处<br/>理意<br/>见</td>
								<td colSpan='7'>
									<textarea name="" id="" cols="30" rows="10"
									 style={{'width':'920px','border':'0','outline':'0'}}></textarea>
									 <div>
										<p>执法人员签名:
											<input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}}/><br/>
											<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
											年<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
											月<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
											日
										</p>
									 </div>
								</td>
							</tr>
							<tr>
								<td>法制<br/>工作<br/>机构<br/>和审<br/>核意<br/>见</td>
								<td colSpan='7'>
									<textarea name="" id="" cols="30" rows="10"
									 style={{'width':'920px','border':'0','outline':'0'}}></textarea>
									 <div>
										<p>执法人员签名:
											<input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}}/><br/>
											<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
											年<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
											月<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
											日
										</p>
									 </div>
								</td>
							</tr>
							<tr>
								<td>行政<br/>执法<br/>机关<br/>意见</td>
								<td colSpan='7'>
									<textarea name="" id="" cols="30" rows="10"
									 style={{'width':'920px','border':'0','outline':'0'}}></textarea>
									 <div>
										<p>执法人员签名:
											<input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}}/><br/>
											<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
											年<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
											月<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
											日
										</p>
									 </div>
								</td>
							</tr>

						</table>


					</div>
					<Link to='./lian'><button>返回</button></Link>
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

export default Yijianshu