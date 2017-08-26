import React from 'react'
import './lianlist.css'
import Header from '../Header/Header'
import axios from 'axios'
import {url} from '../config'
import {Link} from 'react-router-dom'





class LianList extends React.Component{
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
			
			<div className='lianlist' style={{'margin':'0 auto'}}>
				<h1>	清单</h1>
				
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
					data.map(item=>	
					
					<tbody key={item.ID}>
						<tr>
							<td style={{'width':'50px'}}>{item.index}</td>
							<Link to='/lian'><td style={{'width':'100px'}}>{item.Code1}</td ></Link>
							<td style={{'width':'200px'}}></td>
							<td style={{'width':'300px'}}></td>
							<td style={{'width':'150px'}}></td>
							<td style={{'width':'100px'}}></td>
							<td style={{'width':'50px'}}></td>
						</tr>

					</tbody>
					)}
						
				</table>


			</div>
			
			
			)
	}
}


export default LianList