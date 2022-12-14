import "./AddStudent.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Student } from "../models/Student";
import { StudentArray } from "../models/StudentArray";

interface ContainerProps {
  popup: boolean;
  student: Student;
  updatePopup: (arg: boolean) => void;
}

const EditStudent: React.FC<ContainerProps> = ({
  popup,
  updatePopup,
  student,
}) => {
  const [id, setId] = useState(student.getId());
  const [name, setName] = useState(student.getName());
  const [address, setAddress] = useState(student.getAddress());
  const [avatar, setAvatar] = useState("");
  const [score, setScore] = useState(String(student.getScore()));

  const handleClickEdit = () => {
    if (id === "" || name === "" || address === "" || score === "") {
      return;
    }
    student.setId(id);
    student.setName(name);
    student.setAddress(address);
    student.setScore(Number(score));
    if (avatar !== "") student.setAvatar(avatar);

    // StudentArray.push(st);
    updatePopup(!popup);
    // console.log(id, name, address, avatar, score);
    console.log(student);
  };

  const handleClickDelete = (id: string) => {
    StudentArray.filter((st) => {
      return st.getId() !== id;
    });
    console.log(id);

    console.log(StudentArray);
    updatePopup(!popup);
  };
  useEffect(() => {
    // console.log(popup);
    // console.log("🚀 ~ file: AddStudent.tsx:28 ~ useEffect ~ popup", popup);
    console.log(student);
  }, [popup]);

  const handleInputAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    let img = e.target.files;

    if (!img) return;
    setAvatar(URL.createObjectURL(img[0]));
  };

  return (
    <div className="container" id="addStudent">
      <table className="addSt">
        <tbody>
          <tr>
            <td>Id</td>
            <td>
              <input
                type="text"
                name="id"
                id=""
                defaultValue={student.getId()}
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
                defaultValue={student.getName()}
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
                defaultValue={student.getAddress()}
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
                defaultValue={student.getScore()}
                onChange={(e) => setScore(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="home">
        <button onClick={handleClickEdit}>Cập nhật</button>
      </Link>
      <Link to="home">
        <button onClick={() => handleClickDelete(id)}>Xoá</button>
      </Link>
      <Link to="back">
        <button
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

export default EditStudent;
