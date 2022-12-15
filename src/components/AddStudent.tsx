import "./AddStudent.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const history = useHistory();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [score, setScore] = useState("");
  const [idError, setIdError] = useState(false);
  const [newST, setNewST] = useState({});
  const handleClick = () => {
    post({ id, name, address, avatar, score });
    history.push("/home");
  };

  const post = async (data: any) => {
    await axios
      .post("https://639a835ad514150197376164.mockapi.io/student", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    let img = e.target.files;

    if (!img) return;
    setAvatar(URL.createObjectURL(img[0]));
  };
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <td>Id</td>
            <td>
              <input
                type="text"
                name="id"
                id=""
                required
                onChange={(e) => setId(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                name="name"
                id=""
                required
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input
                type="text"
                name="address"
                id=""
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Avatar</td>
            <td>
              <input
                accept="image/*"
                type="file"
                name="avatar"
                id=""
                multiple={false}
                required
                onChange={(e) => handleInputAvatar(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Score</td>
            <td>
              <input
                type="number"
                name="score"
                id=""
                required
                onChange={(e) => setScore(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>Thêm</button>
      <Link to="back">
        <button>Quay lại</button>
      </Link>
    </div>
  );
};

export default ExploreContainer;
