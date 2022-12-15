import "./ListStudent.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [studentArray, setStudentArray] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://639a835ad514150197376164.mockapi.io/student"
      );
      setStudentArray(res.data);
    };
    getData();
    console.log(studentArray);
  }, [studentArray]);

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
          {studentArray.map((item: any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td id="avatar">
                <img src={item.avatar} alt="" />
              </td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExploreContainer;
