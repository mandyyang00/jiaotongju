import React from 'react'
import {Input, Button,message, } from 'antd';
import Header from '../Header/Header'
import {Link} from 'react-router-dom'





class Login extends React.Component{
	constructor(){
		super()
		this.state={
			text:'',
			password:'',
			visibal:false,
		}
		console.log(this.state.text)
	}


	onClick(){
		let text1=document.querySelector('.account').value
		let password1=document.querySelector('.password').value
		if(text1.trim()!=='' && password1.trim!=='' && text1.length!==0 && password1.length!==0){
			this.setState({
				text:text1,
				password:password1,
				visibal:true
			})
		}else{
			message.error('请先登录')
		}
		// console.log(text1)

		
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
	let {text,password,visibal} =this.state
	console.log(visibal)
	
    return (

      <div>
      	  
      	<div>		
	      	<Header title='秦皇岛市交通局执法系统' style={{'marginTop':'50px'}}></Header>
	      	<div className="text" >
		         <Input placeholder="账号" style={style} className='account'/ >
		        	<Input placeholder="密码" style={style} className='password'/>
		      </div>

		      <Link to='/lian:id'>
		      	<Button type="submit" style={styleButton} onClick={this.onClick.bind(this)}>登录</Button>
		      </Link>
		      
        	</div>

      </div> 
      
    )
  }
}
export default Login
