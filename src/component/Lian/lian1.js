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
				
				<div type='submit' style={{'margin':'0 auto'}}>
					<table>
						<tr>
							<td>案件来源</td>
							<td colSpan='4'></td>
							<td>受案时间</td>
							<td colSpan='2'></td>
						</tr>
						<tr>
							<td>案由</td>
							<td colSpan='7'></td>
						</tr>
						<tr>
							<td>当事人基本情况</td>
							<td rowSpan=''></td>
						</tr>
					</table>
					
					
					
					<button type='submit'>提交</button>
				</div>
			</div>
		)
	}
}

export default Lian