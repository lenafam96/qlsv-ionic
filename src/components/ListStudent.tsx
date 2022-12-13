import "./ListStudent.css";
import { Link } from "react-router-dom";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
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
          <tr>
            <td>1</td>
            <td>Phan Thanh Hải</td>
            <td>Thái Bình</td>
            <td id="avatar">
              <img
                src="blob:http://localhost:8100/6223297f-6080-454c-a21c-563252e78f1c"
                alt=""
              />
            </td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExploreContainer;
