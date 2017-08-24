import React from 'react'
import {Input, Button,message, } from 'antd';
// import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import './login.css'
import axios from 'axios'
import {url} from '../config'
import { connect } from 'react-redux'






class Login extends React.Component{
	constructor(){
		super()
		this.state={
			userId:null
		}
	
	}


	onClick(){
		let text=document.querySelector('.account').value
		let password=document.querySelector('.password').value
		if(text.trim()!=='' && password.trim!=='' && text.length!==0 && password.length!==0){
			let data1={
				UserName:text,
				Password:password
			}

			axios.post(`${url}/Login`,data1)
				.then(res=>{
					this.dataOk(res)
					this.props.dispatch({type:'LOGIN',})
				})
				.catch(err=>alert('登陆错误'))

			
		}else{
			message.error('请先登录')
			return false
		}
		

		
	}
	dataOk(res){
		if(res.data.Code===0){
			message.error(res.data.Message)
		}else if(res.data.Code===1){
			message.error(res.data.Message)
		}else if(res.data.Code===2){
			console.log(res)
			
			this.setState({userId:res.data.Data.ID})
			sessionStorage.setItem('userId',this.state.userId)
			console.log(this.state)
		}
	}


  render(){
  	
  	let style={
  		'width':'500px',
  		'height':'45px',
  		'borderRadius':'0',
  		'display':'block',
  		'margin':'0 auto',
  		'marginTop':'30px'
  	}
  	let styleButton={
  		'display':'block' ,
		'width': '500px',
		'height': '45px',
		'border-radius': '0',
		'margin': '0 auto',
		'marginTop':'30px',
		'backgroundColor':'#49a9ee',
		'border':'0'
	}
	let {userId} =this.state
	// console.log(visibal)
	
    return (


      <div className='login'>	
      	{userId!=null ? '' :
				<div>
      		
	      	<h1>秦皇岛市交通局执法系统</h1>
	      	<div className="text" >
		         <Input placeholder="账号" style={style} className='account'/ >
		        	<Input placeholder="密码" style={style} className='password'/>
		      </div>

		     	<Link to='lian:id'>
		      	<Button type="button" style={styleButton} onClick={this.onClick.bind(this)}>登录</Button>
		      </Link>
		  
			</div>}
      	

      	
      </div> 
      
    )
  }
}
export default Login
