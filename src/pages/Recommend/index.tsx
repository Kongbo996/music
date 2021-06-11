import React from 'react';
import { Link } from 'react-router-dom'
class Recommend extends React.Component {
  render() {
    return (
      <div>
        this is recommend page
        <br />
        <Link to="/singers">To Singers page</Link>
        <br />
        <Link to="/rank">To Rank page</Link>
      </div>
    );
  }
}

export default Recommend;