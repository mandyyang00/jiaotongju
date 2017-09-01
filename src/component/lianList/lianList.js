import React from 'react'
import './lianlist.css'

import axios from 'axios'
import {url} from '../config'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'





class LianList extends React.Component{
	constructor(){
		super()
		this.state={
			data:[],
			lianPCid:null
		}
	}
	componentDidMount(){

		axios.post(`${url}/FilingService/GetList`)
			.then(res=>
				this.chaXun(res)
				
			)
			.catch(err=>console.log(err))
	}
	chaXun(res){
		this.setState({
			data:res.data
		})
	}

	handleClick(aa,event){
		console.log(aa)
		axios.post(`${url}/FilingService/GetFiling`,{ID:aa})
			.then(res=>
				this.setState({lianPCid:res.data.ID})
				
			)
			.catch(err=>console.log(err))

		sessionStorage.setItem('lianPCid',aa)
	}
	loginOut(){
			sessionStorage.setItem('userId','')
			sessionStorage.setItem('lianPCid','')
			sessionStorage.setItem('xianchangId','')
			sessionStorage.setItem('xunwenId','')
		}



	render(){
		let {data}=this.state
		console.log(data)

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






			<div className='lianlist' style={{'margin':'0 auto'}}>
			
				<h1>清单</h1>
				
				<table>
					<thead>
						<tr>
								<td style={{'width':'50px'}}>序号</td>
								<td style={{'width':'100px'}}>名称</td>
								<td style={{'width':'200px'}}>立案时间</td>
								<td style={{'width':'300px'}}>立案原因</td>
								<td style={{'width':'150px'}}>申请人</td>
								<td style={{'width':'100px'}}>备注</td>
								<td style={{'width':'50px'}}>查询</td>
						</tr>
					</thead>
						
					{data.length===0 ? '加载中': 
					data.map((item,index)=>	
					
					<tbody key={item.ID}>
						<tr>
							<td style={{'width':'50px'}}>{index+1}</td>
							<td style={{'width':'100px'}}>立案审批表</td >
							<td style={{'width':'200px'}}>{item.AcceptTime}</td>
							<td style={{'width':'300px'}}>{item.Reason}</td>
							<td style={{'width':'150px'}}>{item.ManagerSign}</td>
							<td style={{'width':'100px'}}>{item.Memo}</td>
							<td style={{'width':'50px'}}>
								<Link to='/lian'>
									<button style={{'lineHeight':'25px','width':'45px'}} onClick={this.handleClick.bind(this,item.ID)}>查询
									</button>
								</Link>
							</td>
						</tr>

					</tbody>
					)}
						
				</table>


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


export default LianList