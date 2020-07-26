import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  Submit = (obj) =>{
    obj.preventDefault();
    console.log('sucessfull');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let matric = this.refs.matric.value;

    if(this.state.act === 0){   //new
      let data = {
        name, matric
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].matric = matric;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  Remove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  Edit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.matric.value = data.matric;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
   <center><h2>Register form student</h2></center>
   <center>    
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="matric" placeholder="your matric" className="formField" />
          <button onClick={(e)=>this.Submit(e)} className="myButton">submit </button>
        </form></center> 
        <br></br>
      
        <br></br><h2>List student</h2>
        <table className="table">
          <tr>
         <th className="table">
           No
         </th>
         <th className="table">Name</th>
         <th className="table">Matric</th>
         <th  className="table">Action</th>
</tr>{datas.map((data, i) =>
<tr key={i} className="myList">
        <td className="table">{i+1}</td>
  <td className="table">{data.name}</td>
  <td className="table">{data.matric}</td>
  <td className="table">
  <button onClick={()=>this.Remove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.Edit(i)} className="myListButton">edit </button>
  </td>
</tr>
)}
       </table>
      </div>
    );
  }

}

export default App;
