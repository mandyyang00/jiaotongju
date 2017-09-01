import React from 'react'

import './zhengju.css'
import {
  Link
} from 'react-router-dom'
import {url} from '../config'
import axios from 'axios'
import {message} from 'antd'
import {Icon} from 'antd'





class Zhengju extends React.Component{
	constructor(){
		super()
		this.state={
			data:null,
			zhengjuId:null,
			
			
		}
	}
	componentDidMount(){
		let ID=sessionStorage.lianPCid
		axios.post(`${url}/EvidenceService/AddEvidence`,{FilingID:ID})
			.then(res=>this.handleOk(res))
			.catch(err=>console.log(err))


		// 
		// axios.post(`${url}/FilingService/GetFiling`,{ID:ID})
		// 	.then(res=>
		// 		this.idOk(res)
		// 	)
		// 	.catch(err=>console.log(err))
	}
	handleOk(res){
		console.log(res)
		this.setState({
			data:res.data,
			zhengjuId:res.data.ID
		})
		sessionStorage.setItem('zhengjuId',res.data.ID)
	}

	// idOk(res){
	// 	console.log(res)
	// 	this.setState({
	// 		data:res.data
	// 	})
	// }

	goBack(){
		let name2=document.querySelector('.name2').value
		let address2=document.querySelector('.address2').value
		let farendaibiao=document.querySelector('.farendaibiao').value
		let tel2=document.querySelector('.tel2').value
		let where=document.querySelector('.where').value
		let dangshiren=document.querySelector('.dangshiren').value
		let year=document.querySelector('.year').value
		let month=document.querySelector('.month').value
		let day=document.querySelector('.day').value
		let namesign1=document.querySelector('.namesign1').value
		let namesign2=document.querySelector('.namesign2').value
		let codeid=document.querySelector('.codeid').value
		let year1=document.querySelector('.year1').value
		let month1=document.querySelector('.month1').value
		let day1=document.querySelector('.day1').value

		
		let ID =sessionStorage.lianPCid
		if(
				name2.length!==0 && name2.trim()!=='' &&
				address2.length!==0 && address2.trim()!=='' &&
				farendaibiao.length!==0 && farendaibiao.trim()!=='' &&
				tel2.length!==0 && tel2.trim()!=='' &&
				where.length!==0 && where.trim()!=='' &&
				dangshiren.length!==0 && dangshiren.trim()!=='' &&
				year.length!==0 && year.trim()!=='' &&
				month.length!==0 && month.trim()!=='' &&
				day.length!==0 && day.trim()!=='' &&
				namesign1.length!==0 && namesign1.trim()!=='' &&
				namesign2.length!==0 && namesign2.trim()!=='' &&
				codeid.length!==0 && codeid.trim()!=='' &&
				year1.length!==0 && year1.trim()!=='' &&
				month1.length!==0 && month1.trim()!=='' &&
				day1.length!==0 && day1.trim()!==''
			){
				axios.post(`${url}`,)
		}else{
			message.error('资料填写不完整')
		}

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









			<div className='zhengju'>
		
				<h1>证据登记保存清单</h1>
				{!data ? '加载中' :
				<div>
					<div style={{'margin':'0 auto'}} className='content'>
						<table className='table'>
							<tr>
								<td rowSpan='7' className='title'>当<br/>事<br/>人</td>
								<td rowSpan="3" className='title'>公民</td>
								<td className='small'>姓名</td>
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}  className='name1' value={data.Filing.InvolvedName}/></td>
								<td  className='small'>性别</td>
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}  className='sex' value={data.Filing.InvolvedName}/></td>
								<td  className='small'>年龄</td>
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}   className='old' value={data.Filing.InvolvedName}/></td>
							</tr>
							<tr>
								<td  className='small'>电话</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0' }}   className='tel1' value={data.Filing.InvolvedName}/></td>
								<td  className='small'>职业</td>
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}   className='work' value={data.Filing.InvolvedName}/></td>
							</tr>
							<tr>
								<td className='small'>住址</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}   className='address1' value={data.Filing.InvolvedName}/></td>
								<td ></td>
								<td></td>
							</tr>
							<tr>
								<td rowSpan="4" className='title'>法人<br/>或者<br/>其他<br/>组织</td>
								<td  className='small'>名称</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}  className='name2' value={data.Filing.InvolvedName}/></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td  className='small'>地址</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}  className='address2' value={data.Filing.InvolvedName}/></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td  className='small' style={{'width':'80px'}}>法人代表</td>
								<td colSpan="5"><input type="text" style={{'width':'800px','border':'0','outline':'0'}}  className='farendaibiao' value={data.Filing.InvolvedName}/></td>
								
							</tr>
							<tr>
								<td  className='small'>联系电话</td>
								<td colSpan="5"><input type="text"  style={{'width':'800px','border':'0','outline':'0'}}  className='tel2' value={data.Filing.InvolvedName}/></td>
								
							</tr>


						</table>
					</div>

					<p className='middle'>
							根据《中华人民共和国行政处罚法》第三十七条第二款的规定，需对你（单位）下列物品登记保存。在7日内当事人或有关人员不得销毁或转移。请
							<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}} className='dangshiren'/>
							于<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}} className='year'/>
							年<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}} className='month'/>
							月<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}} className='day'/>
							日前到<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}}  className='where'/>接受处理。
							<Link to='zhengjulist'><button>增加证据清单</button></Link>
							
					</p>
					
					<div className='down clearfix'>
						<p>
							被取证人（或其代理人）签名及时间：
							<br/><input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}}  className='namesign1'/>
						</p>
						<p style={{'float':'right'}}>
							执法人员签名 执法证件号：
							<br/><input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}}  className='namesign2'/>
							<br/><input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}} className='codeid'/>
						</p>

					</div>
				
					<p className='footer'>
					行政执法机关（印章）<br/>
					<input type="text" style={{'width':'50px','border':'0','outline':'0'}}  className='year1'/>
							年<input type="text" style={{'width':'50px','border':'0','outline':'0'}}  className='month1'/>
							月<input type="text" style={{'width':'50px','border':'0','outline':'0'}} className='day1'/>
							日
							<br/>
							(本文书一式两份：一份存根，一份交当事人或者代理人)


					</p>
				</div>}			
				<Link to='/lian'><button onClick={this.goBack.bind(this)}>保存并返回</button></Link>
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

export default Zhengju