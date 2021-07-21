import React from 'react'
import SplashScreen from './components/SplashScreen';
class ErrorBoundary extends React.Component{

    state = { hasError: false };

    static getDerivedStateFromError(error){
        console.log(`Error log from getDerivedStateFromError: ${error}`);
        return { hasError: true };
    }

    componentDidCatch(error,info){
        console.log(`Error log from componentDidCatch: ${error}`);
        console.log(info);
    }

 
    render(){
        if (this.state.hasError) {
            return <SplashScreen text="An Error Occured"></SplashScreen>;
        }
      
        return this.props.children;
    }
} 

export default ErrorBoundary
