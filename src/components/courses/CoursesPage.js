import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: { title: '' }
    }
  }

  static propTypes = {
    courses: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired,
  };

  onTitleChange(event) {
    let course = this.state.course;
    course.title = event.target.value;
    this.setState({course});
  }

  onClickSave(event) {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, i) {
    return <div key={i}>{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add course</h2>
        <input
          type="text"
          onChange={this.onTitleChange.bind(this)}
          value={this.state.course.title}/>

        <input
          type="submit"
          onClick={this.onClickSave.bind(this)}
          value="Save"/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);