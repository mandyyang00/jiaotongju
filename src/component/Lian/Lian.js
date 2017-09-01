import React from 'react'

import './lian.css'
import { connect } from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {url} from '../config'
import {Icon} from 'antd'


class Lian extends React.Component{
	constructor(){
		super()
		this.state={
			data:[],
			xianchangId:null,
			xunwenId:null
		}
	}
	componentDidMount(){
		let ID=sessionStorage.lianPCid
		axios.post(`${url}/FilingService/GetFiling`,{ID:ID})
			.then(res=>
				this.idOk(res)
			)
			.catch(err=>console.log(err))
		
	}

	idOk(res){
		this.setState({
			data:res.data,
				xianchangId:res.data.SceneRecordID,
				xunwenId:res.data.AskRecordID
		})
		sessionStorage.setItem('xianchangId',res.data.SceneRecordID)
		sessionStorage.setItem('xunwenId',res.data.AskRecordID)
	}

	goBack(){
		axios.post(`${url}/FilingService/GetList`)
			.then(res=>this.goBackDone(res))
			.catch(err=>console.log(err))
	}
	goBackDone(res){
		console.log('sdfdf',res)
		sessionStorage('lianPCid','')
		sessionStorage('xianchangId','')
		sessionStorage('xunwenId','')

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











			<div className='lian'>
				
				<h1>立案审批表</h1>
				{data.length===0 ? '加载中' :
				
				<div >
					<div className='title'>
					<input type="text" value={data.Code1}/>
					<span >罚案</span>
					<span style={{'border':'0','width':'10px'}}>(</span><input type="text" style={{'border':'0','width':'40px'}} value={data.Code2}/><span style={{'border':'0','width':'10px'}}>)</span>
					
					<input type="text" value={data.Code3}/>
					<span>号</span>
				</div>
				
				<div className='content'>
					<table>
						<tr>
							<td className='first'>案件<br/>来源</td>
							<td colSpan='4'>
								<input type="text" style={{'width':'380px','border':'0','outline':'0'}} value={data.Basis}/>
							</td>
							<td className='four'  value={data.Code1}>受案时间</td>
							<td colSpan='2'>
								<input type="text" style={{'width':'330px','border':'0','outline':'0'}} value={data.AcceptSignTime}/>
							</td>
						</tr>
						<tr>
							<td>案由</td>
							<td colSpan='7'>
								<input type="text" style={{'width':'930px','border':'0','outline':'0'}} value={data.Source}/>
							</td>
						</tr>
						<tr>
							<td rowSpan='4'>当<br/>事<br/>人<br/>基<br/>本<br/>情<br/>况</td>
							<td rowSpan='2' className='second'>公民</td>
							<td className='third'>姓名</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}}  value={data.InvolvedName}/>
							</td>
							<td className='third' >性别</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}} value={data.InvolvedSex}/>
							</td>
							<td className='four'>年龄</td>
							<td>
								<input type="text" style={{'width':'250px','border':'0','outline':'0'}} value={data.InvolvedIDCode}/>
							</td>
						</tr>
						<tr>
							<td>住址</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0' }} value={data.InvolvedAddress}/>
							</td>
							<td>身份<br/>证号</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}} value={data.InvolvedIDCode}/>
							</td>
							<td>联系电话</td>
							<td>
								<input type="text" style={{'width':'250px','border':'0','outline':'0'}} value={data.InvolvedTelNo}/>
							</td>
						</tr>
						<tr>
							<td rowSpan='2'>法人<br/>或其<br/>他组<br/>织</td>
							<td>名称</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'507px','border':'0','outline':'0'}} value={data.InvolvedDepartment}/>
							</td>
							<td>法定<br/>代表人</td>
							<td>
								<input type="text" style={{'width':'250px','border':'0','outline':'0'}} value={data.InvolvedIDCode}/>
							</td>
						</tr>
						<tr>
							<td>地址</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'507px','border':'0','outline':'0'}} value={data.InvolvedAddress}/>
							</td>
							<td>联系<br/>电话</td>
							<td>
								<input type="text" style={{'width':'250px','border':'0','outline':'0'}} value={data.InvolvedTelNo}/>
							</td>
						</tr>
						<tr>
							<td>案件<br/>基本<br/>情况</td>
							<td colSpan='7'>
								
								<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'900px','border':'0','outline':'0'}} value={data.PrimaryContent}></textarea>
							</td>
						</tr>
						<tr>
							<td>立<br/>案<br/>依<br/>据</td>
							<td colSpan='4'>
								<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'380px','border':'0','outline':'0'}}  value={data.Basis}></textarea>
							</td>
							<td>受案<br/>机构<br/>意见</td>
							<td colSpan='2'>
								<textarea name="" id="" cols="30" rows="4"
									 style={{'width':'300px','border':'0','outline':'0'}}  readOnly='readonly'></textarea>
								<p style={{'textIndent':'150px','lineHeight':'20px'}}>签名:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} readOnly='readonly'/>
								</p>
								<p style={{'textIndent':'150px','lineHeight':'20px'}}>时间:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} readOnly='readonly'/>
								</p>
								
							</td>
						</tr>
						<tr>
							<td>负<br/>责<br/>人<br/>审<br/>批<br/>意<br/>见</td>
							<td colSpan='7'>
								<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'900px','border':'0','outline':'0'}} readOnly='readonly'></textarea>
								<p style={{'textIndent':'650px','lineHeight':'20px'}}>签名:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} readOnly='readonly'/>
								</p>
								<p style={{'textIndent':'650px','lineHeight':'20px'}}>时间:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} readOnly='readonly'/>
								</p>
							</td>
						</tr>
						<tr>
							<td>备<br/>注</td>
							<td colSpan='7'>
								<input type="text" style={{'width':'930px','border':'0','outline':'0'}} value={data.Memo}/>
							</td>
						</tr>

					</table>
					
					
					
					
				</div> 
			</div>}

				
				
				<Link to='./xianchangbilu'><button>查询现场笔录</button></Link>
				<Link to='./xunwenbilu'><button>查询询问笔录</button></Link>
				<Link to='./zhengju'><button>新增证据登记保存清单</button></Link>
				<Link to='./cheliang'><button>车辆暂扣凭证</button></Link>
				<Link to='./yijianshu'><button>提交</button></Link>
				<Link to='./lianlist'><button onClick={this.goBack.bind(this)}>返回</button></Link>
				
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


// const mapStateToProps = (state) => ({
//   currentUser: state.account.currentUser,
//   isAuthenticated: state.account.isAuthenticated
// })
// export default connect(mapStateToProps)(Sidebar)

export default Lian