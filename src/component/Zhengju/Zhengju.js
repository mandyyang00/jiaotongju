import React from 'react'
import Header from '../Header/Header'
import './zhengju.css'
import {
  Link
} from 'react-router-dom'
import {url} from '../config'
import axios from 'axios'
import {message} from 'antd'





class Zhengju extends React.Component{
	constructor(){
		super()
		this.state={
			data:null,
			zhengjuId:null,
			
			
		}
	}
	componentDidMount(){
		let ID=sessionStorage.lianPCid
		axios.post(`${url}/EvidenceService/AddEvidence`,{FilingID:ID})
			.then(res=>this.handleOk(res))
			.catch(err=>console.log(err))


		// 
		// axios.post(`${url}/FilingService/GetFiling`,{ID:ID})
		// 	.then(res=>
		// 		this.idOk(res)
		// 	)
		// 	.catch(err=>console.log(err))
	}
	handleOk(res){
		console.log(res)
		this.setState({
			data:res.data,
			zhengjuId:res.data.ID
		})
		sessionStorage.setItem('zhengjuId',res.data.ID)
	}

	// idOk(res){
	// 	console.log(res)
	// 	this.setState({
	// 		data:res.data
	// 	})
	// }

	goBack(){
		let name2=document.querySelector('.name2').value
		let address2=document.querySelector('.address2').value
		let farendaibiao=document.querySelector('.farendaibiao').value
		let tel2=document.querySelector('.tel2').value
		let where=document.querySelector('.where').value
		let dangshiren=document.querySelector('.dangshiren').value
		let year=document.querySelector('.year').value
		let month=document.querySelector('.month').value
		let day=document.querySelector('.day').value
		let namesign1=document.querySelector('.namesign1').value
		let namesign2=document.querySelector('.namesign2').value
		let codeid=document.querySelector('.codeid').value
		let year1=document.querySelector('.year1').value
		let month1=document.querySelector('.month1').value
		let day1=document.querySelector('.day1').value

		let index1=document.querySelector('.index1').value
		let index2=document.querySelector('.index2').value
		let index3=document.querySelector('.index3').value
		let index4=document.querySelector('.index4').value
		let index5=document.querySelector('.index5').value
		let index6=document.querySelector('.index6').value
		let names1=document.querySelector('.names1').value
		let names2=document.querySelector('.names2').value
		let names3=document.querySelector('.names3').value
		let names4=document.querySelector('.names4').value
		let names5=document.querySelector('.names5').value
		let names6=document.querySelector('.names6').value
		let guige1=document.querySelector('.guige1').value
		let guige2=document.querySelector('.guige2').value
		let guige3=document.querySelector('.guige3').value
		let guige4=document.querySelector('.guige4').value
		let guige5=document.querySelector('.guige5').value
		let guige6=document.querySelector('.guige6').value
		let seconds1=document.querySelector('.seconds1').value
		let seconds2=document.querySelector('.seconds2').value
		let seconds3=document.querySelector('.seconds3').value
		let seconds4=document.querySelector('.seconds4').value
		let seconds5=document.querySelector('.seconds5').value
		let seconds6=document.querySelector('.seconds6').value
		let place1=document.querySelector('.place1').value
		let place2=document.querySelector('.place2').value
		let place3=document.querySelector('.place3').value
		let place4=document.querySelector('.place4').value
		let place5=document.querySelector('.place5').value
		let place6=document.querySelector('.place6').value
		let ID =sessionStorage.lianPCid
		if(
				name2.length!==0 && name2.trim()!=='' &&
				address2.length!==0 && address2.trim()!=='' &&
				farendaibiao.length!==0 && farendaibiao.trim()!=='' &&
				tel2.length!==0 && tel2.trim()!=='' &&
				where.length!==0 && where.trim()!=='' &&
				dangshiren.length!==0 && dangshiren.trim()!=='' &&
				year.length!==0 && year.trim()!=='' &&
				month.length!==0 && month.trim()!=='' &&
				day.length!==0 && day.trim()!=='' &&
				namesign1.length!==0 && namesign1.trim()!=='' &&
				namesign2.length!==0 && namesign2.trim()!=='' &&
				codeid.length!==0 && codeid.trim()!=='' &&
				year1.length!==0 && year1.trim()!=='' &&
				month1.length!==0 && month1.trim()!=='' &&
				day1.length!==0 && day1.trim()!=='' &&
				index1.length!==0 && index1.trim()!==''
			){
				axios.post(`${url}`,)
		}else{
			message.error('资料填写不完整')
		}

	}

