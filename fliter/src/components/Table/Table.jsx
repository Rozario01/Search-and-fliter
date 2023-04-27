import React from "react";
import "./Table.css";
import "bootstrap";
const Table = ({ data }) => {
  return (
    <div className="TableContainer">
      <table className="tables">
        <tbody>
          <tr>
            <th>FirstName</th>
            <th>SurName</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
