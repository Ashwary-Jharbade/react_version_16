import React, { createContext } from 'react'
import '../css/play-ground.css';
import ImageObject from './ImageObject';

const { Provider , Consumer } = createContext();

class PlayGround extends React.Component{
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

    mouseMoveHandler = (e) =>{
        this.setState({
            xcount:parseInt(e.clientY),
            ycount: parseInt(e.clientX)
          })
    }

  render(){
    // if(this.state.count === 5){
    //   throw new Error("App component got crashed")
    // }
    return (
      <div>
            <div align="center">
                <button className="App-button x-button" type="button" onClick={ this.incrx }> Co-ordinate X   { this.state.xcount } </button>
                <button className="App-button y-button" type="button" onClick={ this.incry }> Co-ordinate Y  { this.state.ycount } </button>
            </div>
          
            <div onMouseMove={this.mouseMoveHandler} className="motion-sensor">
                <Provider value = { {x : this.state.xcount,y : this.state.ycount} }>
                    <ImageObject className="img"></ImageObject>
                </Provider>
            </div>

      </div>
    );
  }
}

export { PlayGround as default, Consumer as AppConsumer };
