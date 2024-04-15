import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';

const App = () => {
  return (
    <ErrorBoundary
      fallback={
        <p className="flex flex-col rounded-xl p-10 text-[100pGTellox] h-full w-screen justify-center items-center">
          <div className="bg-purple">Something went wrong BITCH!</div>
        </p>
      }
    >
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;

//      First example of an Error Boundary
// |---------------------------------------------|

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('error --->', error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

//      Second example of an Error Boundary
// |---------------------------------------------|

// ('use client');

// function fallbackRender({ error, resetErrorBoundary }) {
//   // Call resetErrorBoundary() to reset the error boundary and retry the render.

//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre style={{ color: 'red' }}>{error.message}</pre>
//     </div>
//   );
// }

// <ErrorBoundary
//   fallbackRender={fallbackRender}
//   onReset={(details) => {
//     // Reset the state of your app so the error doesn't happen again
//   }}
// >
//   <ExampleApplication />
// </ErrorBoundary>;
