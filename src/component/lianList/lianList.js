import React from 'react'
import './lianlist.css'
import Header from '../Header/Header'
import axios from 'axios'
import {url} from '../config'
import {Link} from 'react-router-dom'





class LianList extends React.Component{
	



	render(){


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
						
						
					<tbody>
						<tr>
							<td>1</td>
							<td>立案审批表</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td><Link to='/lian'><button>查询</button></Link></td>
						</tr>

						

						
					
							
						
					</tbody>
						
				</table>


			</div>
			)
	}
}


export default LianList