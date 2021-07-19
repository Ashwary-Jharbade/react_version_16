import React, { createContext } from 'react'
import './App.css';
import ImageObject from './components/ImageObject';

const { Provider , Consumer } = createContext();

class App extends React.Component{
  constructor(){
    console.log("constructor called");
    super()
    this.state = {
      xcount:0,
      ycount:0
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log(" getDerivedStateFromProps called");
    return {
      xcount: state.xcount,
      ycount: state.ycount
    }
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log(" getSnapshotBeforeUpdate called");
    if(this.state!== prevState){
      return this.state
    }
    return null
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log(snapshot);
  }

  incrx = () =>{
    this.setState({
      xcount: this.state.xcount + 1
    })
  }

  incry = () =>{
    this.setState({
      ycount: this.state.ycount + 1
    })
  }

  slidex = (event) =>{
      this.setState({
        xcount: parseInt(event.target.value)
      })
  }

  slidey = (event) =>{
    this.setState({
      ycount: parseInt(event.target.value)
    })
}

  render(){
    // if(this.state.count === 5){
    //   throw new Error("App component got crashed")
    // }
    return (
      <div>
          <div align="center">
            <input className="slider" title="X Co-ordinate" type="range" name="range" value={ this.state.xcount } onChange={ this.slidex } min="0" max="500"/>
            <input className="slider" title="Y Co-ordinate" type="range" name="range" value={ this.state.ycount } onChange={ this.slidey } min="0" max="500"/>
            <button className="App-button" type="button" onClick={ this.incrx }> Co-ordinate X   { this.state.xcount } </button>
            <button className="App-button" type="button" onClick={ this.incry }> Co-ordinate Y  { this.state.ycount } </button>
          </div>
          
          <Provider value = { {x : this.state.xcount,y : this.state.ycount} }>
            <ImageObject></ImageObject>
          </Provider>

      </div>
    );
  }
}

export { App as default, Consumer as AppConsumer };
