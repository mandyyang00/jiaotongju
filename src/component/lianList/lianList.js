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
	


	render(){
		let {data}=this.state
		console.log(data)

		return(
			





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






			
			
			
			)
	}
}


export default LianList