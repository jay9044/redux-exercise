import React from 'react';

import SearchContainer from '../Containers/SearchContainer';
import ResultsContainer from '../Containers/ResultsContainer';

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
