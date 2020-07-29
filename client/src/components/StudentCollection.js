import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { students } from "../data/students";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) =>
    dispatch({ type: "REMOVE_ITEM_FROM_STUDENT", payload: id }),
});

class StudentCollection extends Component {
  render() {
    const student = this.props.student.students.map((studentId) =>
      students.find((student) => student.id === studentId)
    );
    return (
      <div className="row">
        <ul className="col-sm-12" style={{ listStyle: "none" }}>
          {student.map((student, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => this.props.removeFromStudent(student.id)}
              >
      
              </Button>
             
              {student.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentCollection);
