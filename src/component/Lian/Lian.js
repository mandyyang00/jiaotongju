import React from 'react'
import Header from '../Header/Header'
import './lian.css'
import { connect } from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {url} from '../config'


class Lian extends React.Component{
	constructor(){
		super()
		this.state={
			data:[]
		}
	}
	componentDidMount(){
		axios.post(`${url}/FilingService/GetList`)
			.then(res=>
				this.setState({data:res.data})
				
			)
			.catch(err=>console.log(err))
	}
	render(){
		let {data}=this.state
		console.log(data)
		return(
			<div className='lian'>
				<Header title='立案审批表'></Header>
				{data.length===0 ? '加载中' :
				data.map(item=>
				<div key={item.ID }>
					<div className='title'>
					<input type="text" value={item.Code1}/>
					<span >罚案</span>
					<span style={{'border':'0','width':'10px'}}>(</span><input type="text" style={{'border':'0','width':'40px'}} value={item.Code2}/><span style={{'border':'0','width':'10px'}}>)</span>
					
					<input type="text" value={item.Code3}/>
					<span>号</span>
				</div>
				
				<div className='content'>
					<table>
						<tr>
							<td className='first'>案件<br/>来源</td>
							<td colSpan='4'>
								<input type="text" style={{'width':'380px','border':'0','outline':'0'}} value={item.Source}/>
							</td>
							<td className='four'  value={item.Reason}>受案时间</td>
							<td colSpan='2'>
								<input type="text" style={{'width':'330px','border':'0','outline':'0'}} value={item.AcceptTime}/>
							</td>
						</tr>
						<tr>
							<td>案由</td>
							<td colSpan='7'>
								<input type="text" style={{'width':'930px','border':'0','outline':'0'}} value={item.Reason}/>
							</td>
						</tr>
						<tr>
							<td rowSpan='4'>当<br/>事<br/>人<br/>基<br/>本<br/>情<br/>况</td>
							<td rowSpan='2' className='second'>公民</td>
							<td className='third'>姓名</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}}  value={item.InvolvedName}/>
							</td>
							<td className='third' >性别</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}} value={item.InvolvedSex}/>
							</td>
							<td className='four'>年龄</td>
							<td>
								<input type="text" style={{'width':'250px','border':'0','outline':'0'}} value={item.InvolvedIDCode}/>
							</td>
						</tr>
						<tr>
							<td>住址</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0' }} value={item.InvolvedAddress}/>
							</td>
							<td>身份<br/>证号</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}} value={item.InvolvedIDCode}/>
							</td>
							<td>联系电话</td>
							<td>
								<input type="text" style={{'width':'250px','border':'0','outline':'0'}} value={item.InvolvedTelNo}/>
							</td>
						</tr>
						<tr>
							<td rowSpan='2'>法人<br/>或其<br/>他组<br/>织</td>
							<td>名称</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'507px','border':'0','outline':'0'}} value={item.InvolvedDepartment}/>
							</td>
							<td>法定<br/>代表人</td>
							<td>
								<input type="text" style={{'width':'250px','border':'0','outline':'0'}} value={item.InvolvedIDCode}/>
							</td>
						</tr>
						<tr>
							<td>地址</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'507px','border':'0','outline':'0'}} value={item.InvolvedIDCode}/>
							</td>
							<td>联系<br/>电话</td>
							<td>
								<input type="text" style={{'width':'250px','border':'0','outline':'0'}} value={item.InvolvedIDCode}/>
							</td>
						</tr>
						<tr>
							<td>案件<br/>基本<br/>情况</td>
							<td colSpan='7'>
								
								<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'900px','border':'0','outline':'0'}} value={item.PrimaryContent}></textarea>
							</td>
						</tr>
						<tr>
							<td>立<br/>案<br/>依<br/>据</td>
							<td colSpan='4'>
								<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'380px','border':'0','outline':'0'}}  value={item.Basis}></textarea>
							</td>
							<td>受案<br/>机构<br/>意见</td>
							<td colSpan='2'>
								<textarea name="" id="" cols="30" rows="4"
									 style={{'width':'300px','border':'0','outline':'0'}}  value={item.AcceptContent}></textarea>
								<p style={{'textIndent':'150px','lineHeight':'20px'}}>签名:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} value={item.AcceptSign}/>
								</p>
								<p style={{'textIndent':'150px','lineHeight':'20px'}}>时间:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} value={item.AcceptSignTime}/>
								</p>
							</td>
						</tr>
						<tr>
							<td>负<br/>责<br/>人<br/>审<br/>批<br/>意<br/>见</td>
							<td colSpan='7'>
								<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'900px','border':'0','outline':'0'}} value={item.ManagerContent}></textarea>
								<p style={{'textIndent':'650px','lineHeight':'20px'}}>签名:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} value={item.ManagerSign}/>
								</p>
								<p style={{'textIndent':'650px','lineHeight':'20px'}}>时间:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} value={item.ManageSignTime}/>
								</p>
							</td>
						</tr>
						<tr>
							<td>备<br/>注</td>
							<td colSpan='7'>
								<input type="text" style={{'width':'930px','border':'0','outline':'0'}} value={item.Memo}/>
							</td>
						</tr>

					</table>
					
					
					
					
				</div> 
			</div>)}

				}
				
				<Link to='./xianchangbilu'><button type='submit'>现场笔录</button></Link>
				<Link to='./xunwenbilu'><button type='submit'>询问笔录</button></Link>
				<Link to='./zhengju'><button type='submit'>证据登记保存清单</button></Link>
				<Link to='./cheliang'><button type='submit'>车辆暂扣凭证</button></Link>
				<Link to='./yijianshu'><button type='submit'>提交</button></Link>
				<Link to='./lianlist'><button>返回</button></Link>
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