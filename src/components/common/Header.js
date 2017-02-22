import React, {PropTypes, Component} from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { Menu, Grid } from 'semantic-ui-react';

class Header extends Component {

  renderLinks() {
    if (this.props.isAuth) {
      return <Menu.Item
        key={0}
        as={Link}
        to="/signout"
        activeClassName="active">Sign Out</Menu.Item>
    } else {
      return [
        <Menu.Item
          key={1}
          as={Link}
          to="/signin"
          activeClassName="active">Sign In</Menu.Item>,
        <Menu.Item
          key={2}
          as={Link}
          to="/signup"
          activeClassName="active">Sign Up</Menu.Item>,
      ];
    }

  }

  render() {

    console.log(this.props.isAuth);

    return (
      <Grid.Row>
        <Menu pointing className="top-menu">
          <Menu.Item
            as={IndexLink}
            to="/"
            activeClassName="active">Home</Menu.Item>

          <Menu.Item
            as={Link}
            to="/todo"
            activeClassName="active">Todo</Menu.Item>

          <Menu.Item
            as={Link}
            to="/chat"
            activeClassName="active">Chat</Menu.Item>

          <Menu.Item
            as={Link}
            to="/about"
            name="about"
            activeClassName="active">About</Menu.Item>

          <Menu.Menu position='right'>
            {this.renderLinks()}
          </Menu.Menu>
        </Menu>
      </Grid.Row>
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
