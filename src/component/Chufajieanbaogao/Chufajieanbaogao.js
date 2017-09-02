import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import './chufajieanbaogao.css'




class Chufajieanbaogao extends React.Component{
	
	render(){
		return(
			
						


						<div className='chufajieanbaogao'>
							<h1>处罚结案报告</h1>
							<div className='content'>
								<p style={{'textAlign':'left'}}>案件名称：
									<input type="text" className='title'/>
								</p>
								<table>
									<tr>
										<td rowSpan='5' style={{'width': '50px'}}>当事<br/>人基<br/>本情<br/>况</td>
										<td  style={{'width': '100px'}}>公民</td>
										<td  style={{'width': '26%'}}>
											<input type="text"/>
										</td>
										<td  style={{'width': '60px'}}>年龄</td>
										<td style={{'width': '20%'}}>
											<input type="text"/>
										</td>
										<td style={{'width': '60px'}}>性别</td>
										<td style={{'width': '20%'}}>
											<input type="text"/>
										</td>
									</tr>
									<tr>
										<td>所在单位</td>
										<td>
											<input type="text"/>
										</td>
										<td>联系地址</td>
										<td colSpan='3'>
											<input type="text"/>
										</td>
									</tr>
									<tr>
										<td>联系电话</td>
										<td>
											<input type="text"/>
										</td>
										<td>邮编</td>
										<td colSpan='3'>
											<input type="text"/>
										</td>
									</tr>
									<tr>
										<td>法人或其他组织</td>
										<td>
											<input type="text"/>
										</td>
										<td>地址</td>
										<td colSpan='3'>
											<input type="text"/>
										</td>
									</tr>
									<tr>
										<td>法定代表人</td>
										<td>
											<input type="text"/>
										</td>
										<td>职务</td>
										<td colSpan='3'>
											<input type="text"/>
										</td>
									</tr>
									<tr>
										<td>处理<br/>结果</td>
										<td colSpan='6'>
											<textarea name="" id="" cols="30" rows="4">
											</textarea>
										</td>
									</tr>
									<tr>
										<td>执行<br/>情况</td>
										<td colSpan='6'>
											<textarea name="" id="" cols="30" rows="4">
											</textarea>
											<p>执法人员签名：
												<input type="text" className='title'/> 、 
												<input type="text" className='title'/>
											</p>
											<p style={{'marginBottom':'5px','marginRight':'60px'}}>
												<input type="text" className='time'/>年
												<input type="text" className='time'/>月
												<input type="text" className='time'/>日
											</p>
										</td>
									</tr>
									<tr>
										<td>法制<br/>工作<br/>机构<br/>审核<br/>意见</td>
										<td colSpan='2'>
											<textarea name="" id="" cols="30" rows="4">
											</textarea>
											<p>签名：
												<input type="text" className='title'/> 
											</p>
											<p style={{'marginBottom':'5px','marginRight':'60px'}}>
												<input type="text" className='time'/>年
												<input type="text" className='time'/>月
												<input type="text" className='time'/>日
											</p>
										</td>
										<td>行政<br/>执法<br/>机关<br/>审批<br/>意见</td>
										<td colSpan='3'>
											<textarea name="" id="" cols="30" rows="4">
											</textarea>
											<p>签名：
												<input type="text" className='title'/> 
											</p>
											<p style={{'marginBottom':'5px','marginRight':'60px'}}>
												<input type="text" className='time'/>年
												<input type="text" className='time'/>月
												<input type="text" className='time'/>日
											</p>
										</td>
									</tr>
								</table>

							</div>
						</div>





					
		)
	}
}

export default Chufajieanbaogao