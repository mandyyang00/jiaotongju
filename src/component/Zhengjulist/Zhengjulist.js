import React from 'react'
import Header from '../Header/Header'
import './zhengjulist.css'





class Zhengjulist extends React.Component{
	render(){
		return(
			<div className='list'>
			
				<h1>证据保存清单</h1>
				<div>
					<table>
						<tr>
							<td style={{'width':'100px'}}>序号</td>
							<td style={{'width':'350px'}}>证据名称</td>
							<td style={{'width':'150px'}}>规格</td>
							<td style={{'width':'100px'}}>数量</td>
							<td style={{'width':'294px'}}>登记保存地点</td>
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}}/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}}/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}}/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}}/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}}/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}}/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}}/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}}/></td>
							
						</tr>
					</table>
				</div>
				
			</div>
		)
	}
}


export default Zhengjulist