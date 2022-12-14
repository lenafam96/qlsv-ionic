import "./ListStudent.css";
import { Link } from "react-router-dom";
import { StudentArray } from "../models/StudentArray";
import { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
interface ContainerProps {}

const ListStudent: React.FC<ContainerProps> = () => {
  // console.log(StudentArray.length);
  // console.log(StudentArray);

  const [arr, setArr] = useState(StudentArray);
  const [click, setClick] = useState(0);
  const [popup, setPopup] = useState(true)

  useEffect(() => {
    // console.log(arr);
    // setClick(click + 1);

    // setArr(StudentArray);
  }, [popup]);
const updatePopup = (pop:boolean)=>{
  setPopup(pop);
}
  const handleClick = () => {
    console.log(StudentArray);
console.log(popup);
setPopup(!popup)
    setClick(click + 1);
  };


  return (
    <div className="container">
      {/* <Link to="add"> */}
      {popup && <AddStudent popup={popup} updatePopup={updatePopup}/>}
      {popup ?" " : <button onClick={handleClick} >Thêm sinh viên</button>}
      {/* </Link> */}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Avatar</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item) => (
            <tr key={item.getId()}>
              <td>{item.getId()}</td>
              <td>{item.getName()}</td>
              <td>{item.getAddress()}</td>
              <td id="avatar">
                <img src={item.getAvatar()} alt="" />
              </td>
              <td>{item.getScore()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>{StudentArray.length}</p>
      <p>{arr.length}</p>
      <p>{click}</p>
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
};

export default ListStudent;