	render(){
		let {data}=this.state
		return(
			<div className='zhengju'>
			<Header></Header>
				<h1>证据登记保存清单</h1>
				{!data ? '加载中' :
				<div>
					<div style={{'margin':'0 auto'}} className='content'>
						<table className='table'>
							<tr>
								<td rowSpan='7' className='title'>当<br/>事<br/>人</td>
								<td rowSpan="3" className='title'>公民</td>
								<td className='small'>姓名</td>
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}  className='name1' value={data.Filing.InvolvedName}/></td>
								<td  className='small'>性别</td>
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}  className='sex' value={data.Filing.InvolvedName}/></td>
								<td  className='small'>年龄</td>
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}   className='old' value={data.Filing.InvolvedName}/></td>
							</tr>
							<tr>
								<td  className='small'>电话</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0' }}   className='tel1' value={data.Filing.InvolvedName}/></td>
								<td  className='small'>职业</td>
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}}   className='work' value={data.Filing.InvolvedName}/></td>
							</tr>
							<tr>
								<td className='small'>住址</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}   className='address1' value={data.Filing.InvolvedName}/></td>
								<td ></td>
								<td></td>
							</tr>
							<tr>
								<td rowSpan="4" className='title'>法人<br/>或者<br/>其他<br/>组织</td>
								<td  className='small'>名称</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}  className='name2' value={data.Filing.InvolvedName}/></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td  className='small'>地址</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}  className='address2' value={data.Filing.InvolvedName}/></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td  className='small' style={{'width':'80px'}}>法人代表</td>
								<td colSpan="5"><input type="text" style={{'width':'800px','border':'0','outline':'0'}}  className='farendaibiao' value={data.Filing.InvolvedName}/></td>
								
							</tr>
							<tr>
								<td  className='small'>联系电话</td>
								<td colSpan="5"><input type="text"  style={{'width':'800px','border':'0','outline':'0'}}  className='tel2' value={data.Filing.InvolvedName}/></td>
								
							</tr>


						</table>
					</div>

					<p className='middle'>
							根据《中华人民共和国行政处罚法》第三十七条第二款的规定，需对你（单位）下列物品登记保存。在7日内当事人或有关人员不得销毁或转移。请
							<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}} className='dangshiren'/>
							于<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}} className='year'/>
							年<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}} className='month'/>
							月<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}} className='day'/>
							日前到<input type="text" style={{'width':'50px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0'}}  className='where'/>接受处理。
							
					</p>
					
					<div className='down clearfix'>
						<p>
							被取证人（或其代理人）签名及时间：
							<br/><input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}}  className='namesign1'/>
						</p>
						<p style={{'float':'right'}}>
							执法人员签名 执法证件号：
							<br/><input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}}  className='namesign2'/>
							<br/><input type="text"  style={{'width':'200px','border':'0','border-bottom':'1px solid #aaaaaa','outline':'0','marginTop':'20px'}} className='codeid'/>
						</p>

					</div>
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
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='index1'/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='names1'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige1'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds1'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='place1'/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='index2'/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='names2'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige2'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds2'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='place2'/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='index3'/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='names3'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige3'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds3'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='place3'/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='index4'/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='names4'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige4'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds4'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='place4'/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='index5'/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='names5'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige5'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds5'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='place5'/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='index6'/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='names6'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige6'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds6'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='place6'/></td>
							
						</tr>
					</table>
					<button onClick={this.baoCunzhengju.bind(this)}>保存证据列表</button>
					</div>
					<p className='footer'>
					行政执法机关（印章）<br/>
					<input type="text" style={{'width':'50px','border':'0','outline':'0'}}  className='year1'/>
							年<input type="text" style={{'width':'50px','border':'0','outline':'0'}}  className='month1'/>
							月<input type="text" style={{'width':'50px','border':'0','outline':'0'}} className='day1'/>
							日
							<br/>
							(本文书一式两份：一份存根，一份交当事人或者代理人)


					</p>
				</div>}			
				<button onClick={this.goBack.bind(this)}>保存并返回</button>
			</div>
		)
	}
}

export default Zhengju