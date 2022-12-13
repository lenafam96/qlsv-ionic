import "./ListStudent.css";
import { Link } from "react-router-dom";
import { StudentArray } from "../models/StudentArray";
interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  console.log(StudentArray.length);
  
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
        {StudentArray.map((item) => (
          <tr>
            <td>{item.getId()}</td>
            <td>{item.getName()}</td>
            <td>{item.getAddress()}</td>
            <td id="avatar">
              <img
                src={item.getAvatar()}
                alt=""
              />
            </td>
            <td>{item.getScore()}</td>
        </tr>
        ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default ExploreContainer;
