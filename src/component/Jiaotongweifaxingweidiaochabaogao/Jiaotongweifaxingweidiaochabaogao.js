import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import './jiaotongweifaxingweidiaochabaogao.css'




class Jiaotongweifaxingweidiaochabaogao extends React.Component{
	
	render(){
		return(
			<div className='jiaotongweifaxingweidiaochabaogao'>
			<button>返回</button>
				<h1>交通违法行为调查报告</h1>
				<table>
					<tr>
						<td rowSpan='2' style={{'width':'50px'}}>案<br/>由</td>
						<td colSpan='5' rowSpan='2' style={{'width':'40%'}}>
							<input type="text"/>
						</td>
						<td colSpan='2' rowSpan='2'>案件调<br/>查人员</td>
						<td colSpan='2'>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td colSpan='2'>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td colSpan='2'>案件来源</td>
						<td colSpan='4'>
							<input type="text"/>
						</td>
						<td colSpan='2'>登记时间</td>
						<td colSpan='2'>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td colSpan='2'>立案时间</td>
						<td colSpan='4'>
							<input type="text"/>
						</td>
						<td colSpan='2'>批准人</td>
						<td colSpan='2'>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td rowSpan='4'>当<br/>事<br/>人</td>
						<td rowSpan='2'  style={{'width':'50px'}}>公民</td>
						<td style={{'width':'50px'}}>姓名</td>
						<td style={{'width':'100px'}}>
							<input type="text"/>
						</td>
						<td style={{'width':'50px'}}>性别</td>
						<td style={{'width':'100px'}}>
							<input type="text"/>
						</td>
						<td style={{'width':'50px'}}>年龄</td>
						<td style={{'width':'100px'}}>
							<input type="text"/>
						</td>
						<td style={{'width':'50px'}}>电话</td>
						<td>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>住址</td>
						<td colSpan='3'>
							<input type="text"/>
						</td>
						<td>职业</td>
						<td colSpan='3'>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td rowSpan='2'>单位</td>
						<td>名称</td>
						<td colSpan='3'>
							<input type="text"/>
						</td>
						<td colSpan='2'>法定代表人</td>
						<td colSpan='2'>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>地址</td>
						<td colSpan='3'>
							<input type="text"/>
						</td>
						<td colSpan='2'>电话</td>
						<td colSpan='2'>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>调<br/>查<br/>经<br/>过<br/>及<br/>认<br/>定<br/>的<br/>违<br/>法<br/>事<br/>实</td>
						<td colSpan='9'>
							<textarea name="" id="" cols="30" rows="4">
							</textarea>
						</td>
					</tr>
					<tr>
						<td rowSpan='6' >证<br/>据<br/>材<br/>料<br/>清<br/>单</td>
						<td >序号</td>
						<td colSpan='5'>证据名称</td>
						<td colSpan='2'>规格</td>
						<td>数量</td>
					</tr>
					<tr>
						<td>
							<input type="text"/>
						</td>
						<td colSpan='5'>
							<input type="text"/>
						</td>
						<td colSpan='2'>
							<input type="text"/>
						</td>
						<td>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>
							<input type="text"/>
						</td>
						<td colSpan='5'>
							<input type="text"/>
						</td>
						<td colSpan='2'>
							<input type="text"/>
						</td>
						<td>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>
							<input type="text"/>
						</td >
						<td colSpan='5'>
							<input type="text"/>
						</td>
						<td colSpan='2'>
							<input type="text"/>
						</td>
						<td>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>
							<input type="text"/>
						</td>
						<td colSpan='5'>
							<input type="text"/>
						</td>
						<td colSpan='2'>
							<input type="text"/>
						</td>
						<td>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>
							<input type="text"/>
						</td>
						<td colSpan='5'>
							<input type="text"/>
						</td>
						<td colSpan='2'>
							<input type="text"/>
						</td>
						<td>
							<input type="text"/>
						</td>
					</tr>
					<tr>
						<td>调<br/>查<br/>结<br/>论<br/>及<br/>处<br/>理<br/>意<br/>见</td>
						<td colSpan='9'>
							<textarea name="" id="" cols="30" rows="4">
							</textarea>
							<p style={{'marginRight':'50px'}}>调查人员签字：
								<input type="text" className='title'/>、
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
						<td>负<br/>责<br/>人<br/>审<br/>批<br/>意<br/>见</td>
						<td colSpan='9'>
							<textarea name="" id="" cols="30" rows="4">
							</textarea>
							<p style={{'marginRight':'50px'}}>签名：
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
		)
	}
}

export default Jiaotongweifaxingweidiaochabaogao