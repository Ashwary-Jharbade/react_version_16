import React  from 'react'
// import PlayGround from './components/PlayGround';
// import ContextTypeExample from './components/ContextTypeExample';

import SplashScreen from './components/SplashScreen';
const BlogPage = React.lazy(()=>import('./components/BlogPage'))
class App extends React.Component {
  
  render() {
    return (
      <>
        <React.Suspense fallback={<SplashScreen text={"Mind Flare"} />}>
          <BlogPage></BlogPage>
        </React.Suspense>
          {/* <PlayGround></PlayGround> */}
          {/* <ContextTypeExample></ContextTypeExample> */}
      </>
    );
  }
}

export { App as default};
