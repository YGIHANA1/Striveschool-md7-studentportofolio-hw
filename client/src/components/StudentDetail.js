import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToStudent: (id) =>
    dispatch({
      type: "ADD_ITEM_TO_STUDENT",
      payload: id,
    }),
});

class StudentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.studentSelected !== this.props.studentSelected) {
      this.setState({
        student: this.props.students.find(
          (student) => student.id === this.props.studentSelected
        ),
      });
    }
  }

  render() {
    return this.state.student? (
      <div className="col-sm-8">
        <div className="row mt-3">
          <div className="col-sm-12">
            <h1>{this.state.student.name}</h1>
          </div>
        </div>
        
          <div className="col-sm-7">
            <p>
              <span className="font-weight-bold">email:</span>{" "}
              {this.state.student.email}
            </p>
            <p>
              <span className="font-weight-bold">surname:</span>{" "}
              {this.state.student.surname}
            </p>
            {/* <Button
              color="primary"
              onClick={() => this.props.addToCart(this.state.student.id)}
            >
              BUY
            </Button> */}
          </div>
        </div>
    ) : (
      <div className="col-sm-8">
        <div className="row margin-top">
          <div className="col-sm-12">
            <h3>Please select a student!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentDetail);
