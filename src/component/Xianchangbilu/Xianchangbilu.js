import React from 'react'
import './xianchangbilu.css'
import Header from '../Header/Header'



class Xianchangbilu extends React.Component{
	render(){
		return(
			<div className='xianchang'>
				<Header title='现场笔录'></Header>
				<div className='content'>
				<table>
					<tr>
						<td className='first'>执法<br/>地点</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'350px','border':'0','outline':'0'}}/>
						</td>
						<td colSpan='2'>执法时间</td>
						<td colSpan='2'>
						<p>
							<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
							年<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
							月<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
							日
							<br/>
							<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
							时<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
							分至
							<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
							时<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
							分
						</p>
						</td>
					</tr>
					<tr>
						<td rowSpan='2'>执法<br/>人员</td>
						<td className='second'>
							<input type="text" style={{'width':'170px','border':'0','outline':'0'}}/>
						</td>
						<td rowSpan='2' className='second'>执法证号</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'160px','border':'0','outline':'0'}}/>
						</td>
						<td rowSpan='2' className='second'>记录人</td>
						<td rowSpan='2'  className='third'>
							<input type="text" style={{'width':'290px','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td>
							<input type="text" style={{'width':'170px','border':'0','outline':'0'}}/>
						</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'160px','border':'0','outline':'0'}}/>
						</td>

					</tr>
					<tr>
						<td rowSpan='5'>现场<br/>人员<br/>基本<br/>情况</td>
						<td >姓名</td>
						<td colSpan='2' className='third'>
							<input type="text" style={{'width':'167px','border':'0','outline':'0'}}/>
						</td>
						<td className='second'>性别</td>
						<td colSpan='2' >
							<input type="text" style={{'width':'410px','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td>身份证号</td>
						<td colSpan='2'>
						<input type="text" style={{'width':'167px','border':'0','outline':'0'}}/>
						</td>
						<td>与案件关系</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'410px','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td>单位及职务</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'167px','border':'0','outline':'0'}}/>
						</td>
						<td>联系电话</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'410px','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td>车（船）号</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'167px','border':'0','outline':'0'}}/>
						</td>
						<td>车（船）型</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'410px','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td>联系地址</td>
						<td colSpan='5'>
							<input type="text" style={{'width':'760px','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td rowSpan='3'>主<br/>要<br/>内<br/>容</td>
						<td colSpan='6'>
							<p style={{'textAlign':'left','textIndent':'40px'}}>
								在检查中发现：<input type="text" style={{'width':'750px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							</p>
							<textarea name="" id="" cols="30" rows="10"
									 style={{'width':'920px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}>
							</textarea>
							<p style={{'textAlign':'left','textIndent':'40px'}}>
								上述笔录我已经看过（或已向我宣读过），情况属实无误。
							</p>
							<p style={{'textAlign':'right'}}>
								现场人员签名：<input type="text" style={{'width':'150px','border':'0','outline':'0'}}/>
							</p>
							<p style={{'textAlign':'right','marginBottom':'20px'}}>
								时间：<input type="text" style={{'width':'150px','border':'0','outline':'0'}}/>
							</p>
						</td>
						
					</tr>
					<tr>
						<td colSpan='6'>
							<p style={{'textAlign':'left','textIndent':'40px'}}>
								备注：<input type="text" style={{'width':'750px','border':'0','outline':'0'}}/>
							</p>
						</td>
					</tr>
					<tr>
						<td colSpan='6'>
							<p style={{'textAlign':'left','textIndent':'40px','marginBottom':'10px'}}>
								执法人员签名：
								<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
								<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','margin':' 0  40px'}}/>
								    时间：<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','marginLeft':'20px'}}/>
							</p>
						</td>
					</tr>
					
				</table>
				</div>
			</div>
		)
	}
}

export default Xianchangbilu