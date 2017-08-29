import React from 'react'
import Header from '../Header/Header'
import './zhengju.css'
import {
  Link
} from 'react-router-dom'
import {url} from '../config'
import axios from 'axios'





class Zhengju extends React.Component{
	constructor(){
		super()
		this.state={
			data:null
		}
	}
	componentDidMount(){
		let ID=sessionStorage.lianPCid
		axios.post(`${url}/FilingService/GetFiling`,{ID:ID})
			.then(res=>
				this.idOk(res)
			)
			.catch(err=>console.log(err))
	}
	idOk(res){
		console.log(res)
		this.setState({
			data:res.data
		})
	}

	goBack(){
		let name2=document.querySelector('.name2').value
		let address2=document.querySelector('.address2').value
		let farendaibiao=document.querySelector('.farendaibiao').value
		let tel2=document.querySelector('.tel2').value
		let where=document.querySelector('.where').value
		let dashiren=document.querySelector('.dashiren').value
		let year=document.querySelector('.year').value
		let month=document.querySelector('.month').value
		let day=document.querySelector('.day').value
		let namesign1=document.querySelector('.namesign1').value
		let namesign2=document.querySelector('.namesign2').value
		let codeid=document.querySelector('.codeid').value
		let year1=document.querySelector('.year1').value
		let month1=document.querySelector('.month1').value
		let day1=document.querySelector('.day1').value

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
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}} value={data.InvolvedName} className='name1'/></td>
								<td  className='small'>性别</td>
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}} value={data.InvolvedSex} className='sex'/></td>
								<td  className='small'>年龄</td>
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}} value={data.InvolvedName}  className='old'/></td>
							</tr>
							<tr>
								<td  className='small'>电话</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0' }} value={data.InvolvedTelNo}  className='tel1'/></td>
								<td  className='small'>职业</td>
								<td><input type="text" style={{'width':'240px','border':'0','outline':'0'}} value={data.InvolvedName}  className='work'/></td>
							</tr>
							<tr>
								<td className='small'>住址</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}} value={data.InvolvedAddress}  className='address1'/></td>
								<td ></td>
								<td></td>
							</tr>
							<tr>
								<td rowSpan="4" className='title'>法人<br/>或者<br/>其他<br/>组织</td>
								<td  className='small'>名称</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}  className='name2'/></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td  className='small'>地址</td>
								<td colSpan="3"><input type="text" style={{'width':'540px','border':'0','outline':'0'}}  className='address2'/></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td  className='small' style={{'width':'80px'}}>法人代表</td>
								<td colSpan="5"><input type="text" style={{'width':'800px','border':'0','outline':'0'}}  className='farendaibiao'/></td>
								
							</tr>
							<tr>
								<td  className='small'>联系电话</td>
								<td colSpan="5"><input type="text"  style={{'width':'800px','border':'0','outline':'0'}}  className='tel2'/></td>
								
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
							<Link to='/zhengju/zhengjulist'><button>证据保存清单</button></Link>
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