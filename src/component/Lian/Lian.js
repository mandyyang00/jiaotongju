import React from 'react'
import Header from '../Header/Header'
import './lian.css'
import { Input, Col, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;



class Lian extends React.Component{
	render(){
		return(
			<div className='lian'>
				<Header title='立案审批表'></Header>
				<div className='title'>
					<input type="text"/>
					<span >罚案</span>
					<span style={{'border':'0','width':'10px'}}>(</span><input type="text" style={{'border':'0','width':'40px'}}/><span style={{'border':'0','width':'10px'}}>)</span>
					
					<input type="text"/>
					<span>号</span>
				</div>
				
				<form action="" type='submit' style={{'margin':'0 auto'}}>

					
					<div className='flex'>
						<div className='aa' >
	  						<span class="input-group-addon" id="basic-addon1" style={{'lineHeight':'20px'}}>案件<br/>来源</span>
	  						<input type="text" class="form-control" aria-describedby="basic-addon1"/>
	  					</div>

	  					<div class="input-group" className='aa'>
	  						<span class="input-group-addon" id="basic-addon1">受案时间</span>
	  						<input type="text" class="form-control" aria-describedby="basic-addon1"/>
						</div>
					</div>


					<div class="input-group" className='aa'>
						<span class="input-group-addon" id="basic-addon1">案由</span>
  						<input type="text" class="form-control" aria-describedby="basic-addon1"/>
					</div>


					<div class="input-group" className='aa' style={{'height':'250px'}}>

						<span class="input-group-addon" id="basic-addon1" style={{'lineHeight':'20px'}}><br/>当<br/>事<br/>人<br/>基<br/>本<br/>情<br/>况
						</span>

						<div style={{'display':'flex','flex-direction':'column','flexGrow':'1'}}>

							<div className='gongmin'>
								<span class="input-group-addon" id="basic-addon1" style={{'width':'50px'}}>公<br/>民
								</span>
								<div className='xingming'>
									<div className='small'>
										<div>
											<span class="input-group-addon" id="basic-addon1" >姓名
											</span>
		  									<input type="text" class="form-control" aria-describedby="basic-addon1"/>
	  									</div>
	  									<div>
		  									<span class="input-group-addon" id="basic-addon1">性别
											</span>
		  									<input type="text" class="form-control" aria-describedby="basic-addon1"/>
	  									</div>
	  									<div>
		  									<span class="input-group-addon" id="basic-addon1">年龄
											</span>
		  									<input type="text" class="form-control" aria-describedby="basic-addon1"/>
	  									</div>
	  								</div>
	  								<div className='small'>
		  								<div>
		  									<span class="input-group-addon" id="basic-addon1">住址
											</span>
		  									<input type="text" class="form-control" aria-describedby="basic-addon1"/>
		  								</div>
		  								<div>
		  									<span class="input-group-addon" id="basic-addon1">身份证号
											</span>
		  									<input type="text" class="form-control" aria-describedby="basic-addon1"/>
		  								</div>
		  								<div>
		  									<span class="input-group-addon" id="basic-addon1">联系电话
											</span>
		  									<input type="text" class="form-control" aria-describedby="basic-addon1"/>
		  								</div>
  									</div>
												
								</div>
							</div>

							<div className='faren'>
								<span class="input-group-addon" id="basic-addon1" style={{'border':'0.3px solid #aaaaaa','lineHeight': '15px','width':'50px'}}><br/>法<br/>人<br/>或<br/>其<br/>他<br/>组<br/>织
								</span>
								<div className='mingcheng'>
									<div className='small'>
										<div style={{'flexGrow':'4'}}>
											<span class="input-group-addon" id="basic-addon1" >名称
											</span>
		  									<input type="text" class="form-control" aria-describedby="basic-addon1"/>
	  									</div>
	  									
	  									<div >
		  									<span class="input-group-addon" id="basic-addon1">法定代表人
											</span>
		  									<input type="text" class="form-control" aria-describedby="basic-addon1"/>
	  									</div>
	  								</div>

	  								<div className='small'>
										<div style={{'flexGrow':'4'}}>
											<span class="input-group-addon" id="basic-addon1" >地址
											</span>
		  									<input type="text" class="form-control" aria-describedby="basic-addon1"/>
	  									</div>
	  									
	  									<div>
		  									<span class="input-group-addon" id="basic-addon1">联系电话
											</span>
		  									<input type="text" class="form-control" aria-describedby="basic-addon1"/>
	  									</div>
	  								</div>
								</div>


	  						</div>


  						</div>
							
					</div>

						
					<div className='aa' style={{'height':'100px'}}>
						<span class="input-group-addon" id="basic-addon1" style={{'lineHeight':'20px'}}><br/>案件<br/>基本<br/>情况</span>
	  					<input type="text" class="form-control" aria-describedby="basic-addon1" style={{'height':'100px'}}/>
					</div>


					<div className='flex' style={{'height':'100px'}}>
						<div className='aa' style={{'flexGrow':'3'}}>
	  						<span class="input-group-addon" id="basic-addon1" style={{'lineHeight':'20px'}}>立<br/>案<br/>依<br/>据</span>
	  						<input type="text" class="form-control" aria-describedby="basic-addon1"  style={{'height':'100px'}}/>
	  					</div>

	  					<div class="input-group" className='aa'>
	  						<span class="input-group-addon" id="basic-addon1" style={{'lineHeight':'20px'}}><br/>受案<br/>机构<br/>意见
	  						</span>
	  						<div style={{'height':'100px','width':'30%'}} className='yijian' >
	  							<input type="text" class="form-control" aria-describedby="basic-addon1" style={{'height':'50px'}}/>
	  							<span style={{'height':'24px','lineHeight':'24px','width':'50px','marginLeft':'40%'}}>签名：</span>
	  							<input type="text" class="form-control" aria-describedby="basic-addon1" style={{'height':'24px','width':'150px'}}/ >
	  							<span style={{'height':'24px','lineHeight':'24px','width':'50px'}}>签名：</span>
	  							<input type="text" class="form-control" aria-describedby="basic-addon1" style={{'height':'25px','width':'50%'}}/>
	  						</div>
	  						
						</div>


					</div>


					<div class="input-group" className='aa' style={{'height':'180px'}}>
	  						<span class="input-group-addon" id="basic-addon1" style={{'lineHeight':'20px'}}><br/>负<br/>责<br/>人<br/>审<br/>批<br/>意<br/>见<br/>
	  						</span>
	  						<div style={{'height':'180px','flexGrow':'1'}} className='last'>
	  							<input type="text" class="form-control" aria-describedby="basic-addon1" style={{'height':'130px','display':'block','width':'100%'}}/>
	  							<span style={{'height':'25px','lineHeight':'25px','border':'0','marginLeft':'50%'}}>签名：</span>
	  							<input type="text" class="form-control" aria-describedby="basic-addon1" style={{'height':'25px','width':'30%'}}/>
	  							<span style={{'height':'25px','lineHeight':'25px','border':'0','marginLeft':'50%'}}>时间：</span>
	  							<input type="text" class="form-control" aria-describedby="basic-addon1" style={{'height':'25px','width':'30%'}}/>
	  						</div>
	  						
					</div>


					<div className='aa' >
	  						<span class="input-group-addon" id="basic-addon1" style={{'lineHeight':'20px'}}>备<br/>注</span>
	  						<input type="text" class="form-control" aria-describedby="basic-addon1"/>
	  					</div>
					
					<button type='submit'>提交</button>
				</form>
			</div>
		)
	}
}

export default Lian