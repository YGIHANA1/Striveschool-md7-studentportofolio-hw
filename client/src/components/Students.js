import React from "react";
import {Table} from 'react-bootstrap'

export default ({ id, email, name, surname, dateOfBirth, changeStudent, studentSelected }) => (
  <li
    onClick={() => changeStudent(id)}
    className={studentSelected === id ? "border-thick card mt-3" : "card mt-3"}
    key={id}
    style={{ cursor: "pointer" }}
  >
    <div className="md-4">
    <Table striped bordered hover >
  <thead>
    <tr>
      <th>id</th>
      <th>email</th>
      <th>name</th>
      <th>surname</th>
      <th>dateOfBirth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{id}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{dateOfBirth}</td>
    </tr>  
  </tbody>
</Table>
    </div>
  </li>
);
