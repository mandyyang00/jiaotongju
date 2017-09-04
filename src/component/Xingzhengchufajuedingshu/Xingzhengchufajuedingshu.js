import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import './xingzhengchufajuedingshu.css'




class Xingzhengchufajuedingshu extends React.Component{

	render(){
		return(
			<div className='xingzhengchufajuedingshu'>
				<h1>行政处罚决定书</h1>
				<div>
					<p style={{'textAlign':'right'}}>
						<input type="text" className='title'/>
						罚
						<span>（</span>
						<input type="text" className='title' style={{'border':'0','width':'70px'}}/>
						<span>）</span>
						<input type="text" className='title'/>
						号
					</p>
					<table>
						<tr>
							<td rowSpan='4' style={{'width':'40px'}}>当<br/>事<br/>人</td>
							<td rowSpan='2' style={{'width':'60px'}}>公民</td>
							<td style={{'width':'50px'}}>姓名</td>
							<td>
								<input type="text"/>
							</td>
							<td style={{'width':'50px'}}>性别</td>
							<td style={{'width':'60px'}}>
								<input type="text"/>
							</td>
							<td style={{'width':'50px'}}>身份<br/>证号</td>
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
							<td>
								<input type="text"/>
							</td>
						</tr>
						<tr>
							<td rowSpan='2'>法人<br/>或者<br/>其他<br/>组织</td>
							<td>名称</td>
							<td colSpan='2'>
								<input type="text"/>
							</td>
							<td colSpan='2'>法定代表人</td>
							<td>
								<input type="text"/>
							</td>
						</tr>
						<tr>
							<td>地址</td>
							<td colSpan='5'>
								<input type="text"/>
							</td>
						</tr>
					</table>
					<p>
						违法事实及证据：
						<textarea name="" id="" cols="30" rows="10" style={{'border':'1px solid #aaaaaa','textAlign':'center'}}>
						</textarea>
					</p>
					<p>
						以上事实违反了<input type="text" style={{'width':'83%','border-bottom':'1px solid #aaaaaa'}}/>的规定，依据<input type="text" style={{'width':'79%','border-bottom':'1px solid #aaaaaa'}}/>的规定，决定给予<input type="text" style={{'width':'60%','border-bottom':'1px solid #aaaaaa'}}/>的行政处罚。
					</p>
					<p>
						处以罚款的，罚款自收到本决定书之日起15日内缴至<input type="text"  style={{'width':'55%','border-bottom':'1px solid #aaaaaa'}}/>，账号为<input type="text"  style={{'width':'50%','border-bottom':'1px solid #aaaaaa'}}/>到期不缴的依法每日按罚款额数的30%加处罚款。
					</p>
					<p>
						如果不服本处罚决定，可以依法在60日内向<input type="text"  style={{'width':'55%','border-bottom':'1px solid #aaaaaa'}}/>人民政府或者<input type="text"  style={{'width':'60%','border-bottom':'1px solid #aaaaaa'}}/>申请行政复议，或者在三个月内依法向人民法院提起行政诉讼，但本决定不停止执行，法律另有规定的除外。逾期不申请行政复议、不提起行政诉讼又不履行的，本机关将依法申请人民法院强制执行或者依照有关规定强制执行。
					</p>
					<p style={{'textAlign':'right','paddingRight':'50px'}}>
						交通行政执法机关（印章）

					</p>
					<p style={{'textAlign':'right','paddingRight':'50px'}}>
						<input type="text" className='time'/>年
						<input type="text"  className='time'/>月
						<input type="text" className='time'/>日
						</p>
					<p >（本文书一式两份：一份存根，一份当事人或其代理人）</p>
				</div>
			</div>
		)
	}
}

export default Xingzhengchufajuedingshu