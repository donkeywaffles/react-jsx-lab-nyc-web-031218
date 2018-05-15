import React from 'react';
import FillerText from './FillerText';
class Webpage extends React.Component {
  render() {
    console.log(FillerText)
    return (
      <div>
        <h1>The world{`'`}s coolest webpage</h1>
        <div>
          <FillerText />
          <FillerText />
        </div>
      </div>
    );
  }
}

export default Webpage;
