import "./AddStudent.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Student } from "../models/Student";
import { checkIdExists, StudentArray } from "../models/StudentArray";

interface ContainerProps {
  popup: boolean;
  updatePopup: (arg: boolean) => void;
}

const AddStudent: React.FC<ContainerProps> = ({ popup, updatePopup }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [score, setScore] = useState("");

  const handleClick = () => {
    if (
      id === "" ||
      name === "" ||
      avatar === "" ||
      address === "" ||
      score === "" ||
      checkIdExists(id)
    ) {
      return;
    }
    const st = new Student(id, name, address, avatar, Number(score));
    console.log(StudentArray);

    StudentArray.push(st);
    updatePopup(!popup);
    // console.log(id, name, address, avatar, score);
    console.log(StudentArray[0]);
  };
  useEffect(() => {
    // console.log(popup);
    console.log("🚀 ~ file: AddStudent.tsx:28 ~ useEffect ~ popup", popup);
  }, [popup]);

  const handleInputAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    let img = e.target.files;

    if (!img) return;
    setAvatar(URL.createObjectURL(img[0]));
  };

  return (
    <div className="containerEdit" id="addStudent">
      <table className="addSt">
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
      <Link to="home">
        <button className="btnAdd" onClick={handleClick}>
          Thêm
        </button>
      </Link>
      <Link to="back">
        <button
          className="btnBack"
          onClick={() => {
            updatePopup(!popup);
          }}
        >
          Quay lại
        </button>
      </Link>
    </div>
  );
};

export default AddStudent;
