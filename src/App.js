import React  from 'react'
import { BrowserRouter , Switch ,Route } from "react-router-dom"

// import PlayGround from './components/PlayGround';
// import ContextTypeExample from './components/ContextTypeExample';
import BlogContent from './components/BlogContent';
import SplashScreen from './components/SplashScreen';
const BlogPage = React.lazy(()=>import('./components/BlogPage'))
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      screen : true
    }
  }
  render() {
    return (
      <>
          <React.Suspense fallback={<SplashScreen text={"Mind Flare"} />}>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={BlogPage} exact />
                <Route path="/blog/:id" component={ BlogContent } exact />
              </Switch>
            </BrowserRouter>
          </React.Suspense>
          {/* <PlayGround></PlayGround> */}
          {/* <ContextTypeExample></ContextTypeExample> */}
      </>
    );
  }
}

export { App as default};
