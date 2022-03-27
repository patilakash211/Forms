import React from "react";
import FormInput from "./components/FormInput";
import FormList from "./components/FormList";
import "./index.css";

// for dummy purpose

// const dataArr = [
//   {
//     id: 1,
//     username: "rohan",
//     userage: "20",
//     useraddress: "dummy",
//     userdepartment: "science",
//     usersalary: "2000",
//     usermarital: false
//   },
//   {
//     id: 2,
//     username: "xoxo",
//     userage: "20",
//     useraddress: "dummy",
//     userdepartment: "marketing",
//     usersalary: "4000",
//     usermarital: false
//   },
//   {
//     id: 3,
//     username: "lmao",
//     userage: "20",
//     useraddress: "dummy",
//     userdepartment: "hr",
//     usersalary: "7500",
//     usermarital: false
//   }
// ];

export default function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    let arr =
      localStorage.getItem("user-array") == null
        ? []
        : JSON.parse(localStorage.getItem("user-array"));
    setData(arr);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("user-array", JSON.stringify(data));
  }, [data]);

  const addData = (item) => {
    const newObj = { ...item, id: data.length + 1 };
    setData((prevState) => [...data, newObj]);
    // localStorage.setItem("user-array", JSON.stringify(data));
  };

  return (
    <div className="App">
      <FormInput addData={addData} />
      <FormList info={data} />
    </div>
  );
}
