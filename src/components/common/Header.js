import React, {PropTypes, Component} from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

  renderLinks() {
    if (this.props.isAuth) {
      return <li className="nav-item">
        <Link
          activeClassName="active"
          to="/signout">Sign Out</Link>
      </li>
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link
            activeClassName="active"
            to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link
            activeClassName="active"
            to="/signup">Sign Up</Link>
        </li>,
      ];
    }

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
              </li>
              <li className="nav-item">
                <Link to="/todo" activeClassName="active">Todo</Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" activeClassName="active">Courses</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" activeClassName="active">About</Link>
              </li>
              {this.renderLinks()}
            </ul>
          </nav>
        </div>
      </div>
    )
  };
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps)(Header);
