import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import './wenshusongdahuizheng.css'




class Wenshusongdahuizheng extends React.Component{
	
	render(){
		return(
			<div className='wenshusongdahuizheng'>
				<h1>文书送达回证</h1>
				<div>
					<p style={{'lineHeight':'30px','marginBottom':'5px'}}>案件名称：
						<input type="text" style={{'borderBottom':'1px solid #aaaaaa','width':'20%'}}/>
					</p>
					<table>
						<tr>
							<td style={{'width':'25%'}}>送达单位</td>
							<td colSpan='5'>
								<input type="text"/>
							</td>
						</tr>
						<tr>
							<td>受送达人</td>
							<td colSpan='5'>
								<input type="text"/>
							</td>
						</tr>
						<tr>
							<td>代收人</td>
							<td colSpan='5'>
								<input type="text"/>
							</td>
						</tr>
						<tr>
							<td>送达文书名称、文号</td>
							<td>收件人签名<br/>（盖章）</td>
							<td>送达<br/>地点</td>
							<td>送达<br/>日期</td>
							<td>送达<br/>方式</td>
							<td>送达人</td>
						</tr>
						<tr>
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
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
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
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
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
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
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
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
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
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
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
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
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
							<td>
								<input type="text"/>
							</td>
						</tr>
						<tr>
							<td colSpan='6'>
								<textarea name="" id="" cols="30" rows="10">
								</textarea>
							</td>
						</tr>
						<tr>
							<td colSpan='6'>
								<p style={{'lineHeight':'40px','textIndent':'10px'}}>备注：<input type="text" style={{'width':'90%'}}/></p>
							</td>
						</tr>
					</table>
					<p>
						注：1.如受送达人不在场的，可交其同住的成年家属签收，并且在备注栏中写
						明与受送达人的关系。<br/>
						<span>2.受送达人已经指定代收人的，交代收人签收，受送达人为单位的，交单位收发室签收。</span><br/>
						<span>3.受送达人拒绝签收的，送达人应当邀请有关基层组织的代表或其他人员在场，说明情况，并在备注栏中写明拒收事实和日期，送达人在备注中签字。</span>
					</p>
				</div>
			</div>
		)
	}
}

export default Wenshusongdahuizheng