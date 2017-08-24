import React from 'react'
import './xunwenbilu.css'
import Header from '../Header/Header'



class Xunwenbilu extends React.Component{
	render(){
		return(
			<div className='xunwen'>
				<Header title='询问笔录'></Header>
				<div className='content'>
					<p>
						时间：
							<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							年<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							月<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							日<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							时<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							分至<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							时<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							分
							<span style={{'float':'right'}}>
								第<input type="text" style={{'width':'70px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							次询问
							</span>
							
					</p>
					<p>
						地点：<input type="text" style={{'width':'960px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
					</p>
					<p>
						询问人：<input type="text" style={{'width':'300px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						<span style={{'marginLeft':'100px'}}>
						记录人：<input type="text" style={{'width':'325px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						</span>
					</p>
					<p>
						被询问人：<input type="text" style={{'width':'290px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						<span style={{'marginLeft':'100px'}}>
						与案件关系：<input type="text" style={{'width':'300px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						</span>
					</p>
					<p>
						性别：<input type="text" style={{'width':'314px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						<span style={{'marginLeft':'100px'}}>
						年龄：<input type="text" style={{'width':'337px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						</span>
					</p>
					<p>
						身份证号：<input type="text" style={{'width':'290px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						<span style={{'marginLeft':'100px'}}>
						联系电话：<input type="text" style={{'width':'312px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						</span>
					</p>
					<p>
						工作单位及职务：<input type="text" style={{'width':'727px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
					
					</p>
					<p>
						联系地址：<input type="text" style={{'width':'764px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
					
					</p>
					<p>
						我们是：<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						的执法人员<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						这是我们的执法证件，执法证件号码分别是<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>、<input type="text" style={{'width':'120px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>，请你确认，现依法向你询问，请如实回答所有问题，执法人员与你有直接利害关系的，你可以申请回避。
					
					</p>
					<p>
						<p>问：</p>
						<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'920px','border':'0','outline':'0','border':'1px solid #aaaaaa','marginLeft':'40px'}}>
						</textarea>
					</p>
					<p>
						<p>答：</p>
						<textarea name="" id="" cols="30" rows="5"
									 style={{'width':'920px','border':'0','outline':'0','border':'1px solid #aaaaaa','marginLeft':'40px'}}>
						</textarea>
					</p>
					<p className='clearfix' style={{'width':'800px','margin':'0 auto','marginTop':'40px'}}>
						<span style={{'float':'left'}}>
						被询问人签名及时间：<br/>
						<input type="text" style={{'width':'300px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						</span>
						<span  style={{'float':'right'}}>
						询问人签名及时间：<br/>
						<input type="text" style={{'width':'300px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
						</span>
					</p>
					<p style={{'margin':'0 auto','marginTop':'40px'}}>
						备注：
						<input type="text" style={{'width':'800px','border':'0','outline':'0'}}/>
						
					</p>

				</div>
			</div>
		)
	}
}



export default Xunwenbilu