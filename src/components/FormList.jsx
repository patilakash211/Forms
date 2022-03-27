import React from "react";

const FormList = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Address</td>
            <td>Department </td>
            <td>Salary</td>
            <td>marital state</td>
          </tr>
        </thead>
        <tbody>
          {props.info.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.username}</td>
                <td>{ele.userage}</td>
                <td>{ele.useraddress}</td>
                <td>{ele.userdepartment}</td>
                <td>{ele.usersalary}</td>
                <td>{ele.usermarital ? "Yes" : "No"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormList;
