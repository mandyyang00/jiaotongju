import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import './weifaxingweitongzhishu.css'




class Weifaxingweitongzhishu extends React.Component{
	
	render(){
		return(
			<div className='weifaxingweitongzhishu'>
			<button>返回</button>
				<h1>违法行为通知书</h1>
				<div>
					<p style={{'textAlign':'right'}}>
						<input type="text" style={{'width':'80px'}}/>
						违通
						<span>（</span>
						<input type="text" style={{'width':'60px','border':'0'}}/>
						<span>）</span>
						<input type="text" style={{'width':'80px'}}/>
						号
					</p>
					<p>
					<input type="text" style={{'width':'30%'}}/>：
					</p>
					<p style={{'textIndent':'30px'}}>
						经调查，本机关认为你（单位）涉嫌
						<input type="text" style={{'width':'70%'}}/>
						行为，违反了
						<input type="text"/>
						的规定，依据
						<input type="text"/>
						的规定，本机关拟作出
						<input type="text"/>
						处罚决定。
					</p>
					<p>
						<input type="checkbox"/>
						根据《中华人民共和国行政处罚法》第三十一条、第三十二条规定，你
						（单位）入队该处罚意见有异议，可在接到本通知之日三日内向本机关提出陈
						述申辩；逾期未提出陈述或者申辩，视为你单位（或个人）放弃陈述和申辩的利。
					</p>
					<p>
						<input type="checkbox"/>
						根据《中华人民共和国行政处罚法》第四十二条的规定，你（单位）有权在收到本通知书之日起三日内向本机关要求举行听证；逾期不要求举行听证的视为你（单位）放弃听证权利。

					</p>
					<p>
						（注：在序号前<input type="checkbox"/>内打“√”的为当事人享有该权利。）
					</p>
					<p>
						交通行政执法机构联系地址
						<input type="text" style={{'width':'250px'}}/>
						邮编:
						<input type="text"/>
					</p>
					<p>
						联系人：
						<input type="text"/>
						联系电话：
						<input type="text"/>
					</p>
					<p style={{'textAlign':'right','paddingRight':'30px','marginTop':'20px'}}>交通行政执法机关（印章）</p>
					<p style={{'textAlign':'right','paddingRight':'30px','marginTop':'30px'}} >
						<input type="text" className='time'/>
						年
						<input type="text" className='time'/>
						月
						<input type="text" className='time'/>
						日
					</p>
					<p style={{'marginTop':'20px'}}>（本文书一式两份：一份存根，一份交当事人或其代理人）</p>
				</div>
			</div>

		)
	}
}

export default Weifaxingweitongzhishu