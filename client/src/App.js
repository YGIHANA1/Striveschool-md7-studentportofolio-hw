import React, { Component } from "react";
import "./App.css";
// import CartIndicator from "./components/CartIndicator";
// import StudentDetail from "./components/StudentDetail";
import StudentData from "./components/StudentData";
import Students from "./components/Students";
// import StudentIndicater from "./components/StudentIndicater";
import { Route, Link } from "react-router-dom";
// import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    student: {
      studentDetail: [],
    },
  };

  handleAddToStudent = (id) => {
    this.setState({
      ...this.state,
     student: {
        ...this.state.student,
        studentsDetail: [...this.state.student.students, id],
      },
    });
  };

  handleRemoveFromStudent = (id) => {
    const studentToRemove = this.state.student.students.findIndex(
      (studentId) => studentId === id
    );

    this.setState({
      ...this.state,
      student: {
        ...this.state.student,
        students: [
          ...this.state.student.students.slice(0, studentToRemove),
          ...this.state.student.students.slice(studentToRemove + 1),
        ],
      },
    });
  };

  render() {
    return (
      <div className="container margin-top">
        <div className="row">
          <div className="col-sm-12 text-center background-div">
            <Link to="/">
              <h1>Striveschool student porto folio</h1>
            </Link>
          </div>
          {/* <CartIndicator cartItemsNum={this.state.keep.students.length} /> */}
          <StudentData/>
      </div>
      <hr />
      <div className="container">
        <Route path="/Students" exact component={Students} />
        <Route path="/Data" exact component={StudentData} />
      </div> 
        </div>
  
    );
  }
}

export default App;
