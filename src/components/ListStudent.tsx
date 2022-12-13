import "./ListStudent.css";
import { Link } from "react-router-dom";
import { StudentArray } from "../models/StudentArray";
import { useEffect, useState } from "react";
interface ContainerProps {}

const ListStudent: React.FC<ContainerProps> = () => {
  // console.log(StudentArray.length);
  // console.log(StudentArray);

  const [arr, setArr] = useState(StudentArray);
  const [click, setClick] = useState(0);

  useEffect(() => {
    // console.log(arr);

    setArr(StudentArray);
  }, [click]);

  const handleClick = () => {
    console.log(StudentArray);

    setClick(click + 1);
  };

  return (
    <div className="container">
      <Link to="add">
        <button>Thêm sinh viên</button>
      </Link>
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
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
};

export default ListStudent;
