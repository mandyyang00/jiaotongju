import React from 'react'
import Header from '../Header/Header'
import './lian.css'



class Lian extends React.Component{
	render(){
		return(
			<div className='lian'>
				<Header title='立案审批表'></Header>
				<div className='title'>
					<input type="text"/>
					<span >罚案</span>
					<span style={{'border':'0','width':'10px'}}>(</span><input type="text" style={{'border':'0','width':'40px'}}/><span style={{'border':'0','width':'10px'}}>)</span>
					
					<input type="text"/>
					<span>号</span>
				</div>
				
				<div className='content'>
					<table>
						<tr>
							<td className='first'>案件<br/>来源</td>
							<td colSpan='4'>
								<input type="text" style={{'width':'100','border':'0','outline':'0'}}/>
							</td>
							<td className='four'>受案时间</td>
							<td colSpan='2'>
								<input type="text" style={{'width':'100','border':'0','outline':'0'}}/>
							</td>
						</tr>
						<tr>
							<td>案由</td>
							<td colSpan='7'>
								<input type="text" style={{'width':'100','border':'0','outline':'0'}}/>
							</td>
						</tr>
						<tr>
							<td rowSpan='4'>当<br/>事<br/>人<br/>基<br/>本<br/>情<br/>况</td>
							<td rowSpan='2' className='second'>公民</td>
							<td className='third'>姓名</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}}/>
							</td>
							<td className='third'>性别</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}}/>
							</td>
							<td className='four'>年龄</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}}/>
							</td>
						</tr>
						<tr>
							<td>住址</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}}/>
							</td>
							<td>身份<br/>证号</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}}/>
							</td>
							<td>联系电话</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}}/>
							</td>
						</tr>
						<tr>
							<td rowSpan='2'>法人<br/>或其<br/>他组<br/>织</td>
							<td>名称</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'507px','border':'0','outline':'0'}}/>
							</td>
							<td>法定<br/>代表人</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}}/>
							</td>
						</tr>
						<tr>
							<td>地址</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'507px','border':'0','outline':'0'}}/>
							</td>
							<td>联系<br/>电话</td>
							<td>
								<input type="text" style={{'width':'220px','border':'0','outline':'0'}}/>
							</td>
						</tr>
						<tr>
							<td>案件<br/>基本<br/>情况</td>
							<td colSpan='7'>
								
								<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'900px','border':'0','outline':'0'}}></textarea>
							</td>
						</tr>
						<tr>
							<td>立<br/>案<br/>依<br/>据</td>
							<td colSpan='4'>
								<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'380px','border':'0','outline':'0'}}></textarea>
							</td>
							<td>受案<br/>机构<br/>意见</td>
							<td colSpan='2'>
								<textarea name="" id="" cols="30" rows="4"
									 style={{'width':'300px','border':'0','outline':'0'}}></textarea>
								<p style={{'textIndent':'150px','lineHeight':'20px'}}>签名:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}}/>
								</p>
								<p style={{'textIndent':'150px','lineHeight':'20px'}}>时间:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}}/>
								</p>
							</td>
						</tr>
						<tr>
							<td>负<br/>责<br/>人<br/>审<br/>批<br/>意<br/>见</td>
							<td colSpan='7'>
								<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'900px','border':'0','outline':'0'}}></textarea>
								<p style={{'textIndent':'650px','lineHeight':'20px'}}>签名:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}}/>
								</p>
								<p style={{'textIndent':'650px','lineHeight':'20px'}}>时间:
											<input type="text"  style={{'width':'100px','border':'0','outline':'0'}}/>
								</p>
							</td>
						</tr>
						<tr>
							<td>备<br/>注</td>
							<td colSpan='7'>
								<input type="text" style={{'width':'900px','border':'0','outline':'0'}}/>
							</td>
						</tr>

					</table>
					
					
					
					// <button type='submit'>提交</button>
				</div>
			</div>
		)
	}
}

export default Lian