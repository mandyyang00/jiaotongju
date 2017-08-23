import React from 'react'
import Header from '../Header/Header'
import './zhengju.css'
import {
  Link
} from 'react-router-dom'



class Zhengju extends React.Component{
	render(){
		return(
			<div className='zhengju'>
				<Header title='证据登记保存清单'></Header>
				<div type='submit' style={{'margin':'0 auto'}}>
					<table className='table'>
						<tr>
							<td rowSpan='7' className='title'>当<br/>事<br/>人</td>
							<td rowSpan="3" className='title'>公民</td>
							<td className='small'>姓名</td>
							<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}/></td>
							<td  className='small'>性别</td>
							<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}/></td>
							<td  className='small'>年龄</td>
							<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}/></td>
						</tr>
						<tr>
							<td  className='small'>电话</td>
							<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}/></td>
							<td  className='small'>职业</td>
							<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}/></td>
						</tr>
						<tr>
							<td className='small'>住址</td>
							<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}/></td>
							<td ></td>
							<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}/></td>
						</tr>
						<tr>
							<td rowSpan="4" className='title'>法人<br/>或者<br/>其他<br/>组织</td>
							<td  className='small'>名称</td>
							<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}/></td>
							<td></td>
							<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}/></td>
						</tr>
						<tr>
							<td  className='small'>地址</td>
							<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}/></td>
							<td></td>
							<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}/></td>
						</tr>
						<tr>
							<td  className='small' style={{'width':'80px'}}>法人代表</td>
							<td colSpan="5"><input type="text" style={{'width':'800px','border':'0','outline':'0'}}/></td>
							
						</tr>
						<tr>
							<td  className='small'>联系电话</td>
							<td colSpan="5"><input type="text"  style={{'width':'800px','border':'0','outline':'0'}}/></td>
							
						</tr>


					</table>
				</div>

				<p className='middle'>
						根据《中华人民共和国行政处罚法》第三十七条第二款的规定，需对你（单位）下列物品登记保存。在7日内当事人或有关人员不得销毁或转移。请
						<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}}/>
						于<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}}/>
						年<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}}/>
						月<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}}/>
						日前到<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}}/>接受处理。
						<Link to='/zhengju/zhengjulist'><button>证据保存清单</button></Link>
				</p>
				
				<div className='down clearfix'>
					<p>
						被取证人（或其代理人）签名及时间：
						<br/><input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}}/>
					</p>
					<p style={{'float':'right'}}>
						执法人员签名 执法证件号：
						<br/><input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}}/>
						<br/><input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}}/>
					</p>

				</div>
				<p className='footer'>
				行政执法机关（印章）<br/>
				<input type="text" style={{'width':'50px','border':'0','outline':'0','outline':'0'}}/>
						年<input type="text" style={{'width':'50px','border':'0','outline':'0','outline':'0'}}/>
						月<input type="text" style={{'width':'50px','border':'0','outline':'0','outline':'0'}}/>
						日
						<br/>
						(本文书一式两份：一份存根，一份交当事人或者代理人)


				</p>
			</div>
		)
	}
}

export default Zhengju