import React from 'react';

import SearchContainer from '../containers/SearchContainer';
import ResultsContainer from '../containers/ResultsContainer';

class App extends React.Component {
  render(){
    return (
      <div>
        <SearchContainer/>
        <ResultsContainer/>
      </div>
    )
  }
}

export default App;
