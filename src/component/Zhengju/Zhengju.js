import React from 'react'
import Header from '../Header/Header'
import './zhengju.css'



class Zhengju extends React.Component{
	render(){
		return(
			<div className='zhengju'>
				<Header title='证据保存清单'></Header>
				<form action="" type='submit' style={{'margin':'0 auto'}}>
					<table>
						<tr>
							<td {{rowspan}}>当事人</td>
							<td rowspan="3">公民</td>
							<td>姓名</td>
							<td></td>
							<td>性别</td>
							<td></td>
							<td>年龄</td>
							<td></td>
						</tr>
						<tr>
							<td>电话</td>
							<td colspan="3"></td>
							<td>职业</td>
							<td></td>
							
						</tr>


					</table>
					

				</form>
				
			</div>
		)
	}
}

export default Zhengju