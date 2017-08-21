import React from 'react'
import {Icon, Input, Button, Checkbox } from 'antd';
import Header from '../Header/Header'





class Login extends React.Component{
	constructor(){
		super()
		this.state={
			text:'',
			password:''
		}
	}


	onClick(){

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
	let {text,password} =this.state
	console.log(text)
    return (

      <div>
			<Header title='秦皇岛市交通管理登记系统'></Header>
      	<div className="text" >
	         <Input placeholder="账号" style={style} className='account'  onChange={e=>this.setState({text:e.target.value})}/ >
	        	<Input placeholder="密码" style={style} onChange={e=>this.setState({password:e.target.value})}/>
	      </div>
	      <Button type="submit" style={styleButton}>登录</Button>
        	
      </div> 
      
    )
  }
}
export default Login
