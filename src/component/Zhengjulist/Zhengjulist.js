import React from 'react'
import Header from '../Header/Header'
import './zhengjulist.css'
import {
  Link
} from 'react-router-dom'
import {url} from '../config'
import axios from 'axios'





class Zhengjulist extends React.Component{
	goBack(){
		let index1=document.querySelector('.index1').value
		let index2=document.querySelector('.index2').value
		let index3=document.querySelector('.index3').value
		let index4=document.querySelector('.index4').value
		let index5=document.querySelector('.index5').value
		let index6=document.querySelector('.index6').value
		let name1=document.querySelector('.name1').value
		let name2=document.querySelector('.name2').value
		let name3=document.querySelector('.name3').value
		let name4=document.querySelector('.name4').value
		let name5=document.querySelector('.name5').value
		let name6=document.querySelector('.name6').value
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
		let adress1=document.querySelector('.adress1').value
		let adress2=document.querySelector('.adress2').value
		let adress3=document.querySelector('.adress3').value
		let adress4=document.querySelector('.adress4').value
		let adress5=document.querySelector('.adress5').value
		let adress6=document.querySelector('.adress6').value
		let ID=sessionStorage.lianPCid
	axios.post(`${url}/`,)


	}
	render(){
		return(
			<div className='list'>
			
				<h1>证据保存清单</h1>
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
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='name1'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige1'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds1'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='adress1'/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='index2'/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='name2'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige2'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds2'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='adress2'/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='index3'/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='name3'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige3'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds3'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='adress3'/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='index4'/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='name4'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige4'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds4'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='adress4'/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='index5'/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='name5'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige5'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds5'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='adress5'/></td>
							
						</tr>
						<tr>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='index6'/></td>
							<td><input type="text"   style={{'width':'350px','border':'0','outline':'0'}} className='name6'/></td>
							<td ><input type="text"   style={{'width':'150px','border':'0','outline':'0'}} className='guige6'/></td>
							<td><input type="text"   style={{'width':'100px','border':'0','outline':'0'}} className='seconds6'/></td>
							<td ><input type="text"   style={{'width':'294px','border':'0','outline':'0'}} className='adress6'/></td>
							
						</tr>
					</table>
				</div>
				<Link to='/zhengju'><button onClick={this.goBack.bind(this)}>保存返回</button></Link>
			</div>
		)
	}
}


export default Zhengjulist