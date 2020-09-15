import React from 'react';

import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import References from './components/references/references';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <References />
      <Footer />
    </div>
  );
}

export default App;
