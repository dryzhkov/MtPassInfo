import * as React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/passes" activeClassName="active">Passes</Link>
    </nav>
  );
};

export default Header;