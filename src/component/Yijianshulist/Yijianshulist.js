import React from 'react'
import './yijianshulist.css'
import Header from '../Header/Header'
import axios from 'axios'
import {url} from '../config'
import {Link} from 'react-router-dom'



class Yijianshulist extends React.Component{
	render(){
		return(
			<div className='yijianshulist'>
				<Header></Header>
				<h1>案件处理意见书待处理</h1>
				<div className='content'>
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
							<td style={{'width':'50px'}}></td>
							<td style={{'width':'100px'}}>案件处理意见书</td >
							<td style={{'width':'200px'}}></td>
							<td style={{'width':'300px'}}></td>
							<td style={{'width':'150px'}}></td>
							<td style={{'width':'100px'}}></td>
							<td style={{'width':'50px'}}>
								<Link to='/lian'>
									<button style={{'lineHeight':'25px','width':'45px'}}>查询
									</button>
								</Link>
							</td>
						</tr>

					</tbody>
					</table>
				</div>
				
			</div>
		)
	}
}

export default Yijianshulist