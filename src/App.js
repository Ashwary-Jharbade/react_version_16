import React  from 'react'
import PlayGround from './components/PlayGround';
import ContextTypeExample from './components/ContextTypeExample';
class App extends React.Component {
  
  render() {
    return (
      <>
          <PlayGround></PlayGround>
          {/* <ContextTypeExample></ContextTypeExample> */}
      </>
    );
  }
}

export { App as default};
