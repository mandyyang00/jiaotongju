import React from 'react'

import './zhengjulist.css'
import {
  Link
} from 'react-router-dom'
import {url} from '../config'
import axios from 'axios'
import { Modal, Button,message } from 'antd';
import {Icon} from 'antd'





class Zhengjulist extends React.Component{
	constructor(){
		super()
		this.state={
			visibal:false,
			data:null
		}
	}
	handleOk = (e) => {
    	console.log(e);
    	this.setState({
      	visible: false,
    	})
    	let index1=document.querySelector('.index1').value
		let name1=document.querySelector('.name1').value
		let guige1=document.querySelector('.guige1').value
		let seconds1=document.querySelector('.seconds1').value
		let adress1=document.querySelector('.adress1').value
		let ID=sessionStorage.zhengjuId
		// console.log(name1)
		let data1={
			EvidenceID:ID,
			Name:name1,
			Rule:guige1,
			Quantity:seconds1,
			Place:adress1
		}
		if(
				index1.length!==0 && index1.trim()!=='' &&
				name1.length!==0 && name1.trim()!=='' &&
				guige1.length!==0 && guige1.trim()!=='' &&
				seconds1.length!==0 && seconds1.trim()!=='' &&
				adress1.length!==0 && adress1.trim()!=='' 
			){
				axios.post(`${url}/EvidenceService/AddDetail`,data1)
					.then(res=>this.textOk(res))
					.catch(err=>console.log(err))
		}else{
			message.error('资料不完整')
		}
		document.querySelector('.index1').value=''
		document.querySelector('.name1').value=''
		document.querySelector('.guige1').value=''
		document.querySelector('.seconds1').value=''
		document.querySelector('.adress1').value=''

		
  }

  textOk(res){
		console.log(res)
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false
    });
    document.querySelector('.index1').value=''
		document.querySelector('.name1').value=''
		document.querySelector('.guige1').value=''
		document.querySelector('.seconds1').value=''
		document.querySelector('.adress1').value=''
  }

	showModal = () => {
    this.setState({
      visible: true
    });
  }
 

	goBack(){
		
		
	}

	loginOut(){
			sessionStorage.setItem('userId','')
			sessionStorage.setItem('lianPCid','')
			sessionStorage.setItem('xianchangId','')
			sessionStorage.setItem('xunwenId','')
		}
	render(){

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








			<div className='list'>
			
				<h1>证据保存清单</h1>
				<div className='content'>
					<table>
						<tr>
							<td style={{'width':'100px'}}>序号</td>
							<td style={{'width':'250px'}}>证据名称</td>
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
						
						
					</table>
				</div>
				<div>
					<Button type="primary" onClick={this.showModal}>添加</Button>
					<Modal
						 title="添加"
						  visible={this.state.visible}
						  onOk={this.handleOk}
						  onCancel={this.handleCancel}
						         
					>
						       
						<p style={{'marginTop':'5px'}}>序号<input type="text"   style={{'width':'200px','height':'40px','border':'1px solid #aaaaaa','outline':'0','marginLeft':'50px'}} className='index1'/></p>
						<p style={{'marginTop':'5px'}}>证据名称<input type="text"   style={{'width':'200px','height':'40px','border':'1px solid #aaaaaa','outline':'0','marginLeft':'25px'}} className='name1'/></p>
						<p style={{'marginTop':'5px'}}>规格<input type="text"   style={{'width':'200px','height':'40px','border':'1px solid #aaaaaa','outline':'0','marginLeft':'50px'}} className='guige1'/></p>
						<p style={{'marginTop':'5px'}}>数量<input type="text"   style={{'width':'200px','height':'40px','border':'1px solid #aaaaaa','outline':'0','marginLeft':'50px'}} className='seconds1'/></p>
						<p style={{'marginTop':'5px'}}>登记保存地点<input type="text"   style={{'width':'200px','height':'40px','border':'1px solid #aaaaaa','outline':'0','marginLeft':'2px'}} className='adress1'/></p>

					</Modal>
				</div>
				<Link to='/zhengju'><button onClick={this.goBack.bind(this)} style={{'marginLeft':'450px','marginTop':'20px'}}>保存返回</button></Link>
				
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


export default Zhengjulist