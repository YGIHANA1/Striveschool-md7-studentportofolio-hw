import React from "react";
import Students from "./Students";
const listStyle = {
  'list-style-type': 'none',  
};
export default ({ students, changeStudent, studentSelected }) => (
  <ul className="col-sm-8" style={listStyle} striped bordered hover>
    {students.map((student, index) => (
      <Students
        {...student}
        key={index}
        changeStudent={changeStudent}
        studentSelected={studentSelected}
      />
    ))}
  </ul>
);
