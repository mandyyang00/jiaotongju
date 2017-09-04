import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import './zelinggaizhengtongzhishu.css'




class Zelinggaizhengtongzhishu extends React.Component{

	render(){
		return(
			<div className='zelinggaizhengtongzhishu'>
				<h1>责令改正通知书</h1>
				<div>
					
					<p style={{'textAlign':'right'}}>
						<input type="text" className='title'/>
						责改
						<span>（</span>
						<input type="text" className='title' style={{'border':'0','width':'60px'}}/>
						<span>）</span>
						<input type="text" className='title'/>
							号
					</p>
					<p><input type="text" style={{'width':'40%'}}/>:</p>
					<p style={{'textIndent':'50px'}}>经调查，你（单位）存在下列违法事实</p>
					<p>1.<input type="text"/></p>
					<p>2.<input type="text"/></p>
					<p>3.<input type="text"/></p>
					<p>4.<input type="text"/></p>
					<p style={{'textIndent':'50px'}}> 
						根据
						<input type="text" style={{'width':'63%'}}/>
						的规定，现责令你（单位）对上述第
						<input type="text" style={{'width':'30%'}}/>
						项问题立即改正：对第
						<input type="text"  style={{'width':'30%'}}/>
						项问题于
						<input type="text" className='time'/>
						年
						<input type="text" className='time'/>
						月
						<input type="text" className='time'/>
						日前整改 完毕。
					</p>
					<p style={{'textIndent':'50px'}}>
						改正内容和要求如下：

					</p>
					<p>1.<input type="text"/></p>
					<p>2.<input type="text"/></p>
					<p>3.<input type="text"/></p>
					<p>4.<input type="text"/></p>
					<div className='clearfix' style={{'marginTop':'30px'}}>
						<p style={{'float':'left'}}>责令改正人签名及时间:<br/>
						<input type="text" style={{'width':'200px'}}/>
						</p>
						<p style={{'float':'right'}}>执法人员签名及执法证号:<br/>
						<input type="text"  style={{'width':'200px'}}/><br/>
						<input type="text"  style={{'width':'200px'}}/>
						</p>
					</div>
					<p style={{'textAlign':'right','paddingRight':'30px'}}>交通行政执法机关（印章）</p>
					<p style={{'textAlign':'right','paddingRight':'30px','marginTop':'30px'}} >
						<input type="text" className='time'/>
						年
						<input type="text" className='time'/>
						月
						<input type="text" className='time'/>
						日
					</p>
				</div>
			</div>
		)
	}
}

export default Zelinggaizhengtongzhishu
