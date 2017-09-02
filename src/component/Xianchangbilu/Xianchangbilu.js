import React from 'react'
import './xianchangbilu.css'

import {Link} from 'react-router-dom'
import axios from 'axios'
import {url} from '../config'
import {Icon} from 'antd'



class Xianchangbilu extends React.Component{
	constructor(){
		super()
		this.state={
			data:''
		}
	}
	componentDidMount(){
		let ID=sessionStorage.xianchangId
		axios.post(`${url}/SceneRecordService/GetSceneRecord`,{ID:ID})
			.then(res=>this.idOk(res))
			.catch(err=>console.log(err))
	}

	idOk(res){
		console.log(res)
		this.setState({
			data:res.data
		})
	}
	goBack(){
		let ID=sessionStorage.lianPCid
		axios.post(`${url}/FilingService/GetFiling`,{ID:ID})
			.then(res=>console.log(res))
			.catch(err=>console.log(err))
	}


	render(){
		let {data}= this.state
		return(
			







			<div className='xianchang'>
		
				<h1>现场笔录</h1>
				{!data ? '加载中' :
				<div className='content'>
				<table>
					<tr>
						<td className='first'>执法<br/>地点</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'350px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
						<td colSpan='2'>执法时间</td>
						<td colSpan='2'>
						<p>
							<input type="text" style={{'width':'50px','border':'0','outline':'0'}} value={data.Content}/>
							年<input type="text" style={{'width':'50px','border':'0','outline':'0'}} value={data.Content}/>
							月<input type="text" style={{'width':'50px','border':'0','outline':'0'}} value={data.Content}/>
							日
							<br/>
							<input type="text" style={{'width':'50px','border':'0','outline':'0'}} value={data.Content}/>
							时<input type="text" style={{'width':'50px','border':'0','outline':'0'}} value={data.Content}/>
							分至
							<input type="text" style={{'width':'50px','border':'0','outline':'0'}} value={data.Content}/>
							时<input type="text" style={{'width':'50px','border':'0','outline':'0'}} value={data.Content}/>
							分
						</p>
						</td>
					</tr>
					<tr>
						<td rowSpan='2'>执法<br/>人员</td>
						<td className='second'>
							<input type="text" style={{'width':'170px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
						<td rowSpan='2' className='second'>执法证号</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'160px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
						<td rowSpan='2' className='second'>记录人</td>
						<td rowSpan='2'  className='third'>
							<input type="text" style={{'width':'290px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
					</tr>
					<tr>
						<td>
							<input type="text" style={{'width':'170px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'160px','border':'0','outline':'0'}} value={data.Content}/>
						</td>

					</tr>
					<tr>
						<td rowSpan='5'>现场<br/>人员<br/>基本<br/>情况</td>
						<td >姓名</td>
						<td colSpan='2' className='third'>
							<input type="text" style={{'width':'167px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
						<td className='second'>性别</td>
						<td colSpan='2' >
							<input type="text" style={{'width':'410px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
					</tr>
					<tr>
						<td>身份证号</td>
						<td colSpan='2'>
						<input type="text" style={{'width':'167px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
						<td>与案件关系</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'410px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
					</tr>
					<tr>
						<td>单位及职务</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'167px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
						<td>联系电话</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'410px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
					</tr>
					<tr>
						<td>车（船）号</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'167px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
						<td>车（船）型</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'410px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
					</tr>
					<tr>
						<td>联系地址</td>
						<td colSpan='5'>
							<input type="text" style={{'width':'760px','border':'0','outline':'0'}} value={data.Content}/>
						</td>
					</tr>
					<tr>
						<td rowSpan='3'>主<br/>要<br/>内<br/>容</td>
						<td colSpan='6'>
							<p style={{'textAlign':'left','textIndent':'40px'}}>
								在检查中发现：<input type="text" style={{'width':'750px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Content}/>
							</p>
							<textarea name="" id="" cols="30" rows="10"
									 style={{'width':'920px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Content}>
							</textarea>
							<p style={{'textAlign':'left','textIndent':'40px'}}>
								上述笔录我已经看过（或已向我宣读过），情况属实无误。
							</p>
							<p style={{'textAlign':'right'}}>
								现场人员签名：<input type="text" style={{'width':'150px','border':'0','outline':'0'}} value={data.Content}/>
							</p>
							<p style={{'textAlign':'right','marginBottom':'20px'}}>
								时间：<input type="text" style={{'width':'150px','border':'0','outline':'0'}} value={data.Content}/>
							</p>
						</td>
						
					</tr>
					<tr>
						<td colSpan='6'>
							<p style={{'textAlign':'left','textIndent':'40px'}}>
								备注：<input type="text" style={{'width':'750px','border':'0','outline':'0'}} value={data.Content}/>
							</p>
						</td>
					</tr>
					<tr>
						<td colSpan='6'>
							<p style={{'textAlign':'left','textIndent':'40px','marginBottom':'10px'}}>
								执法人员签名：
								<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Content}/>
								<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','margin':' 0  40px'}} value={data.Content}/>
								    时间：
								 <input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','marginLeft':'20px'}} value={data.Content}/>
							</p>
						</td>
					</tr>
					
				</table>
				</div>}
				<Link to='./lian'><button onClick={this.goBack.bind(this)}>返回</button></Link>
			</div>







			
		)
	}
}

export default Xianchangbilu