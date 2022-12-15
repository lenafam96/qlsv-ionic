import "./AddStudent.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface ContainerProps {
  data: any[];
  postData: (data: any) => void;
  addPageActive: boolean;
  setAddPageActive: (flag: boolean) => void;
}

const AddStudent: React.FC<ContainerProps> = ({
  data,
  postData,
  addPageActive,
  setAddPageActive,
}) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [score, setScore] = useState("");
  const [idError, setIdError] = useState(false);

  // const location = useLocation();

  const handleClick = async () => {
    await postData({ id, name, address, avatar, score });
    setAddPageActive(!addPageActive);
    // window.location.reload();
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
                onChange={(e) => setScore(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>Thêm</button>
      <button onClick={() => setAddPageActive(!addPageActive)}>Quay lại</button>
    </div>
  );
};

export default AddStudent;
