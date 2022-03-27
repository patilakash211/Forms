import React from "react";

const defaultValue = {
  username: "",
  userage: "",
  useraddress: "",
  userdepartment: "designer",
  usersalary: "",
  usermarital: false
};

const FormInput = (props) => {
  const [formData, setFormData] = React.useState(defaultValue);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({ ...prevState, usermarital: checked }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleAdd = () => {
    console.log(formData);
    props.addData(formData);
  };

  const {
    username,
    userage,
    useraddress,
    userdepartment,
    usersalary,
    usermarital
  } = formData;

  return (
    <div>
      <input
        type="text"
        placeholder="userName"
        onChange={handleChange}
        value={username}
        name="username"
      />
      <br />
      <input
        type="text"
        placeholder="userAge"
        value={userage}
        name="userage"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="userAddress"
        onChange={handleChange}
        value={useraddress}
        name="useraddress"
      />
      <br />
      <select
        value={userdepartment}
        onChange={handleChange}
        name="userdepartment"
      >
        <option value="designer">designer</option>
        <option value="testing">testing</option>
      </select>
      {/* <input type="name" placeholder='userDepartment' value={userDepartment} onChange={(e)=>setUserDepartment(e.target.value)}/> */}
      <br />
      <input
        type="text"
        placeholder="usersalary"
        onChange={handleChange}
        value={usersalary}
        name="usersalary"
      />
      <br />
      <label>Marital Status</label>
      <input
        type="checkbox"
        placeholder="userMarital"
        onChange={handleChange}
        checked={usermarital}
        name="usermarital"
      />
      <br />
      <button onClick={handleAdd}>Submit</button>
    </div>
  );
};

export default FormInput;
