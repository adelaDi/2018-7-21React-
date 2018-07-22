import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
  //ex:
// name:'adela'

//p1
input:'',
word:'',

//test1
yourname1:'',
yourname2:'',
yourname3:'',
yourname4:'',

//test2
word1:'',
input1:'',
love1:''
  }


//建立function後方加 =>
// setState({}) 表示更改裡面包得值
//word:this.state.input 表示把input的直存入word裡使用
hello=()=>{
//ex:
//在網頁右鍵->檢查，可看到是否有成功呼叫
// console.log('Oh~~~~')
// setState({}) 表示更改裡面包得值
// this.setState({name:'barry'})

//p1
this.setState({word:this.state.input})

}


//ex:
//componentDidMount使⽤用
// componentDidMount=()=>{
// console.log('元件Mount了')
// }



//p1:
handleChange=(event)=>{
//event.target.value 表抓出input裡輸入的值
this.setState({input:event.target.value})
}

//test1
your1=(event)=>{
this.setState({input:event.target.value})
}

your2=()=>{
this.setState({yourname2:this.state.input})
}

your3=()=>{
this.setState({yourname3:this.state.input})
}

your4=()=>{
this.setState({yourname4:this.state.input})
}



//test2， lovechange和lovechange2表示去抓input內入得直存入變數名稱
lovechange=(event)=>{
this.setState({word1:event.target.value})
}

lovechange2=(event)=>{
this.setState({input1:event.target.value})
}

love=()=>{
this.setState({love1:this.state.word1+'愛'+this.state.input1})
}



render() {
      return (

//引入style必用雙 {{}} 包住
//若是裡面有兩個div會無法出行，需要有另一個div包住全部，因為只能有一個根元素，需注意最外層是一渲染的className
<div className="App" style={{color:'pink',fontSize:'20px',backgrund:'green'}}>
{/* ex: */}
{/* {this.state.name} */}
{/* p1 */}
{/*onChange表示在特定事件上*/}
<input onChange={this.handleChange}></input>
<button onClick={this.hello}>press</button>
{/* 在input裡輸入會馬上顯示 */}
<p>即時顯示：{this.state.input}</p>
{/* 按下按鈕後才會顯示input的值 */}
<p>按下按鈕後：{this.state.word}</p>


{/* test1 */}
<input onChange={this.input}></input>
<p>即時輸入值：{this.state.input}</p>

<button onClick={this.your2}>press</button>
<p>你輸入的名字：{this.state.yourname2}</p>

<button onClick={this.your3}>press</button>
<p>好心情對話：{this.state.yourname3}好棒唷！</p>

{/* test2 輸入兩個值點選後出現在下方*/}

<input onChange={this.lovechange}></input>
<input onChange={this.lovechange2}></input>

<button onClick={this.love}>press</button>
<p>羞羞臉對話：{this.state.love1}</p>

 </div>

 )}
}




export default App;
