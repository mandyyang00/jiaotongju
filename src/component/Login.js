import React from 'react'
import { button } from 'antd'


class Login extends React.Component{
  render(){
    return (
      <div className="login">
        <form>
          <label for='number'>
            账号:
          </label>
          <input type='text' id='number'/>
        </form>
      </div>
    )
  }
}
export default Login
