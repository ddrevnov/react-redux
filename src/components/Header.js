import React from 'react';
import { Link } from 'react-router';
import logo from '../logo.svg'

const Header = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to={"/"}>
            <img className="logo" src={logo} />
          </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to={"/home"} activeClassName={'link--active'}>Home</Link></li>
            <li><Link to={"/user/10"} activeClassName={'link--active'}>User</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;