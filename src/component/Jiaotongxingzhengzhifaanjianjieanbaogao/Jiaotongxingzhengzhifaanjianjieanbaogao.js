import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import './jiaotongxingzhengzhifaanjianjieanbaogao.css'




class Jiaotongxingzhengzhifaanjianjieanbaogao extends React.Component{
	
	render(){
		return(
			<div className='jiaotongxingzhengzhifaanjianjieanbaogao'>
			<button>返回</button>
				<h1>交通行政执法案件结案报告</h1>
				<table>
					<tr>
						<td style={{'width':'200px'}}>案由</td>
						<td style={{'width':'30%'}}>
							<input type="text"/>
						</td>
						<td  style={{'width':'200px'}}>案件来源</td>
						<td style={{'width':'30%'}}>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>当事人（名称<br/>或姓名）</td>
						<td>
							<input type="text"/>
						</td>
						<td>法定代表人</td>
						<td>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>工作单位</td>
						<td>
							<input type="text"/>
						</td>
						<td>地址</td>
						<td>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>发案时间</td>
						<td>
							<input type="text"/>
						</td>
						<td>发案地点</td>
						<td>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>立案时间</td>
						<td>
							<input type="text"/>
						</td>
						<td>案件承办人及<br/>执法证件号码</td>
						<td>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>决定文书号</td>
						<td colSpan='3'>
							<textarea name="" id="" cols="30" rows="4">
							</textarea>
						</td>
					</tr>
					<tr>
						<td>简要案情<br/>及查出经过</td>
						<td colSpan='3'>
							<textarea name="" id="" cols="30" rows="4">
							</textarea>
						</td>
					</tr>
					<tr>
						<td>决定内容</td>
						<td colSpan='3'>
							<textarea name="" id="" cols="30" rows="4">
							</textarea>
						</td>
					</tr>
					<tr>
						<td>具体行政行为决<br/>定的执行方式及<br/>
							<input type="checkbox"/>罚没
							<input type="checkbox"/>暂扣财<br/>物处置情况</td>
						<td colSpan='3'>
							<textarea name="" id="" cols="30" rows="4">
							</textarea>
						</td>
					</tr>
					<tr>
						<td>承办机构意见</td>
						<td colSpan='3'>
							<textarea name="" id="" cols="30" rows="4">
							</textarea>
						</td>
					</tr>
					<tr>
						<td>行政机关<br/>负责人意见</td>
						<td colSpan='3'>
							<textarea name="" id="" cols="30" rows="4">
							</textarea>
							<p style={{'marginBottom':'5px','marginRight':'60px'}}>
								<input type="text" className='time'/>年
								<input type="text" className='time'/>月
								<input type="text" className='time'/>日
							</p>
						</td>
					</tr>
					<tr>
						<td>制作人签字</td>
						<td>
							<input type="text"/>
						</td>
						<td>制作时间</td>
						<td >
							<p style={{'textAlign':'center'}}>
								<input type="text" className='time'/>年
								<input type="text" className='time'/>月
								<input type="text" className='time'/>日
							</p>
						</td>
					</tr>
				</table>
			</div>


		)
	}
}

export default Jiaotongxingzhengzhifaanjianjieanbaogao