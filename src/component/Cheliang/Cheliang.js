import React from 'react'
import Header from '../Header/Header'
import './cheliang.css'



class Cheliang extends React.Component{
	render(){
		return(
			<div className='cheliang'>
				<Header title='车辆暂扣凭证'></Header>
				<div className='title'>
					<input type="text"/>
					<span> 罚案</span>
					<span style={{'border':'0','width':'10px'}}>(</span><input type="text" style={{'border':'0','width':'40px'}}/><span style={{'border':'0','width':'10px'}}>)</span>
					
					<input type="text"/>
					<span>号</span>
				</div>
				<div className='content'>
					<table>
						<tr>
							<td rowSpan='5' style={{'width':'60px'}}>被<br/>暂<br/>扣<br/>车<br/>辆<br/>情<br/>况</td>
							<td  style={{'width':'100px'}}>号牌号码</td>
							<td><input type="text" style={{'width':'120px','border':'0','outline':'0'}}/></td>
							<td style={{'width':'150px'}}>厂牌型号</td>
							<td colSpan='2'><input type="text" style={{'width':'466px','border':'0','outline':'0'}}/></td>
						</tr>
						<tr>
							<td rowSpan='2'  style={{'width':'100px'}}>车辆所人<br/>有情况</td>
							<td>公民姓名</td>
							<td><input type="text" style={{'width':'150px','border':'0','outline':'0'}}/></td>
							<td  style={{'width':'100px'}}>住址</td>
							<td ><input type="text" style={{'width':'466px','border':'0','outline':'0'}}/></td>
						</tr>
						<tr>
							<td>法人或者其他<br/>组织名称</td>
							<td><input type="text" style={{'width':'150px','border':'0','outline':'0'}}/></td>
							<td>地址</td>
							<td><input type="text" style={{'width':'466px','border':'0','outline':'0'}}/></td>
						</tr>
						<tr>
							<td rowSpan='2' style={{'width':'100px'}}>车辆驾驶<br/>人情况</td>
							<td>姓名</td>
							<td><input type="text" style={{'width':'150px','border':'0','outline':'0'}}/></td>
							<td>驾驶证号</td>
							<td ><input type="text" style={{'width':'466px','border':'0','outline':'0'}}/></td>
						</tr>
						<tr>
							<td>住址</td>
							<td><input type="text" style={{'width':'150px','border':'0','outline':'0'}}/></td>
							<td>与车辆所<br/>有人关系</td>
							<td><input type="text" style={{'width':'466px','border':'0','outline':'0'}}/></td>
						</tr>
						<tr>
							<td colSpan='2'>备注</td>
							<td colSpan='4'><input type="text" style={{'width':'830px','border':'0','outline':'0'}}/></td>
						</tr>
					</table>


				</div>
				<div className='footerb'>
						<p>暂扣时间:
							<input type="text" style={{'width':'50px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa'}}/>
							年<input type="text" style={{'width':'50px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa'}}/>
							月<input type="text" style={{'width':'50px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa'}}/>
							日<input type="text" style={{'width':'50px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa'}}/>
							时<input type="text" style={{'width':'50px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa'}}/>
							分
						</p>

						<p>
						  	地点：<input type="text" style={{'width':'800px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa'}}/>
						</p>

						<p>
							我单位在
							<input type="text" style={{'width':'100px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa'}}/>
							（时间）
							<input type="text" style={{'width':'200px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa'}}/>
							（地点）依法实施道路运输检查时，发现车辆号码为
							<input type="text" style={{'width':'100px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa'}}/>
							的车辆在从事道路运输活动，没有按照《中华人民共和国道路运输条例》第二十四条的规定提供《道路运输证》或其他有效证明，依据《中华人民共和国道路运输条例》第六十三条规定，决定暂扣车辆。请持本凭证到
							<input type="text" style={{'width':'100px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa'}}/>
							接受处理（联系电话
							<input type="text" style={{'width':'100px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa'}}/>
							）。逾期不接受处理的，将依法作出行政处罚决定。当事人对暂扣车辆决定不服的，可根据《中华人民共和国行政复议法》或《中华人民共和国行政诉讼法》，在收到本凭证之日起六十日之内向
							<input type="text" style={{'width':'100px','border':'0','outline':'0','border-bottom':'1px solid #aaaaaa',}}/>
							申请行政复议，也可以在三个月内向人民法院提起行政诉讼。
						</p>
						<div className='down clearfix'>
							<p style={{'float':'left'}}>
								被取证人（或其代理人）签名及时间：
								<br/><input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}}/>
							</p>
							<p style={{'float':'right'}}>
								执法人员签名 执法证件号：
								<div>
									<input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}}/>
								<br/><input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}}/>
								</div>
								
							</p>
							


						</div>
						<p className='footer'>
								行政执法机关（印章）<br/>
								<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
							年<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
							月<input type="text" style={{'width':'50px','border':'0','outline':'0'}}/>
							日
							<br/>
							(本文书一式两份：一份存根，一份交当事人或者代理人)


							</p>


					</div>
			</div>
			)
	}
}

export default Cheliang