

class App extends React.Component {
	constructor(){   //构造函数里不能声明变量，只能设置初始值
		super()
		this.state = {
			result1: 0,
			result2: 0
		}
		this.t0 = new Date()    //当前时间（还没跑时的时间）
	}
	success1(){
		console.log('兔子跑完了，用时')
		console.log(new Date()-this.t0)   //当前时间（已经跑完时的时间）- 当前时间（还没跑时的时间）
		let time1 = new Date()-this.t0
		this.setState({
			result1: time1
		})
	}
	success2(){
		console.log('乌龟跑完了')
		console.log(new Date()-this.t0)   //当前时间（已经跑完时的时间）- 当前时间（还没跑时的时间）
		let time2 = new Date()-this.t0
		this.setState({
			result2: time2
		})
	}
	render(){
		return(
			<div>
				<div className="box1">
					<Judge/>
				</div>
				<div className="header">
					<Time1 time={this.state.result1} />
					<Time2 time={this.state.result2} />
				</div>
				<div className="">
					<Track1 success={this.success1.bind(this)} />
					<Track2 success={this.success2.bind(this)} />
				</div>
			</div>
		)
	}
}

function Time1(props){
	return(
		<div className="rabbit">
			<h2 className="title">兔子用时</h2>
			<div>{props.time}</div>
		</div>
	)
}


function Time2(props){
	return(
		<div className="tortoise">
			<h2 className="title">乌龟用时</h2>
			<div>{props.time}</div>
		</div>
	)
}

function Judge(){
	return(
		<div className="judge">裁判</div>
	)
}

class Track1 extends React.Component {
	constructor() {
		super()
		let n = 0
		this.state = {
			position: {
				transform: `translateX(${n}%)`
			}
		}
		let timeTD = setInterval(()=>{
			n += 10
			this.setState({
				position: {
					transform: `translateX(${n}%)`
				}
			})
			if(n>=100){
				window.clearInterval(timeTD)
				this.props.success()
			}
		},1000)
	}
	render(){
		return(
			<div>
				<p style={this.state.position} className="player">兔子</p>
				<p className="track"></p>
			</div>
		)
	}
	
}

class Track2 extends React.Component {
	constructor() {
		super()
		let n = 0
		this.state = {
			position: {
				transform: `translateX(${n}%)`
			}
		}
		let timeTD = setInterval(()=>{
			n += 5
			this.setState({
				position: {
					transform: `translateX(${n}%)`
				}
			})
			if(n>=100){
				window.clearInterval(timeTD)
				this.props.success()
			}
		},1000)
	}
	render(){
		return(
			<div>
				<p style={this.state.position} className="player">乌龟</p>
				<p className="track"></p>
			</div>
		)
	}
	
}


ReactDOM.render(<App></App>, document.querySelector('#main'))  //document.getElementById("main")