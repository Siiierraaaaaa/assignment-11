import React from 'react';
import './App.css';

import QuoteBoxCSS from './components/QuoteBoxCSS/QuoteBoxCSS';
import QuoteBoxModule from './components/QuoteBoxModule/quoteboxmodule';
import QuoteBoxStyled from './components/QuoteBoxStyled/quoteboxstyled';

function App() {
  return (
    <div>
      <h1>Quote Box Styles</h1>

      <QuoteBoxCSS />
      <QuoteBoxModule />
      <QuoteBoxStyled />
    </div>
  );
}

export default App;