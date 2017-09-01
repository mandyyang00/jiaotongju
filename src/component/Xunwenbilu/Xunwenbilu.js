import React from 'react'
import './xunwenbilu.css'

import {Link} from 'react-router-dom'
import axios from 'axios'
import {url} from '../config'
import {Icon} from 'antd'




class Xunwenbilu extends React.Component{
	constructor(){
		super()
		this.state={
			data:''
		}
	}
	componentDidMount(){
		let ID=sessionStorage.xunwenId
		axios.post(`${url}/AskRecordService/GetAskRecord`,{ID:ID})
			.then(res=>this.idOk(res))
			.catch(err=>console.log(err))
	}

	idOk(res){
		console.log(res)
		this.setState({
			data:res.data
		})
	}
	
	goBack(){
		let ID=sessionStorage.lianPCid
		axios.post(`${url}/FilingService/GetFiling`,{ID:ID})
			.then(res=>console.log(res))
			.catch(err=>console.log(err))
	}

	loginOut(){
			sessionStorage.setItem('userId','')
			sessionStorage.setItem('lianPCid','')
			sessionStorage.setItem('xianchangId','')
			sessionStorage.setItem('xunwenId','')
		}
	render(){
		let {data}=this.state
		return(
			<div className='headerss'>

				<div className='titless clearfix'>
					<h2 class='littletitless'><b><i>秦皇岛市交通运输行政执法系统</i></b></h2>
					<p className='logoutss'><Icon type="smile-o" style={{'color':'white','fontSize':'14px'}}/> 欢迎进入</p>
					<p  className='logoutss' onClick={this.loginOut.bind(this)}><Link to='/'><button><Icon type="poweroff" style={{'color':'white','fontSize':'14px'}}/> 退出登陆</button></Link>
					</p>
				</div>
				<div className='headss'>
					<p>首页<Icon type="right"/><span>立案审批表</span></p>
				</div>
				<div className='contentss clearfix'>
					<div className='sidebarss'>
						<ul>
							<li><Link to='/lian'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>立案审批表</span></Link></li>
							<li><Link to='/xianchangbilu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>现场笔录</span></Link></li>
							<li><Link to='/xunwenbilu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>询问笔录</span></Link></li>
							<li><Link to='/zhengju'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>证据登记保存清单</span></Link></li>
							<li><Link to='/cheliang'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>车辆暂扣凭证</span></Link></li>
							<li><Link to='/zelinggaizhengtongzhishu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>责令改正通知书</span></Link></li>
							<li><Link to='/anjianchuliyijianshu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>案件处理意见书</span></Link></li>
							<li><Link to='/weifaxingweitongzhishu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>违法行为通知书</span></Link></li>
							<li><Link to='/xingzhengchufajuedingshu'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>行政处罚决定书</span></Link></li>
							<li><Link to='/wenshusongdahuizheng'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>文书送达回证</span></Link></li>
							<li><Link to='/chufajieanbaogao'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>处罚结案报告</span></Link></li>
							<li><Link to='/jiaotongweifaxingweidiaochabaogao'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>交通违法行为调查报告</span></Link></li>
							<li><Link to='/jiaotongxingzhengzhifaanjianjieanbaogao'><span className='frist'><Icon type="caret-right" style={{'color':'#3A5FCD'}}/></span><span className='second'>交通行政执法案件结案报告</span></Link></li>
						</ul>
					</div>
					<div className='content1ss'>







			<div className='xunwen'>
			
				<h1>询问笔录</h1>
				{!data ? '加载中' :
				<div className='content'>
					<p>
						时间：
							<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							年<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							月<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							日<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							时<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							分至<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							时<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							分
							<span style={{'float':'right'}}>
								第<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
							次询问
							</span>
							
					</p>
					<p>
						地点：<input type="text" style={{'width':'960px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
					</p>
					<p>
						询问人：<input type="text" style={{'width':'300px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						<span style={{'marginLeft':'100px'}}>
						记录人：<input type="text" style={{'width':'325px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						</span>
					</p>
					<p>
						被询问人：<input type="text" style={{'width':'290px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						<span style={{'marginLeft':'100px'}}>
						与案件关系：<input type="text" style={{'width':'300px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						</span>
					</p>
					<p>
						性别：<input type="text" style={{'width':'314px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						<span style={{'marginLeft':'100px'}}>
						年龄：<input type="text" style={{'width':'337px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						</span>
					</p>
					<p>
						身份证号：<input type="text" style={{'width':'290px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						<span style={{'marginLeft':'100px'}}>
						联系电话：<input type="text" style={{'width':'312px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						</span>
					</p>
					<p>
						工作单位及职务：<input type="text" style={{'width':'727px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
					
					</p>
					<p>
						联系地址：<input type="text" style={{'width':'764px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
					
					</p>
					<p>
						我们是：<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						的执法人员<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						这是我们的执法证件，执法证件号码分别是
						<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>、
						<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>，请你确认，现依法向你询问，请如实回答所有问题，执法人员与你有直接利害关系的，你可以申请回避。
					
					</p>
					<p>
						<p>问：</p>
						<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'920px','border':'0','outline':'0','border':'1px solid #aaaaaa','marginLeft':'40px'}} value={data.Asker1}>
						</textarea>
					</p>
					<p>
						<p>答：</p>
						<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'920px','border':'0','outline':'0','border':'1px solid #aaaaaa','marginLeft':'40px'}} value={data.Asker1}>
						</textarea>
					</p>
					<p className='clearfix' style={{'width':'800px','margin':'0 auto','marginTop':'40px'}}>
						<span style={{'float':'left'}}>
						被询问人签名及时间：<br/>
						<input type="text" style={{'width':'300px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						</span>
						<span  style={{'float':'right'}}>
						询问人签名及时间：<br/>
						<input type="text" style={{'width':'300px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						</span>
					</p>
					<p style={{'margin':'0 auto','marginTop':'40px'}}>
						备注：
						<input type="text" style={{'width':'800px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} value={data.Asker1}/>
						
					</p>

				</div>}
				<Link to='./lian'><button onClick={this.goBack.bind(this)}>返回</button></Link>
			</div>







			</div>
				</div>
				<p className='footerss'>
					
						什么什么公司
					
				</p>
					
				
			
			</div>
		)
	}
}


export default Xunwenbilu