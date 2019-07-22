import * as React from 'react';
import NoMatchScreen from '../views/NoMatchScreen';

class ErrorBoundary extends React.Component<any, any> {
    constructor(props: Object) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: Object) {
      return { hasError: true };
    }
  
    componentDidCatch(error: Object, info: Object) {
      // Register error on log if necessary
      // logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <div>
                <NoMatchScreen />
            </div>
        );
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;