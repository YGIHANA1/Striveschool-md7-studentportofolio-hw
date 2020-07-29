import React, { Component } from "react";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";
import { students } from "../data/students";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
class StudentData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentSelected: null,
    };
  }
  popOverToggle = () => {
    this.setState({ showPopover: !this.state.showPopover });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.student.students.length < this.props.student.students.length) {
      this.setState({ showPopover: true }, () => {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(
          () => this.setState({ showPopover: false }),
          2500
        );
      });
    }
  }

  changeStudent = (id) => this.setState({ studentSelected: id });
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  render() {
    return (
      <div className="row">
        <StudentList
          studentSelected={this.state.studentSelected}
          changeStudent={this.changeStudent}
          students={students}
        />
        <StudentDetail
          studentSelected={this.state.studentSelected}
          students={students}
          addToStudent={this.props.addToStudent}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(StudentData);