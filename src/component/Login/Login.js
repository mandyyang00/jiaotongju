import React from 'react'
import {Input, Button,message, } from 'antd';
// import Header from '../Header/Header'
import {Link,BrowserRouter as Router} from 'react-router-dom'
import './login.css'
import axios from 'axios'
import {url} from '../config'
import { connect } from 'react-redux'







class Login extends React.Component{
	constructor(){
		super()
		this.state={
			visiabl:false
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

			axios.post(`${url}/UserService/Login`,data1)
				.then(res=>{
					this.dataOk(res)

					
				})
				.catch(err=>console.log(err))

			
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
			this.setState({visibal:true})
			this.props.dispatch({type:'LOGIN',userId:res.data.Data.ID})
			sessionStorage.setItem('userId',res.data.Data.ID)
			console.log(res.data.Data.ID)
			
					
		}
	}


  render(){
  	
  	let style={
  		'width':'200px',
  		'height':'40px',
  		'borderRadius':'3px',
  		'display':'block',
  		'margin':'0 auto',
  		'marginTop':'30px',
  		'border':'1px solid #aaaaaa'
  	}
  	let styleButton={
  		'display':'block' ,
		'width': '200px',
		'height': '40px',
		'borderRadius': '3px',
		'margin': '0 auto',
		'marginTop':'30px',
		'backgroundColor':'#49a9ee',
		'border':'1px solid #aaaaaa'
	}
	
	let {visibal} =this.state
	// console.log(visibal)
	
    return (


      <div className='login'>	
      	
				<div className='clearfix'>
      		
		      	<h1><i>秦皇岛市交通运输<br/>行政执法系统</i></h1>
		      	<div className="text">
		      	
			         <Input placeholder="账号" style={style} className='account' />
			        	<Input placeholder="密码" style={style} className='password'/>
			     
						{visibal 
					?
					<Link  to='/header'>
			      	<Button type="button" style={styleButton}>登录
			      	</Button>
		     		</Link>
		     		:
		      	<Button type="button" style={styleButton} onClick={this.onClick.bind(this)}>登录</Button>

		    		}
		    </div>
		     	
		  
			</div>
      	

      	
      </div> 
      
    )
  }
}
export default connect(null)(Login)
